/*global define */

define([
	'backbone',
	'system/models/menuRoute'
], function (Backbone, MenuRoute) {
	'use strict';

	return Backbone.Collection.extend({

        initialize: function () {
           this.sort();
        },

        comparator: function(collection) {
            return parseInt(collection.get('order'));
        },

		model: MenuRoute
	});
});
