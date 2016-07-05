define(['system/helpers/utils'], function (utils) {

    return {
        bindingsCadastro: {
            '#name': 'name',
            '#cpf': 'cpf',
            '#username': 'username',
            '#password': 'password',
            '#accessLevel': {
                'observe': 'accessLevel',
                'onSet': function (val, options) {
                    return val ? val.toString() : null;
                }
            },
            '#role': {
                'observe': 'role',
                'onSet': function (val, options) {
                    return val ? val.toString() : null;
                }
            }
        },
        validation: {
            errorPlacement: function (error, element) {
            },
            onfocusout: false,
            rules: {
                'name': {
                    required: true
                },
                'cpf': {
                    required: true,
                    'cpf': true
                },
                'username': {
                    required: true
                },
                'password': {
                    required: true
                },
                'role': {
                    required: true
                },
                'accessLevel': {required: true}

            },
            messages: {
                'name': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Nome é obrigatório'
                        });
                    }
                },
                'cpf': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo CPF é obrigatório'
                        });
                    },
                    cpf: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O cpf informado não é valido.'
                        });
                    }
                },
                'username': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Usuário é obrigatório'
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
                'role': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Cargo é obrigatório'
                        });
                    }
                },
                'accessLevel': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Permissão é obrigatório'
                        });
                    }
                }

            }
        }
    };

});