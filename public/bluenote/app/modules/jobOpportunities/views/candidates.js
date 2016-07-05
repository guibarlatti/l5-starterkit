/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([

    'tpl!modules/jobOpportunities/templates/candidatesManagement.html',
    'tpl!modules/jobOpportunities/templates/candidateItemTemplate.html',
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

            this.listenTo(app.vent, 'recruits:refreshList', function(){
                this.loadData(this.renderTable);
            });
        },

        onRender: function () {

            if (this.model.get('id')) {

                app.dataStore.ajax({
                    type: 'GET',
                    url: app.config.getEndPoint('jobOpportunities/' + this.model.get('id'))
                }).done(function (result) {

                    var resultData = result.data;
                    this.model.set(resultData);

                    this.model.set('companyId', result.data.companyId.toString());
                    this.model.set('shiftWork', result.data.shiftWork.toString());
                    this.model.set('schoolLevel', result.data.schoolLevel.toString());

                    this.stickit();
                    $('.chosen-select').trigger('chosen:updated');

                }.bind(this));
            }

            this.stickit();
            this.loadData(this.renderTable);
        },

        loadData: function (callback) {
            var request,
                endpoint = app.config.getEndPoint('jobOpportunities/findCandidates'),
                $table = this.$('table'),
                $loading = this.$('.loading-content');

            $table.find('.itemsTable').empty();

            request = app.dataStore.ajax({
                url: endpoint,
                type: 'GET',
                data: {id: this.model.get('id')}
            });

            request.done(function (response) {

                $loading.fadeOut('normal', '', function () {
                    $table.fadeIn();
                });

                if (response.status === 'success') {
                    this.candidatesCollection = new Backbone.Collection(response.data.data);
                    callback(response.data.data, $table.find('.itemsTable'));
                    this.stickit();
                }

            }.bind(this));
        },


        renderTable: function (data, container) {

            if (!data.length) {
                $('#notFound').show();
            }

            var itensCollection = new Backbone.Collection(data),

                ListItemView = Backbone.Marionette.ItemView.extend({
                    tagName: 'tr',
                    template: function (model) {
                        return itemTemplate(model);
                    }
                }),

                ItensCollectionView = Backbone.Marionette.CollectionView.extend(),

                listView = new ItensCollectionView({
                    childView: ListItemView,
                    collection: itensCollection,
                    el: container
                });

            listView.render();
        },

        showModalCadastro: function (e) {

            e.preventDefault();

            var cadastroModel = new Backbone.Model({id: $(e.currentTarget).data('id')});

            require(['modules/recruits/views/register'], function (CadastroView) {
                var actionIcon = '<i class="' + app.utils.getIconRoute('recruits') + '"></i> ',
                    view = new CadastroView({model: cadastroModel}),
                    modalOptions = {
                        showFooter: false,
                        title: actionIcon + 'Cadastro de Aprendiz',
                        removeExtraPanel: true,
                        customClass: 'modal-intermediate'
                    };
                app.commands.execute("app:show:modalView", view, modalOptions);
            });
        },


        showModalAssign: function (e) {

            e.preventDefault();

            var viewModel = this.model;

            viewModel.set('recruit', this.candidatesCollection.get($(e.currentTarget).data('id')).toJSON() );

            require(['modules/jobOpportunities/views/assingRecruitJob'], function (View) {
                var actionIcon = '<i class="' + app.utils.getIconRoute('jobOpportunities') + '"></i>',
                    view = new View({model: viewModel}),
                    modalOptions = {
                        showFooter: false,
                        title: actionIcon + ' Confirmar efetivação de candidato',
                        removeExtraPanel: true,
                        customClass: ''
                    };
                app.commands.execute("app:show:modalView", view, modalOptions);
            });
        },

        templateHelpers: {
            getGender: function (code) {
                var genders = {
                    M: 'Masculino',
                    F: 'Feminino',
                    I: 'Indiferente'
                };
                return genders[code];
            },
            getSchoolLevel: function (code) {
                var levels = {
                    "3": "Ensino Fundamental Completo",
                    "4": "Ensino Medio Incompleto",
                    "5": "Ensino Medio Completo",
                    "6": "Ensino Superior Incompleto"
                };
                return levels[code];
            },
            getWorkShift: function (code) {
                var genders = {
                    M: 'Masculino',
                    F: 'Feminino',
                    I: 'Indiferente'
                };
                return genders[code];
            }
        },

        events: {
            'click .showModalCadastro': 'showModalCadastro',
            'click .showModalAssign': 'showModalAssign'
        },

        bindings: config.bindingsCadastro

    });

});
