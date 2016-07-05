/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) companies
 *
 */

define([
    'marionette',
    'modules/companies/controller',
    'modules/companies/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo companies, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    var Module = app.module("companies", function (companies) {

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
                title: 'Empresas Parceiras',
                route: 'companies',
                iconClass: 'fa fa-university',
                order: 5,
                accessLevel: 1
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:companies -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });

    return Module;
});
