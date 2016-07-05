/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
    'tpl!modules/reports/templates/jobAssignmentsReport.html',
    'system/helpers/reportsHelper',
    'modules/reports/config/config',
    'moment',
    'daterangepicker',
    'stickit'
], function (htmlTemplate, reportsHelper, config, moment) {
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

            this.$('#jobAssignmentRange')
                .daterangepicker(config.datepicker);

            this.stickit();
        },
        events: {
            'click .showModal': reportsHelper.showModalReport
        },
        bindings: {
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
