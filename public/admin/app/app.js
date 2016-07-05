/*jslint browser: true, devel: true, nomen: true*/
/* global $, jQuery, define, app, _, require*/

define([
    'backbone',
    'marionette',
    'appConfig',
    'system/regions/dialog',
    'system/collections/routesCollection',
    'system/views/menuView',
    'system/utils',
    'system/commands',
    'system/helpers/dataStore',
    'toastr',
    'bootstrap'
], function (Backbone, Marionette, config, DialogRegion, RoutesCollection, MenuView, utils, commands, dataStore) {


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
        menu: '#app-routes-collection',
        // notificationsRegion: '#notifications-area',
        mainRegion: '#workbench',
        dialog: {
            selector: "#dialog",
            regionType: DialogRegion
        },
        lockScreenRegion: '#lockScreen'
    });

    utils.set(app);
    commands.set(app);

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

        require(['system/init'], function (module) {
            module.start();
        });

        require(['modules/dashboard/init'], function (module) {
            module.start();
            if (module.hasOwnProperty('menuEntries') && module.menuEntries.length) {
                //app.routesCollection.add(module.menuEntries);
                _.each(module.menuEntries, function (entry) {
                    app.routesCollection.add(entry);
                });
            }
        });

        require(['modules/roles/init'], function (module) {
            module.start();
            // adicionando rotas do módulo
            if (module.hasOwnProperty('menuEntries') && module.menuEntries.length) {
                //app.routesCollection.add(module.menuEntries);
                _.each(module.menuEntries, function (entry) {
                        app.routesCollection.add(entry);
                });
            }
            app.vent.trigger('modules:loaded');
        });
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
