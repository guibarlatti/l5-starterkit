/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) testes
 *
 */

define([
    'marionette',
    'modules/testes/controller',
    'modules/testes/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo testes, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    return app.module("testes", function (testes) {

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
                title: 'testes',
                route: 'testes',
                iconClass: 'fa fa-star',
                order: 2,
                accessLevel: 1
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:testes -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });
});
