/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    return Marionette.AppRouter.extend({

        appRoutes: {
            'reports': 'manage',
            'reports/register': 'register',
            'reports/register/:id': 'register'
        }

    });

});
