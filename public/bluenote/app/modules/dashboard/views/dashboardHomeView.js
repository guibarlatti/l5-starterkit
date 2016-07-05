
var templateSize = 'lg';
if($(window).width() <= 1024 ) {
    templateSize = 'md';
}

define([
    'tpl!modules/dashboard/templates/dashboardHome_' + templateSize + '.html',
    'echarts'
], function (DashboardHomeTemplate, ec) {

    'use strict';

    return Marionette.LayoutView.extend({

        template: DashboardHomeTemplate,
        regions: {
            slotA1: "#slot-a1",
            slotA2: "#slot-a2"
        },
        onRender: function () {

            if(localStorage.getItem('acl') > 0) {
                return true;
            }

            require(['modules/dashboard/views/widgets/jobOpportunities/jobOpportunities'], function (View) {
                this.slotA1.show(new View());
            }.bind(this));

            app.dataStore.ajax({
                url: app.config.getEndPoint('jobOpportunities?count=true'),
            }).done(function (r) {
                if (r.status === 'success') {
                    this.$('#count-jobOpportunities').html(r.data);
                }
            }.bind(this));

            app.dataStore.ajax({
               url: env.urlRoot + '/report/summary?type=RecruitsReport'
            }).done(function (r) {
               if (r.status === 'success') {
                   this.$('#count-recruits').html(r.data.total);
                   this.$('#recruits-A').html(r.data.gradeClass.A);
                   this.$('#recruits-B').html(r.data.gradeClass.B);
                   this.$('#waiting').html(r.data.contractualSituation['Aguardando Vaga']);
                   this.$('#working').html(r.data.contractualSituation['Efetivados']);

                   var myChart = ec.init(document.getElementById('recruits-pie'));
                   myChart.setOption({
                       color:[ '#2bbe69', '#2980b9' ],
                       title : {
                           text: 'Efetivados x Aguardando Vaga',
                           //subtext: 'Visão geral',
                           x:'center'
                       },
                       tooltip: {
                           trigger: 'item',
                           formatter: "{a} <br/>{b} : {c} ({d}%)"
                       },
                       legend: {
                           x: 'center',
                           y: 'bottom',
                           data: ['Efetivados', 'Aguardando Vaga']
                       },
                       toolbox: {
                           show: true,
                           feature: {
                               magicType: {
                                   show: true,
                                   type: ['pie', 'funnel'],
                                   option: {
                                       funnel: {
                                           x: '25%',
                                           width: '50%',
                                           funnelAlign: 'left',
                                           max: 1548
                                       }
                                   }
                               },
                               saveAsImage: {
                                   show: true,
                                   title: "Salvar Imagem"
                               }
                           }
                       },
                       calculable: true,
                       series: [{
                           name: 'Efetivados x Aguardando Vaga',
                           type: 'pie',
                           radius: '55%',
                           center: ['50%', '48%'],
                           data: [{
                               value: r.data.contractualSituation['Efetivados'],
                               name: 'Efetivados'
                           }, {
                               value: r.data.contractualSituation['Aguardando Vaga'],
                               name: 'Aguardando Vaga'
                           }]
                       }]
                   });
               }
            }.bind(this));

            app.dataStore.ajax({
                url: app.config.getEndPoint('employees?count=true'),
            }).done(function (r) {
                if (r.status === 'success') {
                    this.$('#count-employees').html(r.data);
                }
            }.bind(this));

            app.dataStore.ajax({
                url: app.config.getEndPoint('companies?count=true'),
            }).done(function (r) {
                if (r.status === 'success') {
                    this.$('#count-companies').html(r.data);
                }
            }.bind(this));

            //require(['modules/reports/views/management'], function (View) {
            //    this.slotA2.show(new View());
            //}.bind(this));

        }
    });
});
