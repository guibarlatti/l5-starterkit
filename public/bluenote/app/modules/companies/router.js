/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    return Marionette.AppRouter.extend({

        appRoutes: {
            'companies': 'manage',
            'companies/register': 'register',
            'companies/register/:id': 'register'
        }

    });

});
