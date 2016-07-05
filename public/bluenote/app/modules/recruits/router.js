/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    return Marionette.AppRouter.extend({

        appRoutes: {
            'recruits': 'manage',
            'recruits/register': 'register',
            'recruits/register/:id': 'register'
        }

    });

});
