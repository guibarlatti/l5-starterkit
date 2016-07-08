define([], function () {

    return {
        bindingsCadastro: {
            '#name': 'name',
            '#email': 'email',
            '#password': 'password'
        },
        validation: {
            errorPlacement: function (error, element) {
            },
            onfocusout: false,
            debug: true,
            rules: {
                'name': {
                    required: true
                },
                'email': {
                    required: true, email: true
                },
                'password': {
                    required: true
                }

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
                'email': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Email  é obrigatório'
                        });
                    }
                },
                'password': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Senha é obrigatório'
                        });
                    }
                }
            }

        }
    };

});