/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    return Marionette.AppRouter.extend({

        appRoutes: {
            'roles': 'management',
            'roles/edit/:id': 'register'
        }

    });

});
