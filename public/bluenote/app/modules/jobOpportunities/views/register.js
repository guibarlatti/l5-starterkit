/* global app*/
define([
    'marionette',
    'underscore',
    'tpl!modules/jobOpportunities/templates/register.html',
    'modules/jobOpportunities/config/config',
    'system/helpers/utils',
    'maskMoney',
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
            this.listenTo(this.model, 'change', function(e){
                this.model.toJSON();
            });
        },

        onRender: function () {

            this.updateCombos();
            this.initPlugins();

            this.model.set('gender', 'I');

            if (this.model.get('id')) {

                app.dataStore.ajax({
                    type: 'GET',
                    url: app.config.getEndPoint('jobOpportunities/' + this.model.get('id'))
                }).done(function (result) {

                    var resultData = result.data;
                    this.model.set(resultData);

                    var skills = [];
                    _.each(result.data.skills, function (v) {
                        skills.push(v.id.toString());
                    });
                    this.model.set('skills', skills);
                    this.model.set('amountVacancies', result.data.amountVacancies.toString());
                    this.model.set('companyId', result.data.companyId.toString());
                    this.model.set('shiftWork', result.data.shiftWork.toString());
                    this.model.set('schoolLevel', result.data.schoolLevel.toString());

                    this.stickit();
                    $('.chosen-select').trigger('chosen:updated');

                }.bind(this));
            }

            this.setupValidation();
            this.stickit();
        },

        save: function (e) {
            e && e.preventDefault();

            var request,
                formData = this.model.toJSON(),
                endpoint = app.config.getEndPoint('jobOpportunities');

            if(formData.minAge > formData.maxAge) {
                app.utils.notify({
                    type: 'warning',
                    text: 'A idade mínima não pode ser maior que a idade máxima.'
                });
                return false;
            }

            request = app.dataStore.ajax({
                type: this.model.get('id') ? 'PUT' : 'POST',
                data: formData,
                url: this.model.get('id') ? endpoint + '/' + this.model.get('id') : endpoint
            });

            request.done(function (result) {

                if (result.status === 'success') {
                    var actionTitle = (this.model.get('id')) ? 'alterado' : 'realizado';
                    app.utils.notify({
                        type: 'success',
                        text: ['Cadastro', actionTitle, 'com sucesso.'].join(' ')
                    });

                    app.vent.trigger('popover:closeAll');
                    app.vent.trigger('fspanel:close');
                    app.vent.trigger('jobOpportunities:refreshList', {id: result.data});
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
            this.$('#formCadastro').validate(config.validation);

            // caso seja alteração, a senha é opcional
            if(parseInt(window.localStorage.getItem('acl')) > 1) {
                this.$("#companyId").rules("remove", "required");
            }


        },

        updateCombos: function () {

            // evita o carregamento deste endpoint caso não tenha permissão de leitura
            if(parseInt(window.localStorage.getItem('acl')) < 1) {
                utils.updateCombo({
                    resourceName: 'companies',
                    selector: '#companyId',
                    labelProperty: 'tradingName'
                }).done(function () {
                    this.stickit();
                    $('.chosen-select').trigger('chosen:updated');
                }.bind(this));
            } else {
                // setando o id da empresa logada
                this.model.set('companyId', window.localStorage.getItem('uid'));
                // ocultando o dropdown de empresas
                this.$('#companyId').closest('.form-group').hide();
            }

            utils.updateCombo({
                resourceName: 'skills',
                selector: '#skills'
            }).done(function () {
                this.stickit();
                $('.chosen-select').trigger('chosen:updated');
            }.bind(this));
        },

        initPlugins: function () {
            this.$('.chosen-select').chosen({
                disable_search_threshold: 10,
                allow_single_deselect: true,
                no_results_text: "nenhum item encontrado",
                width: "100%"
            });

            this.$('.money').maskMoney({
                prefix: 'R$ ',
                allowNegative: false,
                thousands: '.',
                decimal: ',',
                affixesStay: false
            });

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
        },

        bindings: config.bindingsCadastro

    });
});
