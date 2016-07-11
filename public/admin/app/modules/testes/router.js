/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    return Marionette.AppRouter.extend({

        appRoutes: {
            'testes': 'management',
						'testes/create': 'register',
            'testes/edit/:id': 'register'
        }

    });

});
