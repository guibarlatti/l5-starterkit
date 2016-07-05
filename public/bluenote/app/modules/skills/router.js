/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    return Marionette.AppRouter.extend({

        appRoutes: {
            'skills': 'manage',
            'skills/register': 'register',
            'skills/register/:id': 'register'
        }

    });

});
