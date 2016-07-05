/*jslint browser: true, devel: true, nomen: true*/
/*global $, Marionette, jQuery, define, app, _, require*/

define([
    'tpl!modules/roles/templates/management.html',
    'tpl!modules/roles/templates/itemTemplate.html',
    'system/mixins/management',
    'stickit'
], function (htmlTemplate, htmlItemTemplate, ManagementMixin) {

    'use strict';

    var ManagementView = Marionette.ItemView.extend({
        template: htmlTemplate,
        itemTemplate: htmlItemTemplate,
        endpoint: app.config.getEndPoint('roles'),
        itemsPerPage: 'auto',
        sortProperty: 'name',
        viewRegisterPath: 'modules/roles/views/register',
        entityName: 'Cargo',
        moduleName: 'roles',
        eventRefreshList: 'roles:refreshList',
        eventDeletedItem: 'roles:deletedItem',
        modalCustomClass: ''
    });

    _.extend(ManagementView.prototype, ManagementMixin);

    return ManagementView;
});



