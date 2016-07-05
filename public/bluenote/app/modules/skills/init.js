/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) skills
 *
 */

define([
    'marionette',
    'modules/skills/controller',
    'modules/skills/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo skills, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    return app.module("skills", function (skills) {

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
                title: 'Habilidades',
                route: 'skills',
                iconClass: 'fa fa-star',
                order: 4,
                accessLevel: 1
            }
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {
            console.log('Module:skills -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });
});
