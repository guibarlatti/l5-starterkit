/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
	'app',
    'modules/companyDashboard/views/companyDashboardHomeView'

], function (app, DashboardHome) {

	'use strict';

	return {

        index: function () {
            app.mainRegion.show(new DashboardHome());
        },

				hello: function () {
						require(['modules/companyDashboard/views/hello'], function(View) {
								app.mainRegion.show(new View());
						});
				}

	};
});
