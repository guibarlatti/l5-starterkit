/*jslint browser: true*/
/*jslint nomen: true*/
/*global define, require, $, _*/

define(['jquery'],
    function ($) {

        'use strict';

        var ajax = function (options) {

            if (app.locked && !options.hasOwnProperty('unlock')) {
                app.utils.notify({
                    text: 'A aplicação está bloqueada! Esta ação não pode ser realizada.',
                    type: 'error'
                });
                return jQuery.Deferred();
            }

            var ajax,
                localStorage = window.localStorage,
                token = localStorage.getItem('token'),
                defaultOptions = {
                    'url': '',
                    'data': {},
                    'type': 'get',
                    'dataType': 'json',
                    'cache': true,
                    'global': true, // this makes sure ajaxStart is triggered
                    'timeout': 20000,
                    'error': ajaxErrorHandler
                };

            if (typeof options === 'object') {
                options = $.extend(defaultOptions, options);
            } else {
                options = defaultOptions;
            }

            if (token) {
                //options.data.token = token;
                options.headers = {
                    'Authorization': 'Bearer ' + token
                };
            }

            $.ajaxSetup({
                cache: options.cache
            });

            ajax = $.ajax(options);


            return ajax;
        };


        var ajaxErrorHandler = function (request, type, errorThrown) {

            var message = '';

            switch (type) {
                case 'timeout':
                    message = "Timeout - O servidor demorou muito para responder.";
                    break;
                case 'parsererror':
                    message = "O servidor retornou uma resposta em um formato inválido.";
                    break;
                default:
                    message = request.responseJSON.message;
            }
console.log(request);
            message += "\n";

            if (request.status === 401) {
                window.localStorage.setItem('token', '');
                $('.app-container, #modal-area').empty();
                $('.modal-backdrop').remove();
                var msg = '<h4 class="text-center" style="color:#E74C3C">' +
                    'Você tentou realizar uma operação não permitida!</h4>' +
                    '<p>Faça login novamente e se o problema persistir,' +
                    ' entre em contato com o administrador do sitema.</p>';

                app.commands.execute("app:dialog:simple", {
                    icon: 'info-sign',
                    title: 'Acesso não permitido!',
                    message: msg,
                    confirmYes: function () {
                        console.log('logout');
                        window.location = '/logout';
                    },
                    confirmNo: function () {
                    }
                });

                setTimeout(function () {
                    window.location = '/logout';
                }, 10000);
            } else if(request.status == 500) {
                app.utils.notify({
                    text:  request.responseJSON.error.message,
                    type: 'error'
                });
            } else {
                app.utils.notify({
                    text: message,
                    type: 'error'
                });

            }

        };

        return {
            'ajax': ajax
        };


    });
