/*jslint browser: true, devel: true, nomen: true*/
/* global $,Marionette, jQuery, define, app, _, require*/

define([
    'tpl!modules/employees/templates/management.html',
    'tpl!modules/employees/templates/itemTemplate.html',
    'system/mixins/management',
    'stickit'
], function (htmlTemplate, htmlItemTemplate, ManagementMixin) {

    'use strict';

    var ManagementView = Marionette.ItemView.extend({
        template: htmlTemplate,
        itemTemplate: htmlItemTemplate,
        endpoint: app.config.getEndPoint('employees'),
        itemsPerPage: 'auto',
        sortProperty: 'name',
        viewRegisterPath: 'modules/employees/views/register',
        entityName: 'Colaborador',
        moduleName: 'employees',
        eventRefreshList: 'employees:refreshList',
        eventDeletedItem: 'employees:deletedItem',
        modalCustomClass: ''
    });

    _.extend(ManagementView.prototype, ManagementMixin);

    return ManagementView;
});
