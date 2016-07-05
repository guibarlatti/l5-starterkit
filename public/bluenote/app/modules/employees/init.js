/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) employees
 *
 */

define([
    'marionette',
    'modules/employees/controller',
    'modules/employees/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo employees, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    var Module = app.module("employees", function (employees) {

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
                title: 'Colaboradores',
                route: 'employees',
                iconClass: 'fa fa-group',
                order: 5,
                accessLevel: 1
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:employees -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });

    return Module;
});
