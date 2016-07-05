define(['system/helpers/utils'], function (utils) {

    return {
        bindingsCadastro: {
            '#name': 'name',
            '#pis': 'pis',
            '#cpf': 'cpf',
            '#rg': 'rg',
            '#email': 'email',
            '[name="gender"]': 'gender',
            '#birthDate': 'birthDate',
            '#address': 'address',
            '#school': 'school',
            '#schoolTurn': 'schoolTurn',
            '#educationalLevel': 'educationalLevel',
            '#professionalExperience': 'professionalExperience',
            '#admissionDate': 'admissionDate',
            '#contractualSituation': 'contractualSituation',
            '#skills': 'skills'

        },
        validation: {

            errorPlacement: function (error, element) {
            },
            ignore: [],
            //onfocusout: false,
            rules: {
                'name': {required: true},
                'cpf': {'cpf': true},
                //'rg': {required: true},
                'birthDate': {required: true},
                'admissionDate': {required: true},
                'address': {required: true},
                'email': {email: true},
                'contractualSituation': {required: true},
                'educationalLevel': {required: true},
                'schoolTurn': {required: true}
            },
            messages: {
                'name': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Nome é obrigatório.'
                        });
                    }
                },
                'cpf': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo CPF é obrigatório.'
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
                'rg': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo RG é obrigatório.'
                        });
                    }
                },
                'birthDate': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Nascimento é obrigatório.'
                        });
                    }
                },
                'admissionDate': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Data de Admissão é obrigatório.'
                        });
                    }
                },
                'email': {
                    email: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O email informado é inválido.'
                        });
                    }
                },
                'address': {
                    required: function () {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Endereço é obrigatório.'
                        });
                    }
                },
                'contractualSituation': {
                    required: function (e, el) {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Situação Contratual é obrigatório.'
                        });

                        setTimeout(function(){
                            if($('.tab-content').find('.active').find('.error').length == 0) {
                                var id = $(el).closest('.tab-pane').attr('id');
                                $('a[href="#' + id + '"]').tab('show');
                            }
                        }, 500);

                    }
                },
                'educationalLevel': {
                    required: function (e, el) {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Escolaridade é obrigatório.'
                        });
                        setTimeout(function(){
                            if($('.tab-content').find('.active').find('.error').length == 0) {
                                var id = $(el).closest('.tab-pane').attr('id');
                                $('a[href="#' + id + '"]').tab('show');
                            }
                        }, 500);
                    }
                },
                'schoolTurn': {
                    required: function (e, el) {
                        app.utils.notify({
                            type: 'error',
                            title: '!',
                            text: 'O campo Turno Escolar é obrigatório.'
                        });
                        setTimeout(function(){
                            if($('.tab-content').find('.active').find('.error').length == 0) {
                                var id = $(el).closest('.tab-pane').attr('id');
                                $('a[href="#' + id + '"]').tab('show');
                            }
                        }, 500);
                    }
                }
            }
        }
    };

});