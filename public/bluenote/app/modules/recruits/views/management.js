/*jslint browser: true, devel: true, nomen: true*/
/*global $, Marionette, jQuery, define, app, _, require*/

define([
    'tpl!modules/recruits/templates/management.html',
    'tpl!modules/recruits/templates/itemTemplate.html',
    'system/mixins/management',
    'stickit'
], function (htmlTemplate, htmlItemTemplate, ManagementMixin) {

    'use strict';

    var ManagementView = Marionette.ItemView.extend({
        template: htmlTemplate,
        itemTemplate: htmlItemTemplate,
        endpoint: app.config.getEndPoint('recruits'),
        itemsPerPage: 'auto',
        sortProperty: 'name',
        viewRegisterPath: 'modules/recruits/views/register',
        entityName: 'Aprendiz',
        moduleName: 'recruits',
        eventRefreshList: 'recruits:refreshList',
        eventDeletedItem: 'recruits:deletedItem',
        modalCustomClass: 'modal-large'
    });

    _.extend(ManagementView.prototype, ManagementMixin);

    return ManagementView;
});

