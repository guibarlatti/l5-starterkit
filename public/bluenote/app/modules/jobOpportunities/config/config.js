define(['system/helpers/utils'], function (utils) {

    return {
        bindingsCadastro: {
            '#role': 'role',
            '#companyId': 'companyId',
            '#skills': 'skills',
            '#workShift': 'workShift',
            '#gender': 'gender',
            '#educationalLevel': 'schoolLevel',
            '#salary': 'salary',
            '#description': 'description',
            '#minAge': 'minAge',
            '#maxAge': 'maxAge',

            '#amount':   'amountVacancies',


            '#shiftWork':  {
                'observe': 'shiftWork',
                'onSet': function (val, options) {
                    return val ? parseInt(val) : null;
                }
            },
            '#companyLabel':  {
                'observe': 'company',
                'onGet': function (val, options) {
                    return val ? val.companyName : null;
                }
            },
            '#skillsList':  {
                'observe': 'skills',
                'onGet': function (val, options) {
                    var skills = [];

                    _.each(val, function(v, k){

                        skills.push(v.name);
                    });


                    return skills.join(', ');
                }
            }

        },
        validation: {
            errorPlacement: function (error, element) {
            },
            ignore: [],
            onfocusout: false,
            rules: {
                'companyId': {
                    required: true
                },

                'role': {
                    required: true
                },
                'skills': {
                    required: true
                },
                'gender': {
                    required: true
                },
                'description': {required: true},
                'educationalLevel': {required: true},
                'amount': {
                    required: true
                }
            },
            messages: {
                'companyId': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Empresa é obrigatório.'
                        });
                    }
                },

                'role': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Função é obrigatório.'
                        });
                    }
                },
                'amout': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Qtde. vagas é obrigatório.'
                        });
                    }
                },
                'gender': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Sexo não pode ser vazio.'
                        });
                    }
                },

                'skills': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Habilidades não pode ser vazio.'
                        });
                    }
                },
                'educationalLevel': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Escolaridade não pode ser vazio.'
                        });
                    }
                },
                'description': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Descrição da Vaga não pode ser vazio.'
                        });
                    }
                }
            }
        }
    };

});