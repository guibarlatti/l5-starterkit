/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) jobOpportunities
 *
 */

define([
    'marionette',
    'modules/jobOpportunities/controller',
    'modules/jobOpportunities/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo jobOpportunities, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    return app.module("jobOpportunities", function (jobOpportunities) {

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
                title: 'Vagas',
                route: 'jobOpportunities',
                iconClass: 'fa fa-puzzle-piece',
                order: 3,
                accessLevel: 3
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:jobOpportunities -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });
});
