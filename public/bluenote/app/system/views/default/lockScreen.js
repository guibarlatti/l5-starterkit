define([
    'marionette',
    'underscore',
    'tpl!system/templates/default/lockScreen.html',
    'stickit'
], function (Marionette, _, htmlTemplate, stickit) {

    'use strict';

    return Marionette.ItemView.extend({

        template: htmlTemplate,

        initialize: function() {
            this.model = new Backbone.Model();
        },

        onRender: function () {

            this.stickit();
        },

        unlock: function(e) {
            e.preventDefault();
            var request,
                endpoint = app.config.getEndPoint('bluenoteAdmin/validateIdPassword');

            request = app.dataStore.ajax({
                url: endpoint,
                type: 'POST',
                data: {
                    id: localStorage.getItem('userId'),
                    password: this.model.get('password')
                },
                unlock: true
            });

            request.done(function(response){

                if (response.status === 'success') {
                    app.unlockScreen();
                } else {
                    app.utils.notify({
                        text: response.message,
                        type: 'error'
                    });
                }

            }.bind(this));
        },

        events: {
            'submit #formUnlockScreen': 'unlock'
        },

        bindings: {
            '#password-unclock': 'password'
        }
    });
});
