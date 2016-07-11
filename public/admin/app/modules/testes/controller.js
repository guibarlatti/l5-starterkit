/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require, Backbone*/

define([], function () {

    'use strict';

    return {

        management: function () {
            var model = new Backbone.Model();
            require(['modules/testes/views/management'], function (View) {
                app.mainRegion.show(new View({model: model}));
            });
        },

        register: function (id) {
            var model = new Backbone.Model();

            if(id) {
                model.set('id', id);
            }

            require(['modules/testes/views/register'], function (View) {
                app.mainRegion.show(new View({model: model}));
            });
        }

    };
});
