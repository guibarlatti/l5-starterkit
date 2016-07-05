/* global app*/
define([
    'marionette',
    'underscore',
    'tpl!modules/companies/templates/register.html',
    'modules/companies/config/config',
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

            if (this.model.get('id')) {
                this.$('#disablePasswordEdition').hide();
                app.dataStore.ajax({
                    type: 'GET',
                    url: app.config.getEndPoint('companies/' + this.model.get('id'))
                }).done(function (result) {

                    var resultData = result.data;

                    this.model.set(resultData);

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
                endpoint = app.config.getEndPoint('companies');

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

                    app.vent.trigger('popover:closeAll');
                    app.vent.trigger('fspanel:close');
                    app.vent.trigger('companies:refreshList', {id: result.data});
                    this.model.get('id') || this.model.clear();
                    app.vent.trigger('modal:close', {idViewClosed: this.cid});


                    this.$('input:first').focus();

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
