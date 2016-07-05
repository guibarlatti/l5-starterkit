define([
    'tpl!modules/companyDashboard/templates/companyDashboardHome.html',

    'echarts'
], function (DashboardHomeTemplate, ec) {

    'use strict';

    return Marionette.LayoutView.extend({

        template: DashboardHomeTemplate,
        regions: {
            slotA1: "#slot-a1",
            slotA2: "#slot-a2"
        },
        onRender: function () {

        }
    });
});
