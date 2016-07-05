/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
	'app',
    'modules/dashboard/views/dashboardHomeView'

], function (app, DashboardHome) {

	'use strict';

	return {

        index: function () {
            app.mainRegion.show(new DashboardHome());
        },

				hello: function () {
						require(['modules/dashboard/views/hello'], function(View) {
								app.mainRegion.show(new View());
						});
				}

	};
});
