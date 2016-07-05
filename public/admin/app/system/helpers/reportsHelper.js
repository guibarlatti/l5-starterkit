/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require, Backbone*/

define([
    'tpl!modules/reports/templates/reportFrame.html'
], function (reportFrame) {

    'use strict';

    return {
        showModalReport: function (e) {
            e && e.preventDefault();
            this.model = this.model || new Backbone.Model();

            var dataAttributes = $(e.currentTarget).data(),
                data = $.extend(dataAttributes, this.model.toJSON()),
                screenData = $.param($.extend(data, {"perPage": -1, "enableCharts": true})),
                printData = $.param($.extend(data, {"enableCharts": true}));

            var reportView = new Marionette.ItemView({
                template: reportFrame,
                model: new Backbone.Model({
                    reportUrlScreen: env.urlRoot + '/report?' + screenData,
                    reportUrlPrint: env.urlRoot + '/report?' + printData
                })
            });

            app.commands.execute("app:show:modalView", reportView, {
                showFooter: true,
                title: ' ',
                customClass: 'full-screen-modal'
            });
        }
    };

});


