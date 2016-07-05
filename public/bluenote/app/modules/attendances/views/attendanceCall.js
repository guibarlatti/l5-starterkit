/*jslint browser: true, devel: true, nomen: true*/
/*global $, Marionette, jQuery, define, app, _, require*/

define([
    'tpl!modules/attendances/templates/attendanceCall.html',
    'tpl!modules/attendances/templates/attendanceCallItem.html',
    'bootstrap-switch',
    'stickit'
], function (htmlTemplate, itemTemplate) {

    'use strict';


    return Marionette.ItemView.extend({

        template: htmlTemplate,

        initialize: function () {

            if (!this.model) {
                this.model = new Backbone.Model();
            }

        },

        onRender: function () {

            this.stickit();
            this.loadData(this.renderTable);

        },

        loadData: function (callback) {
            var request,
                endpoint = app.config.getEndPoint('attendances/' + this.model.get('id')),
                $table = this.$('table');
            //$loading = this.$('.loading-content');

            $table.find('.itemsTable').empty();

            request = app.dataStore.ajax({
                url: endpoint,
                type: 'GET'
            });

            request.done(function (response) {

                $table.show();

                if (response.status === 'success') {
                    callback(response.data, $table.find('.itemsTable'), this);
                    this.stickit();
                    $('.switch').bootstrapSwitch();
                }

            }.bind(this));
        },


        renderTable: function (data, container, context) {

            context.model.set(data);
            context.model.set('responsible', data.employee.name);

            var itensCollection = new Backbone.Collection(data.recruits),

                ListItemView = Backbone.Marionette.ItemView.extend({
                    tagName: 'tr',
                    template: function (model) {

                        return itemTemplate(model);
                    },
                    events: {
                        'switchChange.bootstrapSwitch .switch': function (e, state) {
                            this.model.set('present', state);
                            app.vent.trigger('attendance:callStateChanged', this.model);
                        }
                    },
                    templateHelpers: {
                        getStatus: function () {
                            return context.model.get('status');
                        }
                    }
                }),

                ItensCollectionView = Backbone.Marionette.CollectionView.extend(),

                listView = new ItensCollectionView({
                    childView: ListItemView,
                    collection: itensCollection,
                    el: container
                });

            context.itensCollection = itensCollection;

            listView.render();
        },


        confirm: function (e) {
            e && e.preventDefault();
            var self = this;
            app.commands.execute("app:dialog:confirm", {
                icon: 'info-sign',
                title: '<span class="text-center"><i class="fa fa-warning"></i> Atenção!</span>',
                message: '<h3 style="color: #222" class="text-center"><strong>Deseja realmente registrar esta chamada?</strong></h3>' +
                '<p class="alert text-center "> <strong>Esta operação não pode ser desfeita!</strong></p>',
                confirmYes: function () {
                    self.save(e);
                    return true;
                },
                confirmNo: function () {
                    return false;
                }
            });

        },

        save: function (e) {
            e && e.preventDefault();

            var attendanceData = [];

            this.itensCollection.each(function (m) {

                attendanceData.push({
                    recruit: m.get('recruit_id'),
                    present: m.get('present')
                });
            });

            var request,
                formData = {
                    id: this.model.get('id'),
                    'attendanceData': attendanceData
                },
                endpoint = app.config.getEndPoint('attendances/registerCall');

            request = app.dataStore.ajax({
                type: 'PUT',
                data: formData,
                url: endpoint
            });

            request.done(function (result) {
                if (result.status === 'success') {
                    app.utils.notify({
                        type: 'success',
                        text: 'Ação efetuada com sucesso.'
                    });
                    window.location = '#attendances';
                } else {
                    app.utils.notify({
                        type: 'error',
                        text: result.message
                    });
                }
            }.bind(this));
        },

        events: {
            'submit #attendanceForm': 'confirm'
        },

        bindings: {
            '#gradeClass': 'gradeClass',
            '#referenceDate': 'referenceDate',
            '#responsible': 'responsible',
            '#checkOnly': {
                observe: 'status',
                visible: function (val) {
                    return val == true;
                }
            },
            '#attendanceForm': {
                observe: 'status',
                visible: function (val) {
                    return val != true;
                }

            }
        }

    });


});

