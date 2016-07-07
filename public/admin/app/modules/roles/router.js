/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    return Marionette.AppRouter.extend({

        appRoutes: {
            'roles': 'management',
						'roles/create': 'register',
            'roles/edit/:id': 'register'
        }

    });

});
