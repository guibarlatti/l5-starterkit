/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) recruits
 *
 */

define([
    'marionette',
    'modules/recruits/controller',
    'modules/recruits/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo recruits, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    return app.module("recruits", function (recruits) {

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
                title: 'Aprendizes',
                route: 'recruits',
                iconClass: 'fa fa-graduation-cap',
                order: 1,
                accessLevel: 1
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:recruits -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });
});
