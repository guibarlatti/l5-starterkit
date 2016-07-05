/* global app*/
define([
    'marionette',
    'underscore',
    'tpl!modules/roles/templates/register.html',
    'modules/roles/config/config',
    'system/helpers/utils',
    'stickit',
    'validate',
    'chosen'
], function (Marionette, _, TemplateCadastro, config, utils) {

    'use strict';

    return Marionette.ItemView.extend({

        template: TemplateCadastro,

        events: {
            'submit form': 'save'
        },

        initialize: function () {
            if(!this.model) {
                this.model = new Backbone.Model();
            }
        },

        onRender: function () {

            this.$(".chosen-select").chosen({width: "100%"});

            if (this.model.get('id')) {
                app.dataStore.ajax({
                    type: 'GET',
                    url: app.config.getEndPoint('roles/' + this.model.get('id'))
                }).done(function (result) {
                    this.model.set(result.data);
                    this.stickit();
                    $('.chosen-select').trigger('chosen:updated');
                }.bind(this));
            }

            this.setupValidation();
            this.stickit();
            this.$('input:visible:first').focus();
        },

        save: function (e) {
            e && e.preventDefault();

            var request,
                formData = this.model.toJSON(),
                endpoint = app.config.getEndPoint('roles');

            request = app.dataStore.ajax({
                type: this.model.get('id') ? 'PUT' : 'POST',
                data: formData,
                url: this.model.get('id') ? endpoint + '/' + this.model.get('id') : endpoint
            });

            request.done(function (result) {

                if (result.status === 'success') {
                    var actionTitle = (this.model.get('id')) ? 'alterado' : 'realizado'
                    app.utils.notify({
                        type: 'success',
                        text: ['Cadastro', actionTitle, 'com sucesso.'].join(' ')
                    });

                    app.vent.trigger('fspanel:close');
                    app.vent.trigger('roles:refreshList', result.data);
                    app.vent.trigger('modal:close', {idViewClosed: this.cid});

                } else {
                    app.utils.notify({
                        type: 'error',
                        text: result.message
                    });
                }
            }.bind(this));
        },

        setupValidation: function () {

            this.$('#formCadastro').validate(config.validation);
            //
            //// caso seja alteração, a senha é opcional
            //if (this.model.get('id')) {
            //    this.$("#password").rules("remove", "required");
            //}

        },

        bindings: config.bindingsCadastro

    });
});
