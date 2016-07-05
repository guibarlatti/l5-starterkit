/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
    'marionette',
    'system/views/menuItemView'
], function (Marionette, MenuItemView) {
    'use strict';

    return Marionette.CollectionView.extend({

        childView: MenuItemView,
        tagName: 'ul',
        className: 'nav navbar-nav',
        onBeforeAddChild: function (view) {

        },
        onAddChild: function (view) {

        }

    });

});
