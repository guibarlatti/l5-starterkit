/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) roles
 *
 */

define([
    'marionette',
    'modules/roles/controller',
    'modules/roles/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo roles, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    return app.module("roles", function (roles) {

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
                title: 'roles',
                route: 'roles',
                iconClass: 'fa fa-star',
                order: 2,
                accessLevel: 1
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:roles -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });
});
