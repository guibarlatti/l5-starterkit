/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require*/

define([
    'marionette',
    'tpl!system/templates/default/logs.html',
    'tpl!system/templates/default/logItemTemplate.html',
    'stickit'
    //'datatables',
    //'dataTableTWBS'
], function (Marionette, htmlTemplate, itemTemplate) {

    'use strict';

    return Marionette.ItemView.extend({

        template: htmlTemplate,

        initialize: function () {
            this.model = new Backbone.Model({
                perPage: 10,
                currentPage: 1
            });
        },

        onRender: function () {
            this.stickit();
            this.loadData(this.renderTable);
        },

        loadData: function(callback) {
            var request,
                endpoint = app.config.getEndPoint('logs'),
                $table = this.$('table'),
                $loading = this.$('.loading-content');

            $table.find('.itemsTable').empty();

            request = app.dataStore.ajax({
                url: endpoint,
                type: 'GET',
                data: {
                    page: this.model.get('currentPage'),
                    perPage: this.model.get('perPage'),
                    search: this.model.get('search'),
                    order: this.model.get('order')
                }
            });

            request.done(function(response){

                $loading.fadeOut('normal', '', function(){$table.fadeIn();});

                if (response.status === 'success') {
                    callback(response.data, $table.find('.itemsTable'));

                    this.model.set({
                        totalPages: response.totalPages,
                        totalRows: response.totalRows,
                        currentPage: response.currentPage,
                        nextPage: response.nextPage,
                        prevPage: response.prevPage
                    });
                    this.stickit();
                    this.renderControls(response.currentPage, response.totalPages);
                }

            }.bind(this));
        },


        renderControls:  function(currentPage, numPages) {
            var pagingControls = '',
                container = this.$('.pagination'),
                itemsToShow = (currentPage + 2);

            if(currentPage === numPages) {
                for (var j = 2; j >= 0 ; j--) {
                    var page = parseInt(parseInt(numPages) - j);
                    if ( page >= 1) {
                        pagingControls += ['<li><a href="#" data-page="', page, '">', page, '</a></li>'].join('');
                    }
                }
            } else {
                for (var i = 1; i <= itemsToShow; i++) {
                    if(i >= (currentPage - 2)) {
                        pagingControls += ['<li><a href="#" data-page="', i, '">', i, '</a></li>'].join('');
                    }
                    if(currentPage >= numPages || i >= numPages) break;
                }
            }
            container.find('li:not(:first):not(:last)').remove();
            container.find(':first').after(pagingControls);
            container.find('[data-page="' + currentPage + '"]').parent().addClass('active');
        },

        renderTable: function (data, container) {

            var itensCollection = new Backbone.Collection(data),

                ListItemView = Backbone.Marionette.ItemView.extend({
                    tagName: 'tr',
                    template: function(model) {
                        return itemTemplate(model);
                    }
                }),

                ItensCollectionView = Backbone.Marionette.CollectionView.extend(),

                listView = new ItensCollectionView({
                    childView: ListItemView,
                    collection: itensCollection,
                    el: container
                });

            listView.render();
        },

        goToPage: function(page) {
            this.$('table').hide();
            this.$('.loading-content').show();
            this.model.set('currentPage', page);
            this.loadData(this.renderTable);
        },

        sortTable: function (e) {
            e && e.preventDefault();
            var $el = $(e.currentTarget),
                sortingMapNext = {'asc': 'desc', 'desc': 'asc'},
                column = $el.data('column'),
                sorting = $el.attr('data-sorting') || 'asc';

            this.model.set({
                'order': [column, sorting].join(' '),
                'currentPage': 1
            });
            this.$('table').find('.sort-column').attr('data-sorting', '');
            $el.attr('data-sorting', sortingMapNext[sorting]);

            this.$('table').hide();
            this.$('.loading-content').show();
            this.loadData(this.renderTable);
        },

        events: {
            'click .sort-column': 'sortTable',
            'click .pagination a': function(e) {
                e.preventDefault();
                var page = $(e.currentTarget).attr('data-page');
                if(page.length === 0 || page == this.model.get('currentPage')) return false;
                this.goToPage(page);
            },
            'keyup .search-box': function(e) {
                var search = $(e.currentTarget);
                (search.val().length) ? search.addClass('expanded') : search.removeClass('expanded');
                if (e.keyCode == 13) {
                    this.$('#table').hide();
                    this.$('#loading-content').show();
                    this.model.set({'currentPage': 1, 'search': search.val()})
                    this.loadData(this.renderTable);
                }
            }
        },

        bindings: {
            '.search-box': 'search',
            '.pagination, .pagesCount': {
                observe: 'totalPages',
                visible: function(val, options) { return val > 0 }
            },
            '.totalPages': {
                observe: 'totalPages',
                visible: function(val, options) { return val > 0 },
                updateView: true
            },
            '.currentPage': 'currentPage',
            '.next': {
                attributes: [{
                    name: 'data-page',
                    observe: 'nextPage',
                    onSet: function(val) {return val}
                }]
            },
            '.prev': {
                attributes: [{
                    name: 'data-page',
                    observe: 'prevPage',
                    onSet: function(val) {return val}
                }]
            },
            '.nextContainer': {
                attributes: [{
                    name: 'class',
                    observe: 'nextPage',
                    onGet: function(val) {return (typeof val === 'undefined' || val === null) ? 'disabled' : '';}
                }]
            },
            '.prevContainer': {
                attributes: [{
                    name: 'class',
                    observe: 'prevPage',
                    onGet: function(val) {return (typeof val === 'undefined' || val === null) ? 'disabled' : '';}
                }]
            }
        }

    });

});
