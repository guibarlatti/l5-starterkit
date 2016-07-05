/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
    'tpl!modules/reports/templates/recruitsReport.html',
    'system/helpers/reportsHelper'

], function (htmlTemplate, reportsHelper) {
    'use strict';
    return Marionette.ItemView.extend({
        template: htmlTemplate,
        initialize: function () {
            this.model = new Backbone.Model();
        },
        onRender: function () {
            this.stickit();
        },
        events: {
            'click .showModal': reportsHelper.showModalReport
        },
        bindings: {
            '.gradeClass': 'grade_class',
        }

    });
});
