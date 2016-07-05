/*jslint browser: true, devel: true, nomen: true*/
/*global $, Marionette, jQuery, define, app, _, require*/

define([
    'tpl!modules/companies/templates/management.html',
    'tpl!modules/companies/templates/itemTemplate.html',
    'system/mixins/management',
    'stickit'
], function (htmlTemplate, htmlItemTemplate, ManagementMixin) {

    'use strict';

    var ManagementView = Marionette.ItemView.extend({
        template: htmlTemplate,
        itemTemplate: htmlItemTemplate,
        endpoint: app.config.getEndPoint('companies'),
        itemsPerPage: 'auto',
        sortProperty: 'name',
        viewRegisterPath: 'modules/companies/views/register',
        entityName: 'Empresa',
        moduleName: 'companies',
        eventRefreshList: 'companies:refreshList',
        eventDeletedItem: 'companies:deletedItem',
        modalCustomClass: ''
    });

    _.extend(ManagementView.prototype, ManagementMixin);

    return ManagementView;
});

