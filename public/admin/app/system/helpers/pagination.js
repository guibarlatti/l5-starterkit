/*jslint browser: true, devel: true, nomen: true*/
/*global $, jQuery, define, app, _, require, Backbone*/

define(['jquery', 'backbone.paginator'], function () {

    'use strict';


    return {


        init: function (endpoint, itemTemplate) {

            var Item = Backbone.Model.extend({});
            var Items = Backbone.PageableCollection.extend({
                model: Item,
                url: endpoint,
                state: {
                    pageSize: 2
                },
                queryParams: {
                    currentPage: "page",
                    pageSize: "pageSize"
                },
                parseRecords: function (resp) {
                    return resp.data.data;
                },
                parseState: function (resp, queryParams, state, options) {
                    return {totalRecords: resp.data.total};
                }
            });

            this.itensCollection = new Items();

            var ListItemView = Backbone.Marionette.ItemView.extend({
                    tagName: 'tr',
                    template: function (model) {
                        console.log(model);
                        return itemTemplate(model);
                    }
                }),

                ItensCollectionView = Backbone.Marionette.CollectionView.extend(),

                listView = new ItensCollectionView({
                    childView: ListItemView,
                    collection: this.itensCollection,
                    el: $('.itemsTable')
                });


            this.itensCollection.getFirstPage().done(function () {
                listView.render();
                this.renderControls(this.itensCollection.state.currentPage, this.itensCollection.state.totalPages);
            }.bind(this));

        },

        renderControls: function (currentPage, numPages) {
            var pagingControls = '',
                container = $('.pagination'),
                itemsToShow = (currentPage + 2);

            if (currentPage === numPages) {
                for (var j = 2; j >= 0; j--) {
                    var page = parseInt(parseInt(numPages) - j);
                    if (page >= 1) {
                        pagingControls += ['<li><a href="#" data-page="', page, '">', page, '</a></li>'].join('');
                    }
                }
            } else {
                for (var i = 1; i <= itemsToShow; i++) {
                    if (i >= (currentPage - 2)) {
                        pagingControls += ['<li><a href="#" data-page="', i, '">', i, '</a></li>'].join('');
                    }
                    if (currentPage >= numPages || i >= numPages) break;
                }
            }
            container.find('li:not(:first):not(:last)').remove();
            container.find(':first').after(pagingControls);
            container.find('[data-page="' + currentPage + '"]').parent().addClass('active');
        },

        goToPage: function (e) {
            console.log(e)
            var page = $(e.currentTarget).data('page');
            this.itensCollection.getPage(page);
            this.renderControls(this.itensCollection.state.currentPage, this.itensCollection.state.totalPages);
        },

        prevPage: function (e) {

            if (!this.itensCollection.hasPreviousPage) {
                $(e.currentTarget).addClass('disabled');
            } else {
                $(e.currentTarget).removeClass('disabled');
            }

            this.itensCollection.getPreviousPage();
            this.renderControls(this.itensCollection.state.currentPage, this.itensCollection.state.totalPages);

        },

        nextPage: function (e) {

            this.itensCollection.getNextPage();
            if (!this.itensCollection.hasNextPage()) {
                $(e.currentTarget).addClass('disabled');
            } else {
                $(e.currentTarget).removeClass('disabled');
            }
            this.renderControls(this.itensCollection.state.currentPage, this.itensCollection.state.totalPages);

        }


    };

});
