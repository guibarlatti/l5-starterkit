/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) dashboard
 *
 */

define([
    'marionette',
    'modules/dashboard/controller',
    'modules/dashboard/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo dashboard, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    return app.module("dashboard", function (dashboard) {

        /**
         * evitando que este módulo seja carregado automaticamente
         */
        this.startWithParent = false;

        /**
         *  Definição das rotas que devem aparecer
         *  no menu principal da applicação
         */
        this.menuEntries = [
            {
                title: 'Dashboard',
                route: '',
                iconClass: 'fa fa-dashboard',
                order: 0,
                accessLevel: 1,
                childRoutes: [{
                    title: 'Dashboard',
                    route: '',
                    iconClass: 'fa fa-dashboard',
                    order: 0,
                    accessLevel: 1
                }]
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:dashboard -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });
});
