/* global app*/
define([
    'marionette',
    'underscore',
    'tpl!modules/attendances/templates/register.html',
    'modules/attendances/config/config',
    'system/helpers/utils',
    'mask',
    'stickit',
    'validate',
    'chosen',
    'datetimepicker'
], function (Marionette, _, TemplateCadastro, config, utils) {

    'use strict';

    return Marionette.ItemView.extend({

        template: TemplateCadastro,

        events: {
            'submit form': 'save'

        },

        initialize: function () {
            if (!this.model) {
                this.model = new Backbone.Model();
            }
        },

        onRender: function () {

            var d = new Date();
            d.setDate(d.getDate() - 7);

            this.$('.input-date').datetimepicker({
                timepicker: false,
                format: 'd/m/Y',
                maxDate: 0,
                minDate: [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-'),
                mask: true,
                defaultSelect: false,
                allowBlank: true
            });

            this.$('.chosen-select').chosen({
                disable_search_threshold: 10,
                allow_single_deselect: true,
                no_results_text: "nenhum item encontrado",
                width: "100%"
            });

            if (this.model.get('id')) {

                console.log(this.$el.find('.input-date, .chosen-select').prop('readonly', true).trigger("chosen:updated"));

                app.dataStore.ajax({
                    type: 'GET',
                    url: app.config.getEndPoint('attendances/' + this.model.get('id'))
                }).done(function (result) {

                    var resultData = result.data;

                    this.model.set(resultData);

                    this.stickit();
                    $('.chosen-select').prop('readonly', true).trigger("chosen:updated");


                }.bind(this));
            } else {
                this.model.set('employeeId', localStorage.getItem('uid'));
            }


            this.setupValidation();
            this.stickit();
            this.$('input:visible:first').focus();

        },

        save: function (e) {
            e && e.preventDefault();

            var request,
                formData = this.model.toJSON(),
                endpoint = app.config.getEndPoint('attendances');

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
                    app.vent.trigger('attendances:refreshList', {id: result.data});
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
        },

        bindings: config.bindingsCadastro

    });
});
