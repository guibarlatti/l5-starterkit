/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

/**
 *
 * Módulo (pacote) companyDashboard
 *
 */

define([
    'marionette',
    'modules/companyDashboard/controller',
    'modules/companyDashboard/router'
], function (Marionette, Controller, Router) {

    'use strict';

    /*
     * Definição do módulo companyDashboard, adicionando initializer
     * e associando nosso Router para módulo
     *
     */
    var Module = app.module("companyDashboard", function (companyDashboard) {

        /**
         * evitando que este módulo seja carregado automaticamente
         */
        this.startWithParent = false;

        /**
         *  Definição das rotas que devem aparecer
         *  no menu principal da applicação
         */
        this.menuEntries = [
            //{
            //    //title: 'Dashboard',
            //    //route: 'companyDashboard',
            //    //iconClass: 'fa fa-cog',
            //    //order: 1,
            //    //accessLevel: 2,
            //    //nestedItems: [{title: 'Dashboard', route: 'companyDashboard',  iconClass: 'fa fa-home'}]
            //}
        ];

        /**
         *  Initializer do módulo
         */
        this.addInitializer(function () {

            console.log('Module:companyDashboard -> initialized');
            this.router = new Router({
                controller: Controller
            });
        });

    });

    return Module;
});
