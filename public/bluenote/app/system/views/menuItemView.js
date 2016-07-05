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
            
            var el = $(e.currentTarget);

            if(el.attr('href') === '#' || el.attr('href') === '') {
                e.preventDefault();
            } else {
                $('.sub-nav.collapse.in').collapse('hide');
            }           

            $('.main-menu').find('.active').removeClass('active');

            this.$el.find('a').addClass('active');

		},

        onRender: function () {

        }

	});
});
