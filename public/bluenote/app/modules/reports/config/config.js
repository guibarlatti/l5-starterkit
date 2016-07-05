define([], function () {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }
    var todayString = dd+'/'+mm+'/'+yyyy;

    return {
        datepicker: {
            locale: {
                format: 'DD/MM/YYYY',
                "separator": " - ",
                "applyLabel": "Aplicar",
                "cancelLabel": "Cancelar",
                "fromLabel": "De",
                "toLabel": "Até",
                "customRangeLabel": "Custom",
                "daysOfWeek": ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa" ],
                "maxDate": todayString,
                "monthNames": [
                    "Janeiro",
                    "Fevereiro",
                    "Março",
                    "Abril",
                    "Maio",
                    "Junho",
                    "Julho",
                    "Agosto",
                    "Setembro",
                    "Outubro",
                    "Novembro",
                    "Dezembro"
                ]
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