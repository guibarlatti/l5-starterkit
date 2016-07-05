/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
    'tpl!modules/reports/templates/management.html'
], function (htmlTemplate) {

    'use strict';

    return Marionette.LayoutView.extend({
        template: htmlTemplate,
        regions: {
            slotA1: "#slot-a1",
            slotA2: "#slot-a2",
            slotA3: "#slot-a3",
        },
        onRender: function () {
            this.defineGlobalEvents();
            this.loadModules();
        },
        loadModules: function () {

            require(['modules/reports/views/recruitsReport'], function (View) {
                this.slotA1.show(new View());
            }.bind(this));

            require(['modules/reports/views/jobAssignmentsReport'], function (View) {
                this.slotA2.show(new View());
            }.bind(this));

            require(['modules/reports/views/attendanceReport'], function (View) {
                this.slotA3.show(new View());
            }.bind(this));
        },
        defineGlobalEvents: function () {

            var body = $('body');

            body.off('click', '.print')
                .on('click', '.print', function (e) {
                    e.preventDefault();
                    window.frames["printableFrame"].focus();
                    window.frames["printableFrame"].print();
                });

            body.off('click', '.getPdf')
                .on('click', '.getPdf', function (e) {

                    e.preventDefault();
                    var el = $(this);
                    var defaultHtml = el.html();
                    var loadingHtml = '<i class="fa fa-cog fa-spin fa-fw"></i> Gerarando PDF...';
                    var requestData = $('#printableFrame').attr('src');
                    var url = env.urlRoot + '/report/getPdf?' + requestData.split('?').pop();
                    var downloadLink = $('.dowloadPDFfile');
                    var dowloadTools = $('.dowloadTools');
                    el.html(loadingHtml);
                    $.get(url, function (result) {
                        if (result) {
                            downloadLink.attr('href', result.dowloadPath);
                            dowloadTools.show();
                            el.hide();
                        }
                        el.html(defaultHtml);
                    }, 'json');
                });


        }
    });
});
