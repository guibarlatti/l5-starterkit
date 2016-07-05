/*jslint browser: true, devel: true, nomen: true*/
/*global $, Marionette, jQuery, define, app, _, require*/

define([
    'tpl!modules/jobOpportunities/templates/management.html',
    'tpl!modules/jobOpportunities/templates/itemTemplate.html',
    'system/mixins/management',
    'stickit'
], function (htmlTemplate, htmlItemTemplate, ManagementMixin) {

    'use strict';

    var ManagementView = Marionette.ItemView.extend({
        template: htmlTemplate,
        itemTemplate: htmlItemTemplate,
        endpoint: app.config.getEndPoint('jobOpportunities'),
        itemsPerPage: 'auto',
        sortProperty: 'name',
        viewRegisterPath: 'modules/jobOpportunities/views/register',
        entityName: 'Vaga',
        moduleName: 'jobOpportunities',
        eventRefreshList: 'jobOpportunities:refreshList',
        eventDeletedItem: 'jobOpportunities:deletedItem',
        modalCustomClass: 'modal-large'
    });

    ManagementMixin.events['click .showModalFindCandidates'] = function (e) {
        e.preventDefault();
        var id = $(e.currentTarget).data('id');
        require(['modules/jobOpportunities/views/candidates'], function (View) {
            var actionIcon = '<i class="' + app.utils.getIconRoute('jobOpportunities') + '"></i> ',
                actionTitle = 'Candidatos compatíveis com esta vaga',
                view = new View({model: new Backbone.Model({'id': id})}),
                modalOptions = {
                    showFooter: false,
                    title: actionIcon + actionTitle,
                    removeExtraPanel: true,
                    customClass: 'modal-large'
                };
            app.commands.execute("app:show:modalView", view, modalOptions);
        }.bind(this));

    };

    _.extend(ManagementView.prototype, ManagementMixin);

    return ManagementView;
});

