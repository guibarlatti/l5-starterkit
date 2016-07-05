/* global app*/
define([
    'marionette',
    'underscore',
    'tpl!modules/companyProfile/templates/register.html',
    'modules/companyProfile/config/config',
    'system/helpers/utils',
    'mask',
    'stickit',
    'validate',
    'chosen'
], function (Marionette, _, TemplateCadastro, config, utils) {

    'use strict';

    return Marionette.ItemView.extend({

        template: TemplateCadastro,

        events: {
            'submit form': 'save',
            'click .showPassordBox': function (e) {
                $(e.currentTarget).hide();
                this.$('#passwordBox').removeClass('hidden').show();
            },
            'click .hidePasswordBox': function (e) {
                this.$('#passwordBox').hide();
                this.$('.showPassordBox').show();
            }
        },

        initialize: function () {
            if(!this.model) {
                this.model = new Backbone.Model();
            }
        },

        onRender: function () {

            this.$('#disablePasswordEdition').hide();

            this.$('.cnpj').mask('99.999.999/9999-99');

            this.$('.phone').mask("(99) 9999-9999?9").focusout(function (event) {
                var target, phone, element;
                target = (event.currentTarget) ? event.currentTarget : event.srcElement;
                phone = target.value.replace(/\D/g, '');
                element = $(target);
                element.unmask();
                if (phone.length > 10) {
                    element.mask("(99) 99999-999?9");
                } else {
                    element.mask("(99) 9999-9999?9");
                }
            });

            app.dataStore.ajax({
                type: 'GET',
                url: app.config.getEndPoint('companyProfile/show')
            }).done(function (result) {

                var resultData = result.data;

                this.model.set(resultData);

                this.stickit();

                $('.chosen-select').trigger('chosen:updated');

            }.bind(this));


            this.setupValidation();
            this.stickit();
            this.$('input:visible:first').focus();

        },

        save: function (e) {
            e && e.preventDefault();

            var request,
                formData = this.model.toJSON(),
                endpoint = app.config.getEndPoint('companyProfile');

            request = app.dataStore.ajax({
                type: 'PUT',
                data: formData,
                url: [endpoint, this.model.get('id')].join('/')
            });

            request.done(function (result) {

                if (result.status === 'success') {

                    app.utils.notify({
                        type: 'success',
                        text: 'Cadastro alterado com sucesso.'
                    });


                } else {
                    app.utils.notify({
                        type: 'error',
                        text: result.message
                    });
                }
            }.bind(this));
        },

        setupValidation: function () {
            $.validator.setDefaults({ignore: ":hidden:not(select)"});
            this.$('#formCadastro').validate(config.validation);

            // caso seja alteração, a senha é opcional
            if (this.model.get('id')) {
                this.$("#password").rules("remove", "required");
            }

            utils.enableCnpjValidation();
        },

        bindings: config.bindingsCadastro

    });
});
