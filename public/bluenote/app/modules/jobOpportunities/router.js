/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    return Marionette.AppRouter.extend({

        appRoutes: {
            'jobOpportunities': 'manage',
            'jobOpportunities/register': 'register',
            'jobOpportunities/register/:id': 'register'
        }

    });

});
