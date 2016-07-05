/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    return Marionette.AppRouter.extend({

        appRoutes: {
            'attendances': 'manage',
            'attendances/register': 'register',
            'attendances/register/:id': 'register',
            'attendances/call/:id': 'call'
        }

    });

});
