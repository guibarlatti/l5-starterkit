/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    var ModuleRouter = Marionette.AppRouter.extend({

        appRoutes: {
            'employees': 'manage',
            'employees/register': 'register',
            'employees/register/:id': 'register'
        }

    });

    return ModuleRouter;

});
