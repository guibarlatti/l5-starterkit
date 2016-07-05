define(['system/helpers/utils'], function (utils) {

    return {
        bindingsCadastro: {
            '#tradingName': 'tradingName',
            '#cnpj': 'cnpj',
            '#companyName': 'companyName',
            '#email': 'email',
            '#address': 'address',
            "#phone": 'phone',
            '#responsible': 'responsible',
            '#password': 'password'
        },
        validation: {
            errorPlacement: function (error, element) {
            },
            onfocusout: false,
            rules: {
                'tradingName': {
                    required: true
                },
                'cnpj': {
                    required: true,
                    'cnpj': true
                },
                'companyName': {
                    required: true
                },
                'password': {
                    required: true
                },
                'email': {
                    required: true, email: true
                },
                'phone': {
                    required: true
                },
                'responsible': {
                    required: true
                },
                'address': {
                    required: true
                }
            },
            messages: {
                'tradingName': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Nome Fantasia é obrigatório.'
                        });
                    }
                },
                'cnpj': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo CNPJ é obrigatório.'
                        });
                    },
                    cnpj: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O CNPJ informado não é valido.'
                        });
                    }
                },
                'companyName': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Razão Social é obrigatório.'
                        });
                    }
                },
                'password': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Senha  é obrigatório'
                        });
                    }
                },
                'email': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Email é obrigatório'
                        });
                    },
                    email: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O Email é inválido.'
                        });
                    }
                },
                'address': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Endereço é obrigatório'
                        });
                    }
                },

                'phone': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Telefone é obrigatório'
                        });
                    }
                },
                'responsible': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Responsável é obrigatório'
                        });
                    }
                }

            }
        }
    };

});