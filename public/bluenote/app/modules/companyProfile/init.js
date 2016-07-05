/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) companyProfile
 *
 */

define([
    'marionette',
    'modules/companyProfile/controller',
    'modules/companyProfile/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo companyProfile, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    return app.module("companyProfile", function (companyProfile) {

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
                title: 'Dados da empresa',
                route: 'companyProfile',
                iconClass: 'fa fa-university',
                order: 1,
                accessLevel: 3
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:companyProfile -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });
});
