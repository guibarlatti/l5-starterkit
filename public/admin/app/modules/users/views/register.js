/*global app, $, Marionette */
define([
    'tpl!modules/users/templates/register.html',
    'modules/users/config/config',
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
                    url: app.config.getEndPoint('users/' + this.model.get('id'))
                }).done(function (result) {
                    this.model.set(result.data);
                    this.stickit();
                }.bind(this));
            }
        },

        save: function (e) {
            e && e.preventDefault();
            var requestData = this.model.toJSON();

            var request = app.dataStore.ajax({
                url: app.config.getEndPoint('users'),
                data: requestData,
                type: this.model.get('id') ? 'PUT' : 'POST'
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
