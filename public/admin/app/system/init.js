/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) Application
 *
 */

define([
    'app',
    'marionette',
    'system/controller'

], function (app, Marionette, Controller) {

    'use strict';
    /**
     * Definindo as Rotas para este módulo.
     * Os métodos precisam existir no controller do módulo
     */
    var moduleRoutes = {
            'system/docs': 'showDocs',
            'system/logs': 'showLogs',
            '*notFound': 'notFound'
        },

        /*
        * Definindo o Router deste Módulo.
        * Isso pode ser feito em um arquivo separado, caso achar necessário.
        */
        Router = new Marionette.AppRouter({
            //controller recebido via require
            controller: Controller,
            // rotas deste módulo
            appRoutes: moduleRoutes
        }),

        /*
        * Definição do módulo System, adicionando initializer
        * e associando nosso Router para módulo
        *
        */
        Module = app.module("System", function (System) {

            /**
             * evitando que este módulo seja carregado automaticamente
             */
            this.startWithParent = false;

            /**
             *  Definição das rotas que devem aparecer
             *  no menu principal da applicação
             */
            this.menuEntries = [
                // {title: 'Home', route: 'application/home'},
                // {title: 'About', route: 'application/about'},
            ];

            /**
             *  Initializer do módulo
             */
            this.addInitializer(function () {
                console.log('Module:Application -> initialized');
                this.router = Router;
            });

        });

    return Module;
});
