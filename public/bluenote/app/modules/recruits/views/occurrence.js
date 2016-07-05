/* global app, Marionette*/
define([
    'tpl!modules/recruits/templates/occurrence.html',
    'modules/recruits/config/config',
    'mask',
    'stickit',
    'validate',
    'chosen',
    'datetimepicker'
], function (OccurrenceTemplate, config) {

    'use strict';

    return Marionette.ItemView.extend({

        template: OccurrenceTemplate,

        events: {
            'submit form': 'save'

        },

        onRender: function () {

            this.$('.chosen-select').chosen({
                disable_search_threshold: 10,
                allow_single_deselect: true,
                no_results_text: "nenhum item encontrado",
                width: "100%"
            });

            $.datetimepicker.setLocale('pt-BR');

            this.$('.date').datetimepicker({
                timepicker: false,
                format: 'd/m/Y',
                minDate: this.model.get('startDate'),
                maxDate: 0,
                formatDate: 'd/m/Y',
                mask: true
            });

            this.$('.chosen-select').trigger('chosen:updated');
            this.stickit();

            if (!this.model.get('id')) {
                var max = (99999999 * 99999999);
                var min = 9999999;
                this.model.set('id', Math.floor(Math.random() * (max - min + 1) + min));
            }

            if (!this.model.get('severity')) {
                this.model.set('severity', 0);
            }

            this.model.set('recruitId', 2);

        },


        save: function (e) {
            e && e.preventDefault();
            app.vent.trigger('occurrences:refresh', this.model);
            app.vent.trigger('modal:close', {idViewClosed: this.cid});
        },


        setupValidation: function () {
            this.$('#formOcorrencia').validate();
        },

        bindings: {
            '#date': 'date',
            '#description': 'description',
            '#severity': 'severity'
        }

    });
});
