/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    return Marionette.AppRouter.extend({

        appRoutes: {
            'roles': 'management',
            'roles/register': 'register',
            'roles/register/:id': 'register'
        }

    });

});
