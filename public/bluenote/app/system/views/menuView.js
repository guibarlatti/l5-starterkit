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
        className: 'main-menu',

        /**
         * Callbacks
         * disparados ao adicionar um model na collection de rotas da aplicação
         * (app.routesCollection)
         */
        onBeforeAddChild: function (view) {

        },

        onAddChild: function (view) {
           // console.log('after add child');
        }

    });

});
