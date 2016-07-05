/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require, Backbone*/

define([], function () {

    'use strict';

    return {

        register: function (id) {

            var registerModel = new Backbone.Model();

            if (id) {
                registerModel.set('id', id);
            }

            require(['modules/employeeProfile/views/register'], function (RegisterView) {
                app.mainRegion.show(new RegisterView({model: registerModel}));
            });


        }

    };
});
