/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
    'marionette'
], function (Marionette) {
    'use strict';

    return Marionette.ItemView.extend({

        initialize: function (options) {

            var modalContainer = $('<div></div>').attr('id', options.innerView.cid).appendTo('#modal-area');

            this.setElement(modalContainer);

            this.listenTo(app.vent, 'modal:close', function (e) {
                if(e.idViewClosed === this.options.innerView.cid) {
                    this.onDestroy();
                }
            });

        },

        dismiss: function (e) {
            e.preventDefault();
            this.onDestroy();
        },

        onRender: function () {

            // obtendo o z-index mais alto existente no momento
            var newIndex,
                self = this,
                backdropLastChild = $('.modal:last-child'),
                highestZIndex = parseInt(backdropLastChild.css('z-index'), 10),
                innerViewOnRender = this.options.innerView.onRender;

            // mostrando o modal
            this.$('.modal').modal('show');

            // Renderizar dentro do modal a View recebida como parametro
            this.options.innerView.setElement(this.$('.innerView'));

            this.options.innerView.onRender = function () {
                innerViewOnRender.call(this);

                if (self.model.get('removeExtraPanel')) {
                    self.removeExtraPanel(this);
                }

                var cb = self.model.get('onRenderCallback');

                if (cb && typeof cb === 'function') {
                    cb(this);
                }
            };

            this.options.innerView.render();

            // necessário para o scroll do corpo do modal
            this.$(".modal-body").css({
                "max-height": $(window).height() * 0.8
            });

            // corrigindo ajustando o z-index para ficar no topo
            if (highestZIndex) {
                newIndex = highestZIndex + 12;
                this.$('.modal').css('z-index', newIndex + 50);
                $('.modal-backdrop:last').css('z-index', newIndex + 45);
            }
        },

        removeExtraPanel: function (view) {
            var $panel = view.$el.find('.panel').first();
            $panel.find('.panel-heading').first().hide();
            $panel.css({
                'border': 'none',
                'box-shadow': 'none'
            });
        },

        events: {
            'click .dismiss': 'dismiss'
        },

        onDestroy: function () {

            this.stopListening();

            this.$('.modal').modal('hide');

            this.options.innerView.destroy();
            this.off();

            // aguardar o completo desaparecimento do modal e remover o html
            setTimeout((function () {
                this.remove();
            }.bind(this)), 2000);
        }

    });
});