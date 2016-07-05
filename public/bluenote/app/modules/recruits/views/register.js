/* global app*/
define([
    'tpl!modules/recruits/templates/register.html',
    'tpl!modules/recruits/templates/occurencesItemTemplate.html',
    'modules/recruits/config/config',
    'system/helpers/utils',
    'moment',
    'mask',
    'stickit',
    'validate',
    'chosen',
    'datetimepicker'
], function (TemplateCadastro, OccurencesItemTemplate, config, utils, moment) {

    'use strict';

    return Marionette.ItemView.extend({

        template: TemplateCadastro,

        events: {
            'submit form': 'save',
            'click .showModalOcorrencia': 'showModalOcorrencia',
            'click .showModalAddSkill': 'showModalAddSkill',
            'click .showRemoveOccurrenceConfirmation': 'showRemoveOccurrenceConfirmation'
        },

        initialize: function () {

            if (!this.model) {
                this.model = new Backbone.Model({skills: []});
            }

            this.listenTo(app.vent, 'occurrences:refresh', function (model) {

                var ocurrencesCollection = this.model.get('occurrences');

                var currentModel = ocurrencesCollection.get(model.get('id'));

                if (currentModel) {
                    currentModel.set(JSON.parse(JSON.stringify(model.toJSON())));
                    this.renderOcurrencesCollection();
                } else {
                    ocurrencesCollection.add(model);
                }

            });

            this.listenTo(app.vent, 'skills:refreshList', function (e) {
                utils.updateCombo({
                    resourceName: 'skills',
                    selector: '#skills'
                }).done(function () {
                    if (!this.model.get('skills')) {
                        this.model.set('skills', []);
                    }
                    this.model.get('skills').push(e.id.toString());
                    this.stickit();
                    $('.chosen-select').trigger('chosen:updated');
                }.bind(this));
            });

        },

        onRender: function () {
            this.model.set('gender', 'M');
            this.$('#disablePasswordEdition').hide();
            this.$('.cpf').mask('999.999.999-99');
            this.$('.pis').mask('999.9999.999-9');

            utils.updateCombo({
                resourceName: 'skills',
                selector: '#skills'
            }).done(function () {
                this.stickit();
                $('.chosen-select').trigger('chosen:updated');
            }.bind(this));

            if (this.model.get('id')) {
                app.dataStore.ajax({
                    type: 'GET',
                    url: app.config.getEndPoint('recruits/' + this.model.get('id'))
                }).done(function (result) {

                    this.model.set(result.data);
                    this.model.set('occurrences', new Backbone.Collection(result.data.occurrences));

                    var skills = [];
                    _.each(result.data.skills, function (v) {
                        skills.push(v.id.toString());
                    });

                    this.model.set('skills', skills);

                    this.renderOcurrencesCollection();
                    this.stickit();

                    $('.chosen-select').trigger('chosen:updated');

                }.bind(this));
            }

            this.$('.chosen-select').chosen({
                disable_search_threshold: 10,
                allow_single_deselect: true,
                no_results_text: "nenhum item encontrado",
                width: "100%"
            });

            $.datetimepicker.setLocale('pt-BR');

            this.$('.input-date').datetimepicker({
                timepicker: false,
                format: 'd/m/Y',
                maxDate: 0,
                mask: true,
                defaultSelect: false,
                allowBlank: true
            });


            this.setupValidation();
            this.stickit();
            this.$('input:visible:first').focus();
            $('.chosen-select').trigger('chosen:updated');
        },

        renderOcurrencesCollection: function () {

            this.$('.itemsTable').empty();

            var itensCollection = this.model.get('occurrences'),

                ListItemView = Backbone.Marionette.ItemView.extend({
                    tagName: 'tr',
                    template: function (model) {
                        return OccurencesItemTemplate(model);
                    }
                }),

                ItensCollectionView = Backbone.Marionette.CollectionView.extend(),

                listView = new ItensCollectionView({
                    childView: ListItemView,
                    collection: itensCollection,
                    el: this.$('.itemsTable')
                });

            listView.render();

        },

        save: function (e) {
            e && e.preventDefault();

            var request,
                formData = JSON.parse(JSON.stringify(this.model.toJSON())),
                endpoint = app.config.getEndPoint('recruits');


            if (!this.validateDates()) {
                return false;
            }

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
                    app.vent.trigger('recruits:refreshList', {id: result.data});
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

            this.$('#formCadastro').validate(config.validation);
            utils.enableCpfValidation();
        },

        showModalAddSkill: function (e) {
            e.preventDefault();
            var cadastroModel = new Backbone.Model(),
                showModal = function (cadastroModel) {
                    require(['modules/skills/views/register'], function (CadastroView) {
                        var actionIcon = '<i class="' + app.utils.getIconRoute('skills') + '"></i> ',
                            view = new CadastroView({model: cadastroModel}),
                            modalOptions = {
                                showFooter: false,
                                title: actionIcon + 'Cadastrar Habilidade',
                                removeExtraPanel: true,
                                customClass: ''
                            };
                        app.commands.execute("app:show:modalView", view, modalOptions);
                    });
                };


            showModal(cadastroModel);

        },


        showRemoveOccurrenceConfirmation: function (e) {

            var id = $(e.currentTarget).data('id');
            var self = this;
            var occurrencesCollection = self.model.get('occurrences');

            app.commands.execute("app:dialog:confirm", {
                icon: 'info-sign',
                title: '<span class="text-center" style="color: #d9534f"><i class="fa fa-warning"></i> Deseja realmente excluir este item?</span>',
                message: '<p>Deseja realmente excluir este item?</p>' +
                '<p>Atenção: Esta operação não pode ser desfeita!</p>',
                confirmYes: function () {
                    occurrencesCollection.remove(occurrencesCollection.get(id));
                    self.renderOcurrencesCollection();
                    return true;
                },
                confirmNo: function () {
                    return false;
                }
            });

        },


        showModalOcorrencia: function (e) {

            e.preventDefault();

            var cadastroModel = new Backbone.Model(),
                id = $(e.currentTarget).data('id'),
                showModal = function (cadastroModel) {
                    require(['modules/recruits/views/occurrence'], function (CadastroView) {
                        var actionTitle = cadastroModel.get('id') ? 'Alterar Cadastro de' : 'Cadastrar ',
                            view = new CadastroView({model: cadastroModel}),
                            modalOptions = {
                                showFooter: false,
                                title: actionTitle + ' Ocorrência',
                                removeExtraPanel: true,
                                customClass: ''
                            };
                        app.commands.execute("app:show:modalView", view, modalOptions);
                    });
                };

            if (id) {
                var occurrenceModel = this.model.get('occurrences').find(function (model) {
                    return model.get('id') == id
                });
                occurrenceModel.set('startDate', this.model.get('admissionDate'));
                showModal(occurrenceModel);
            } else {
                cadastroModel.set('startDate', this.model.get('admissionDate'));
                showModal(cadastroModel);
            }
        },

        validateDates: function () {

            var today = moment();
            var admissionDate = moment(this.model.get('admissionDate'), "DD-MM-YYYY");
            var birthDate = moment(this.model.get('birthDate'), "DD-MM-YYYY");
            var admissionDateDiff = admissionDate.diff(birthDate, 'years');
            var age = today.diff(birthDate, 'years');
            var isValid = true;

            if (!birthDate.isValid() || age < 16 || age > 64) {
                isValid = false;
                app.utils.notify({
                    type: 'error',
                    text: 'Data de nascimento inválida.'
                });
            }

            if (!admissionDate.isValid() || admissionDateDiff < 0) {
                isValid = false;
                app.utils.notify({
                    type: 'error',
                    text: 'Data de admissão inválida.'
                });
            }

            if (!isValid) {
                setTimeout(function () {
                    if ($('.tab-content').find('.active').find('.error').length == 0) {

                        $('a[href="#cadastro"]').tab('show');
                    }
                }, 500);
            }

            return isValid;

        },


        bindings: config.bindingsCadastro

    });
});
