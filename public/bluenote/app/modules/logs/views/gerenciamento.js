/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
    'marionette',
    'tpl!modules/logs/templates/management.html',
    'stickit'
    //'datatables',
    //'dataTableTWBS'
], function (Marionette, htmlTemplate) {

    'use strict';

    return Marionette.ItemView.extend({

        template: htmlTemplate,

        initialize: function () {
        },

        onRender: function () {
            var url = env.urlRoot + '/logs?token=' + window.localStorage.getItem('token'),
                $iframe = this.$('iframe');

            $iframe.attr('src', url).show();

            $iframe.on('load', function () {

                $iframe.contents().find(".nav a").each(function (k, v) {
                    var el = $(v);
                    el.attr('href', el.attr('href') + '&token=' + window.localStorage.getItem('token'));
                });

                $iframe.contents().find('#delete-log, li.dropdown').hide();

                $('.loading-content').hide('fast', function () {
                });
            });

        },

        events: {},

        bindings: {}

    });

});
