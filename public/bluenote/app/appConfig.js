/*global define */
define([],

    function () {

        'use strict';

        return {
            /**
             * Módulos registrados para a aplicação
             */
            registeredModules: function (accessLevel) {
                var modules = {
                    0: [
                        'dashboard', 'roles', 'employees', 'logs', 'companies',
                        'recruits', 'skills', 'jobOpportunities', 'attendances','reports'
                    ],
                    1: ['dashboard', 'roles', 'companies','recruits', 'skills', 'employeeProfile',
                        'jobOpportunities', 'attendances'],
                    2: ['dashboard'],
                    3: ['companyDashboard', 'companyProfile', 'jobOpportunities']
                };
                return modules[accessLevel];
            },

            getUserModules: function () {

                var userModules = $.Deferred(),
                    storage = window.localStorage;

                var requestAccessLevel = app.dataStore.ajax({
                    url: this.getEndPoint('accessLevel')
                });

                requestAccessLevel.done(function (response) {
                    if (response.status == 'success') {
                        storage.setItem('acl', response.data.acl);
                        userModules.resolve(this.registeredModules(response.data.acl));
                    }
                }.bind(this));

                return userModules;
            },

            getEndPoint: function (endpointName) {
                var ep = this.endpointsMap[endpointName] || endpointName,
                    rootURL = typeof env !== 'undefined' ? env.urlRoot : ['//', window.location.hostname, '/'].join('');
                return [rootURL, '/api/', ep].join('');
            },

            endpointsMap: {},

            icons: {
                'loader': 'fa fa-cog fa-spin',
                'compress': 'fa fa-compress',
                'expand': 'fa fa-expand'
            },

            defaultIdleTimeout: 3600 * 1000, //

            getIdleTimeout: function () {
                return window.localStorage.getItem('idleTimeout') || this.defaultIdleTimeout;
            },

            lockScreenIsEnabled: function () {
                return window.localStorage.getItem('enableLockScreen') || true;
            },

            /**
             * habilita aviso de utilização offline
             */
            enableNetworkCheck: true,

            /**
             * Impede a utilização offline mostrando um backdrop
             */
            blockOfflineInteraction: false,

            /**
             * Configurações dos componentes de notificação
             */
            notify: {

                playSound: false,

                toastr: {
                    defaults: {
                        "type": "info",
                        "positionClass": "toast-bottom-right",
                        "progressBar": true,
                        "closeButton": true,
                        "preventDuplicates": true,
                        "newestOnTop": false,
                        "timeout": 10000
                    }
                },

                gritter: {
                    defaults: {
                        title: 'Mensagem:',
                        text: 'o atributo: text está vazio',
                        // image: 'http://www.gravatar.com/avatar/56a44d257bd93d6cdb57f365a2fafc97.png',
                        sticky: false,
                        time: 8000,
                        class_name: 'gritter-info',
                        before_open: function () {
                        },
                        after_open: function () {
                        },
                        before_close: function () {
                        },
                        after_close: function () {
                        }
                    }
                }
            }

        };

    });
