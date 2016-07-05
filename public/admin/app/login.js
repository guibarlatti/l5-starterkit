$(function () {

    toastr.options = {
        "type": "info",
        "positionClass": "toast-bottom-full-width",
        "progressBar": true,
        "closeButton": true,
        "preventDuplicates": true,
        "newestOnTop": false,
        "timeout": 10000
    };

    var $form = $('#login'),
        storage = window.localStorage;

    // removendo token atual, caso exista
    delete storage['token'];
    delete storage['acl'];

    $form.validate({
        errorPlacement: function (error, element) {
        },
        onfocusout: false,
        errorClass: "has-error",
        rules: {
            'username': {
                required: true
            },
            'password': {
                required: true
            }
        },
        messages: {
            'username': {
                required: function () {
                    toastr['error']('Informe seu nome de usuário.');
                }
            },
            'password': {
                required: function () {
                    toastr['error']('Informe sua senha.');
                }
            }
        },
        submitHandler: function () {

            var btn = $('button'),
                btnOriginalText = btn.html(),
                btnLoadingText = 'Aguarde...';

            btn.html(btnLoadingText);

            var request = $.ajax({
                data: $form.serialize(),
                url: $form.attr('action'),
                type: $form.attr('method')
            });

            request.done(function (response) {

                if (response.status === 'success') {
                    storage.setItem('token', response.data.token);
                    storage.setItem('acl', response.data.acl);
                    storage.setItem('name', response.data.fullName);
                    storage.setItem('username', response.data.userName);
                    storage.setItem('role', response.data.role);
                    storage.setItem('uid', response.data.uid);
                    window.location = env.urlRoot
                } else {
                    btn.html(btnOriginalText);
                    toastr['error'](response.message);
                }
            });
        }
    });
});
