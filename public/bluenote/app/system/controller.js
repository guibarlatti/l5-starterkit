/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require, Backbone*/

define([], function () {

    'use strict';

    return {

        showDocs: function () {
            require(['system/views/default/modals'], function (ModalsView) {
                app.mainRegion.show(new ModalsView());
            });
        },

        showLogs: function () {
            require(['system/views/default/logs'], function (LogsView) {
                app.mainRegion.show(new LogsView());
            });
        },

        notFound: function (route) {

            console.log(route);
            console.warn('Rota não encontrada');

            require(['system/views/notFound'], function (NotFound) {
                app.mainRegion.show(new NotFound({
                    model: new Backbone.Model({
                        'route': route
                    })
                }));
            });
        }

    };
});
