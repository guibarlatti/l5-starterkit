/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require, Backbone*/

define([
    'app',
    'modules/logs/views/gerenciamento'

], function (app, ViewGerenciamento) {

    'use strict';

    return {

        gerenciar: function () {
            app.mainRegion.show(new ViewGerenciamento());
        },



    };
});
