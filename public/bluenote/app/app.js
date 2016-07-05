/*jslint browser: true, devel: true, nomen: true*/
/* global $, jQuery, define, app, _, require*/

define([
    'backbone',
    'marionette',
    'appConfig',
    'system/regions/mainRegion',
    'system/regions/dialog',
    'system/collections/routesCollection',
    'system/views/menuView',
    'system/utils',
    'system/commands',
    'system/helpers/dataStore',
    'toastr',
    'gritter',
    'bootstrap'

], function (Backbone, Marionette, config, MainRegion, DialogRegion, RoutesCollection, MenuView, utils, commands, dataStore) {


    /**
     * Definição do objeto app Global
     */
    var app = new Marionette.Application();

    /**
     * Associando as configurações da applicação que foram definidas
     * em um arquivo separado
     */
    app.config = config;

    app.dataStore = dataStore;

    /**
     * Definindo as Regions da applicação
     *
     */
    app.addRegions({
        menu: '#main-nav',
        notificationsRegion: '#notifications-area',
        mainRegion: {
            selector: '#main',
            regionType: MainRegion
        },
        dialog: {
            selector: "#dialog",
            regionType: DialogRegion
        },
        lockScreenRegion: '#lockScreen'
    });

    utils.set(app);
    commands.set(app);

    /**
     *  Adicionando uma transição mais suave
     *  para views carregadas na região principal.
     */
    app.mainRegion.on("before:show", function (view) {
        view.$el.hide();

    });

    app.mainRegion.on("show", function (view) {
        view.$el.css('padding-top', '300px').show().css('padding-top', 0);
        // $('html').getNiceScroll(0).doScrollTop(0);
    });


    app.menu.on("show", function () {
        $('#username-placeholder').html(localStorage.getItem('username'));
        $('#role-placeholder').html(localStorage.getItem('role'));
        utils.setMenuScroll(app);
    });


    /**
     * Menu principal
     */
    app.routesCollection = new RoutesCollection();

    /**
     * Obtendo e Iniciando os módulos registrados.
     * Aqui são contados os módulos e após todos
     * serem carregados, iniciamos Backbone.history
     */
    app.addInitializer(function () {

        var modulesLoaded = 0,
            modulesToLoad = 0,
            userModules = this.config.getUserModules();


        userModules.done(function (result) {


            modulesToLoad = result.length;


            require(['system/init'], function (SystemModule) {

                SystemModule.start();

                // Se o módulo System registrar rotas para o menu, adicionamos à coleção de rotas
                if (SystemModule.hasOwnProperty('menuEntries') && SystemModule.menuEntries.length) {
                    app.routesCollection.add(SystemModule.menuEntries);
                }

                // carregar os módulos
                _.each(result, function (moduleName) {

                    var modulePath = 'modules/' + moduleName + '/init';

                    require([modulePath], function (module) {
                        module.start();
                        modulesLoaded += 1;

                        // adicionando rotas do módulo
                        if (module.hasOwnProperty('menuEntries') && module.menuEntries.length) {
                            //app.routesCollection.add(module.menuEntries);
                            _.each(module.menuEntries, function (entry) {
                                if (parseInt(entry.accessLevel) >= parseInt(window.localStorage.getItem('acl'))) {
                                    app.routesCollection.add(entry);
                                }
                            });
                        }

                        if (modulesLoaded === modulesToLoad) {
                            app.vent.trigger('modules:loaded');
                        }
                    });

                }, this);

            }.bind(this));


        }.bind(this));

    });


    /**
     * Aguardamos os módulos serem carregados e iniciamos
     * o menu com as rotas obtidas em app.routesCollection
     */
    app.vent.on("modules:loaded", function (options) {

        Backbone.history.start();

        var menu = new MenuView({
            collection: app.routesCollection
        });

        app.menu.show(menu);
        app.toggleLoading();

    });

    window.app = app;
    return app;
});
