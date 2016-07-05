define([], function () {

    return {
        bindingsCadastro: {
            '#name': 'name',
            '#description': 'description'
        },
        validation: {
            errorPlacement: function (error, element) {
            },
            onfocusout: false,
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