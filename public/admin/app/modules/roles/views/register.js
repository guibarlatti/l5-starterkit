/*global app, $, Marionette */
define([
    'tpl!modules/roles/templates/register.html',
    'modules/roles/config/config',
    'validate',
    'stickit'
], function (Template, config) {

    'use strict';

    return Marionette.ItemView.extend({
        template: Template,
        initialize: function () {
            this.model = this.model || new Backbone.Model;
        },

        onRender: function () {
            if (this.model.get('id')) {
                this.loadModel();
            }
            this.setupValidation();
            this.stickit();
        },

        setupValidation: function () {
            this.form = this.$('#register-role');
            this.form.validate(config.validation);
        },

        loadModel: function () {
            if (this.model.get('id')) {
                app.dataStore.ajax({
                    type: 'GET',
                    url: app.config.getEndPoint('roles/' + this.model.get('id'))
                }).done(function (result) {
                    this.model.set(result.data);
                    this.stickit();
                }.bind(this));
            }
        },

        save: function (e) {

            e && e.preventDefault();

            var requestData = this.model.toJSON(),
                endpoint =  app.config.getEndPoint('roles'),
                method = 'POST';

            if(this.model.get('id')) {
                method = 'PUT';
                endpoint += '/' + this.model.get('id');
            }

            var request = app.dataStore.ajax({
                url: endpoint,
                data: requestData,
                type: method
            });

            request.done(function () {
                app.utils.notify({
                    type: 'success',
                    text: 'Operação realizada com sucesso.'
                });
            });
        },

        events: {
            'submit #register-role': 'save'
        },

        bindings: config.bindingsCadastro

    });
});
