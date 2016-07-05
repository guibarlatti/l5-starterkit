/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
    'tpl!modules/jobOpportunities/templates/assingmentRecruitJob.html',
    'modules/jobOpportunities/config/config',
    'stickit'
], function (htmlTemplate, itemTemplate, config) {

    'use strict';

    return Marionette.ItemView.extend({

        template: htmlTemplate,

        initialize: function () {
            if (!this.model) {
                this.model = new Backbone.Model();
            }
            this.listenTo(app.vent, 'recruits:refreshList', function () {

            });
        },

        onRender: function () {
            console.log(this.model.toJSON());
        },

        confirmAssignment: function(e) {
            e && e.preventDefault();

            var request,
                endpoint = app.config.getEndPoint('jobOpportunities/assingCandidate');

            request = app.dataStore.ajax({
                type: 'POST',
                data: {
                    'candidateId': this.model.get('recruit').id,
                    'jobOpportunityId': this.model.get('id')
                },
                url: endpoint
            });

            request.done(function (result) {
                if (result.status === 'success') {
                    app.utils.notify({
                        type: 'success',
                        text: 'Operação realizada com sucesso.'
                    });
                    app.vent.trigger('recruits:refreshList');
                    app.vent.trigger('modal:close', {idViewClosed: this.cid});
                } else {
                    app.utils.notify({
                        type: 'error',
                        text: result.message
                    });
                }
            }.bind(this));
        },

        events: {
            'click .showModalCadastro': 'showModalCadastro',
            'click #confirmAssignment': 'confirmAssignment'
        }

    });

});
