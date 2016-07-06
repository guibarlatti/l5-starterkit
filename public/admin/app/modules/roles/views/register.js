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
            this.listenTo(this.model, 'change', function (e) {
                console.log(e);
            });
        },
        onRender: function () {
            this.setupValidation();
            this.stickit();

        },
        setupValidation: function () {
            this.form = this.$('#register-role');
            this.form.validate(config.validation);
        },
        save: function (e) {
            e && e.preventDefault();
            var requestData = this.model.toJSON();

            var request = app.dataStore.ajax({
                url: 'http://api.starterkit.app/v1/roles',
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
