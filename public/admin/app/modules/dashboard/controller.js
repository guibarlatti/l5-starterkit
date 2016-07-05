/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require, Backbone*/

define([], function () {

    'use strict';

    return {

        dashboard: function () {

            var model = new Backbone.Model();

            require(['modules/dashboard/views/home'], function (View) {
                app.mainRegion.show(new View({model: model}));
            });


        }

    };
});
