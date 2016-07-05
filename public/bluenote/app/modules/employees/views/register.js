/* global app, Marionette, _*/
define([
    'tpl!modules/employees/templates/register.html',
    'modules/employees/config/config',
    'system/helpers/utils',
    'mask',
    'stickit',
    'validate',
    'chosen'
], function (TemplateCadastro, config, utils) {

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

            this.$('.cpf').mask('999.999.999-99');

            if (this.model.get('id')) {

                app.dataStore.ajax({
                    type: 'GET',
                    url: app.config.getEndPoint('employees/' + this.model.get('id'))
                }).done(function (result) {

                    var resultData = result.data;
                    resultData.role = result.data.role.id.toString();

                    this.model.set(resultData);

                    this.stickit();

                    $('.chosen-select').trigger('chosen:updated');

                }.bind(this));
            }

            this.updateCombo();

            this.$('.chosen-select').chosen({
                disable_search_threshold: 10,
                allow_single_deselect: true,
                no_results_text: "nenhum item encontrado",
                width: "100%"
            });

            this.setupValidation();
            this.stickit();
            this.$('input:visible:first').focus();
            $('.chosen-select').trigger('chosen:updated');
        },

        save: function (e) {
            e && e.preventDefault();

            var request,
                formData = this.model.toJSON(),
                endpoint = app.config.getEndPoint('employees');

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
                    app.vent.trigger('employees:refreshList', {id: result.data});
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

        updateCombo: function () {
            utils.updateCombo({
                resourceName: 'roles',
                selector: '#role'
            }).done(function () {
                this.stickit();
                $('.chosen-select').trigger('chosen:updated');
            }.bind(this));
        },

        setupValidation: function () {
            $.validator.setDefaults({ignore: ":hidden:not(select)"});
            this.$('#formCadastro').validate(config.validation);

            // caso seja alteração, a senha é opcional
            if (this.model.get('id')) {
                this.$("#password").rules("remove", "required");
            }

            utils.enableCpfValidation();
        },

        bindings: config.bindingsCadastro

    });
});
