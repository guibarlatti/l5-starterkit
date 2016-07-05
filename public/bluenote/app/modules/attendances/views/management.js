/*jslint browser: true, devel: true, nomen: true*/
/*global $, Marionette, jQuery, define, app, _, require*/

define([
    'tpl!modules/attendances/templates/management.html',
    'tpl!modules/attendances/templates/itemTemplate.html',
    'system/mixins/management',
    'stickit'
], function (htmlTemplate, htmlItemTemplate, ManagementMixin) {

    'use strict';

    var ManagementView = Marionette.ItemView.extend({
        template: htmlTemplate,
        itemTemplate: htmlItemTemplate,
        endpoint: app.config.getEndPoint('attendances'),
        itemsPerPage: 'auto',
        sortProperty: 'name',
        viewRegisterPath: 'modules/attendances/views/register',
        entityName: 'Chamada',
        moduleName: 'attendances',
        eventRefreshList: 'attendances:refreshList',
        eventDeletedItem: 'attendances:deletedItem',
        modalCustomClass: ''
    });

    _.extend(ManagementView.prototype, ManagementMixin);

    return ManagementView;
});

