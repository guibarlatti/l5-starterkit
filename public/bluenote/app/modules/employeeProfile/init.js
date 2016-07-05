/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) employeeProfile
 *
 */

define([
    'marionette',
    'modules/employeeProfile/controller',
    'modules/employeeProfile/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo employeeProfile, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    return app.module("employeeProfile", function (employeeProfile) {

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
                title: 'Meu Cadastro',
                route: 'employeeProfile',
                iconClass: 'fa fa-user',
                order: 0,
                accessLevel: 1
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:employeeProfile -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });
});
