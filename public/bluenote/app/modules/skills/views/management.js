/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
    'marionette',
    'tpl!modules/skills/templates/management.html',
    'tpl!modules/skills/templates/itemTemplate.html',
    'system/mixins/management',
    'stickit'
], function (Marionette, htmlTemplate, htmlItemTemplate, ManagementMixin) {

    'use strict';

    var ManagementView = Marionette.ItemView.extend({
        template: htmlTemplate,
        itemTemplate: htmlItemTemplate,
        endpoint: app.config.getEndPoint('skills'),
        itemsPerPage: 'auto',
        sortProperty: 'name',
        viewRegisterPath: 'modules/skills/views/register',
        entityName: 'Habilidade',
        moduleName: 'skills',
        eventRefreshList: 'skills:refreshList',
        eventDeletedItem: 'skills:deletedItem'
    });

    _.extend(ManagementView.prototype, ManagementMixin);

    return ManagementView;
});
