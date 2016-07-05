/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require, Backbone*/

define([
    'app',
    'modules/companies/views/management'

], function (app, ManagementView) {

    'use strict';

    return {

        manage: function () {
            app.mainRegion.show(new ManagementView());
        },


        register: function (id) {

            var registerModel = new Backbone.Model();

            if (id) {
                registerModel.set('id', id);
            }

            require(['modules/companies/views/register'], function (RegisterView) {
                app.mainRegion.show(new RegisterView({model: registerModel}));
            });


        }

    };
});
