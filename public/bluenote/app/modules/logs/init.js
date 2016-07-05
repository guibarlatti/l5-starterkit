/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) logs
 *
 */

define([
    'marionette',
    'modules/logs/controller',
    'modules/logs/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo logs, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    return app.module("logs", function (logs) {

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
                title: 'Logs',
                route: 'logs',
                iconClass: 'fa fa-book',
                order: 12,
                accessLevel: 0
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:logs -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });
});
