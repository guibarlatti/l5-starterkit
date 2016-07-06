/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
    'marionette',
    'tpl!system/templates/menuItem.html',
    'system/models/menuRoute'

], function (Marionette, htmlTemplate, MenuRoute) {
    'use strict';

    return Marionette.ItemView.extend({
        template: htmlTemplate,
        tagName: 'li',
        model: MenuRoute,

        ui: {
            link: 'a'
        },

        events: {
            'click a': 'activateMenu'
        },
        modelEvents: {
            // "change:active": function () {
            //     this.render();
            // }
        },

        activateMenu: function (e) {

        },

        onRender: function () {
            var currentRoute = window.location.hash.substr(1);

            if(this.model.get('route') == currentRoute) {
                this.$el.addClass('active');
            }

            this.$el.attr('data-route', this.model.get('route'));

            if (this.model.get('childRoutes')) {
                this.$el.addClass('panel panel-default dropdown');
            }
        }

    });
});
