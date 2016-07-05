/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

require.config({
    urlArgs: "bust=v2",
    paths: {
        underscore: 'lib/underscore/underscore',
        backbone: 'lib/backbone/backbone',
        marionette: 'lib/backbone.marionette/lib/backbone.marionette',
        'backbone.paginator': 'lib/backbone.paginator/lib/backbone.paginator',
        jquery: 'lib/jquery/dist/jquery.min',
        tpl: 'lib/requirejs-tpl/tpl',
        stickit: 'lib/backbone.stickit/backbone.stickit',
        validate: 'lib/jquery-validation/dist/jquery.validate.min',
        bootstrap: 'lib/bootstrap/dist/js/bootstrap.min',
        toastr: 'lib/toastr/toastr.min',
        gritter: 'lib/jquery.gritter/js/jquery.gritter.min',
        async: 'lib/requirejs-plugins/src/async',
        nicescroll: 'lib/jquery.nicescroll/jquery.nicescroll.min',
        summernote: 'lib/summernote/dist/summernote.min',
        summernote_i18n: 'lib/summernote/lang/summernote-pt-BR',
        datatables: 'lib/datatables/media/js/jquery.dataTables.min',
        dataTableTWBS: 'lib/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min',
        idleTimer: 'lib/jquery-idletimer/dist/idle-timer.min',
        chosen: 'lib/chosen/chosen.jquery.min',
        mask: 'lib/jquery.maskedinput/dist/jquery.maskedinput.min',
        Offline: 'lib/offline/offline.min',
        datetimepicker: 'lib/datetimepicker/build/jquery.datetimepicker.full.min',
        'jquery-mousewheel': 'lib/jquery-mousewheel/jquery.mousewheel.min',
        'maskMoney': 'lib/jquery-maskmoney/dist/jquery.maskMoney.min',
        moment: 'lib/moment/moment',
        'jquery-media': 'lib/jquery.media',
        'bootstrap-switch': 'lib/bootstrap-switch/dist/js/bootstrap-switch.min',
        daterangepicker: 'lib/bootstrap-daterangepicker/daterangepicker',
        echarts: 'lib/echarts/dist/echarts'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        chosen: {
            deps: ['jquery']
        },
        'jquery-media': {
            deps: ['jquery']
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },
        'backbone.paginator': {
            exports: 'Backbone.PageableCollection',
            deps: ['backbone']
        },
        bootstrap: {
            deps: ['jquery']
        },
        'bootstrap-switch': {
            deps: ['jquery', 'bootstrap']
        },
        mask: {
            deps: ['jquery']
        },
        maskMoney: {
            deps: ['jquery']
        },
        toastr: {
            deps: ['jquery']
        },
        gritter: {
            deps: ['jquery']
        },
        nicescroll: {
            deps: ['jquery']
        },
        summernote_i18n: {
            deps: ['summernote']
        },
        validate: {
            deps: ['jquery']
        },
        dataTableTWBS: {
            deps: ['datatables']
        },
        idleTimer: {
            deps: ['jquery']
        },
        datetimepicker: {
            deps: ['jquery']
        },
        daterangepicker: {deps: ['jquery', 'moment']}
    },

    waitSeconds: 60

});


require.onResourceLoad = function (context, map, depMaps) {

    var loadingStatusEl = document.getElementById('requirejs-loading-status'),
        loadingModuleNameEl = document.getElementById('requirejs-loading-module-name');
    var panel = document.getElementById('requirejs-loading-panel');

    if (loadingStatusEl && loadingModuleNameEl) {

        //hide the indicator and exit
        if (!context) {
            panel.style.display = "none";
            return;
        }
        // show indicator when any module is loaded and shedule requirejs status (loading/idle) check
        panel.style.display = "";
        clearTimeout(panel.ttimer);

        panel.ttimer = setTimeout(function () {
            var context = require.s.contexts._;
            var inited = true;
            for (name in context.registry) {
                var m = context.registry[name];
                if (inited !== true) {
                    inited = false;
                    break;
                }
            }

            // true if requirejs is "idle", false if "loading"
            if (inited) {
                require.onResourceLoad(false);
            }

        }, 400);

        if (map && map.name) {

            // we will add one dot ('.') and a currently loaded module name to the indicator
            // loadingStatusEl.innerHTML = loadingStatusEl.innerHTML += '.'; //add one more dot character
            loadingModuleNameEl.innerHTML = map.name + (map.url ? ' at ' + map.url : '');
        }

    }

};


require([
    'app',
    'jquery',
    'bootstrap'
], function (app) {

    'use strict';
    app.start();


});
