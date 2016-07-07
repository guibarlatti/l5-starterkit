/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    return Marionette.AppRouter.extend({

        appRoutes: {
            'users': 'management',
            'users/edit/:id': 'register'
        }

    });

});
