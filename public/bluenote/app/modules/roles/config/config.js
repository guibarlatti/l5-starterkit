define([], function () {

    return {
        bindingsCadastro: {
            '#name': 'name'
        },
        validation: {
            errorPlacement: function (error, element) {
            },
            onfocusout: false,
            rules: {
                'name': {
                    required: true
                }

            },
            messages: {
                'name': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Nome do cargo é obrigatório.'
                        });
                    }
                }

            }

        }
    };

});