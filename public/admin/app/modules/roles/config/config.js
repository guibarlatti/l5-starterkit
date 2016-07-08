define([], function () {

    return {
        bindingsCadastro: {
            '#name': 'name',
            '#displayName': 'displayName',
            '#description': 'description'
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
                'description': {
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
                'description': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Descrição  é obrigatório'
                        });
                    }
                }
            }

        }
    };

});