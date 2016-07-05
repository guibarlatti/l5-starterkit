/*global define */

define([
	'marionette'
], function (Marionette) {

	'use strict';

    var ModuleRouter = Marionette.AppRouter.extend({

        appRoutes: {
            '': 'index',
            'companyDashboard': 'index',
						'hello': 'hello'
        }

    });

    return ModuleRouter;

});
