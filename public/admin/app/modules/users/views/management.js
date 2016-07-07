/*jslint browser: true, devel: true, nomen: true*/
/*global $, Marionette, jQuery, define, app, _, require*/

define([
    'tpl!modules/users/templates/management.html',
    'tpl!modules/users/templates/itemTemplate.html',
    'system/mixins/management',
    'stickit'
], function (htmlTemplate, htmlItemTemplate, ManagementMixin) {

    'use strict';

    var ManagementView = Marionette.ItemView.extend({
        template: htmlTemplate,
        itemTemplate: htmlItemTemplate,
        endpoint: app.config.getEndPoint('users'),
        itemsPerPage: 'auto',
        sortProperty: 'name',
        viewRegisterPath: 'modules/users/views/register',
        entityName: 'users',
        moduleName: 'users',
        eventRefreshList: 'users:refreshList',
        eventDeletedItem: 'users:deletedItem',
        modalCustomClass: ''
    });

    _.extend(ManagementView.prototype, ManagementMixin);

    return ManagementView;
});
