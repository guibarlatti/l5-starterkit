/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) attendances
 *
 */

define([
    'marionette',
    'modules/attendances/controller',
    'modules/attendances/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo attendances, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    return app.module("attendances", function (attendances) {

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
                title: 'Chamadas',
                route: 'attendances',
                iconClass: 'fa fa-calendar',
                order: 2,
                accessLevel: 1
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:attendances -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });
});
