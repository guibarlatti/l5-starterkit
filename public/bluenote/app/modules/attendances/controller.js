/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require, Backbone*/

define([
    'app',
    'modules/attendances/views/management'

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

            require(['modules/attendances/views/register'], function (RegisterView) {
                app.mainRegion.show(new RegisterView({model: registerModel}));
            });
        },

        call: function (id) {

            var attendanceModel = new Backbone.Model();

            if (id) {
                attendanceModel.set('id', id);
            }

            require(['modules/attendances/views/attendanceCall'], function (RegisterView) {
                app.mainRegion.show(new RegisterView({model: attendanceModel}));
            });
        }

    };
});
