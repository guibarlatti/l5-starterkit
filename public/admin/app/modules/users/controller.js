/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require, Backbone*/

define([], function () {

    'use strict';

    return {

        management: function () {
            var model = new Backbone.Model();
            require(['modules/users/views/management'], function (View) {
                app.mainRegion.show(new View({model: model}));
            });
        },

        register: function (id) {
            var model = new Backbone.Model();

            if(id) {
                model.set('id', id);
            }

            require(['modules/users/views/register'], function (View) {
                app.mainRegion.show(new View({model: model}));
            });
        }

    };
});
