/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) reports
 *
 */

define([
    'marionette',
    'modules/reports/controller',
    'modules/reports/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo reports, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    return app.module("reports", function (reports) {

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
                title: 'Relatórios',
                route: 'reports',
                iconClass: 'fa fa-file-pdf-o',
                order: 11,
                accessLevel: 0
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:reports -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });
});
