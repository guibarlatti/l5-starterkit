/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
    'tpl!modules/reports/templates/attendanceReport.html',
    'system/helpers/reportsHelper',
    'modules/reports/config/config',
    'daterangepicker',
    'stickit'
], function (htmlTemplate, reportsHelper, config) {
    'use strict';
    return Marionette.ItemView.extend({
        template: htmlTemplate,
        initialize: function () {
            this.model = new Backbone.Model();
            this.listenTo(this.model, 'change', function (e) {
                this.$('.showModal').attr('data-range', e.get('range'));
            });
        },
        onRender: function () {

            this.$('#attendanceRange')
                .daterangepicker(config.datepicker);

            this.stickit();
        },
        events: {
            'click .showModal': reportsHelper.showModalReport
        },
        bindings: {
            '.gradeClass': 'grade_class',
            '.range': {
                observe: 'range',
                onSet: function (value) {
                    return value.split(' - ').join(':').replace(/\//g, '-');
                }
            },
            '.showModal': {
                observe: 'range',
                update: function ($el, val, model, options) {
                    console.log(val);
                    $el.attr('data-range', val);
                }
            }
        }
    });
});

