/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) users
 *
 */

define([
    'marionette',
    'modules/users/controller',
    'modules/users/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo users, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    return app.module("users", function (users) {

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
                title: 'Roles',
                route: 'users',
                iconClass: 'fa fa-star',
                order: 2,
                accessLevel: 1
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:users -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });
});
