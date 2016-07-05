/*jslint browser: true, devel: true, nomen: true*/
/*global Backbone, $, jQuery, define, app, _, require*/

define(['backbone.paginator', 'jquery'], function () {

    'use strict';

    return {

        initialize: function () {

            if (!this.model) {
                this.model = new Backbone.Model();
            }

            this.listenTo(app.vent, 'pagination:change', function (r) {
                this.model.set(r);
                this.stickit();
            });

            this.listenTo(app.vent, this.eventRefreshList, function () {
                this.itemsCollection.reset();
                this.itemsCollection.getPage(this.itemsCollection.state.currentPage);
            });

            this.listenTo(app.vent, this.eventDeletedItem, function () {
                this.itemsCollection.getPage(this.itemsCollection.state.currentPage);
            });

        },

        onRender: function () {

            this.setItemsPerPage();

            this.initPagination(this.endpoint, this.itemsPerPage);
        },

        initPagination: function (endpoint, perPage) {

            var Item = Backbone.Model.extend({});
            var itemTemplate = this.itemTemplate;

            var ItemsCollection = Backbone.PageableCollection.extend({
                model: Item,
                url: endpoint,
                state: {
                    pageSize: perPage
                },
                queryParams: {
                    currentPage: 'page',
                    pageSize: 'pageSize'
                },
                parseRecords: function (resp) {
                    app.vent.trigger('pagination:change', resp.data);
                    return resp.data.data;
                },
                parseState: function (resp, queryParams, state, options) {
                    return {
                        totalRecords: resp.data.total,
                        totalPages: resp.data.last_page,
                        lastPage: resp.data.last_page
                    };
                }
            });

            this.itemsCollection = new ItemsCollection();

            this.itemsCollection.comparator = function (model) {
                return model.get(this.sortProperty);
            };

            var ListItemView = Backbone.Marionette.ItemView.extend({
                    tagName: 'tr',
                    template: function (model) {
                        return itemTemplate(model);
                    }
                }),

                ItemsCollectionView = Backbone.Marionette.CollectionView.extend(),

                listView = new ItemsCollectionView({
                    childView: ListItemView,
                    collection: this.itemsCollection,
                    el: this.$('.itemsTable')
                });


            this.itemsCollection.getFirstPage().done(function () {
                listView.render();
                this.renderControls(this.itemsCollection.state.currentPage, this.itemsCollection.state.totalPages);
            }.bind(this));
        },

        renderControls: function (currentPage, numPages) {
            var pagingControls = '',
                container = this.$('.pagination'),
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
            container.find('li:first,li:last').removeClass('active');

            if (!this.itemsCollection.hasPreviousPage()) {
                container.find(':first').addClass('disabled');
            } else {
                container.find(':first').removeClass('disabled');
            }

            if (!this.itemsCollection.hasNextPage() || currentPage == numPages) {
                container.find('li:last').addClass('disabled');
            } else {
                container.find('li:last').removeClass('disabled');
            }

        },

        goToPage: function (e) {
            var page;

            if (this.model.get('search')) {
                this.itemsCollection.queryParams.search = this.model.get('search');
            }

            if (e && e.hasOwnProperty('currentTarget')) {
                e.preventDefault();
                page = $(e.currentTarget).data('page');
            } else {
                var $el = this.$('.pageJump');
                page = $el.val();
            }

            if (this.model.get('current_page', page) == page) {
                return true;
            }

            this.itemsCollection.getPage(parseInt(page)).done(function (r) {
                this.itemsCollection.state.totalPages = r.data.last_page;
                this.itemsCollection.state.currentPage = r.data.current_page;
                this.itemsCollection.state.firstPage = 1;
                this.itemsCollection.state.lastPage = r.data.last_page;
                this.renderControls(r.data.current_page, r.data.last_page);
            }.bind(this));

        },

        prevPage: function (e) {
            e.preventDefault();

            if (!this.itemsCollection.hasPreviousPage()) {
                return false;
            }

            this.itemsCollection.getPreviousPage().done(function (r) {
                this.itemsCollection.state.totalPages = r.data.last_page;
                this.itemsCollection.state.currentPage = r.data.current_page;
                this.itemsCollection.state.firstPage = 1;
                this.itemsCollection.state.lastPage = r.data.last_page;
                this.renderControls(r.data.current_page, r.data.last_page);
            }.bind(this));

        },

        nextPage: function (e) {

            e.preventDefault();

            if (!this.itemsCollection.hasNextPage() ||
                this.itemsCollection.state.currentPage == this.itemsCollection.state.lastPage) {
                return false;
            }

            this.itemsCollection.getNextPage().done(function (r) {
                this.itemsCollection.state.totalPages = r.data.last_page;
                this.itemsCollection.state.currentPage = r.data.current_page;
                this.itemsCollection.state.firstPage = 1;
                this.itemsCollection.state.lastPage = r.data.last_page;
                this.renderControls(r.data.current_page, r.data.last_page);
            }.bind(this));

        },

        pageJump: function (e) {

            if (e && (e.keyCode <= 48 && e.keyCode >= 57) || (e.keyCode <= 96 && e.keyCode >= 105)) {
                return false;
            }
            var delay = (function () {
                var timer = 0;
                return function (callback, ms) {
                    clearTimeout(timer);
                    timer = setTimeout(callback, ms);
                };
            })();
            delay(function () {
                $('.formPageJump').submit();
            }, 300);
        },

        searchBoxKeyup: function (e) {
            clearTimeout($.data(this, 'timer'));
            var wait = setTimeout(function () {
                $('.formSearch').submit();
            }, 300);
            $(this).data('timer', wait);
        },


        confirmDelete: function (e) {

            var itemId = $(e.currentTarget).data('id'),
                endpoint = this.endpoint + '/' + itemId,
                customEvent = this.eventDeletedItem;

            app.commands.execute("app:dialog:confirm", {
                icon: 'info-sign',
                title: '<span class="text-center"><i class="fa fa-warning"></i> Atenção!</span>',
                message: '<h3 style="color: #d9534f" class="text-center"><strong>Deseja realmente excluir este item?</strong></h3>' +
                '<p class="alert text-center "> <strong>Atenção: Esta operação não pode ser desfeita!</strong></p>',
                confirmYes: function () {
                    var request;
                    request = app.dataStore.ajax({
                        type: 'DELETE',
                        url: endpoint
                    });

                    request.done(function (result) {
                        if (result.status === 'success') {
                            app.utils.notify({
                                type: 'success',
                                text: 'Cadastro excluído com sucesso.'
                            });
                            app.vent.trigger(customEvent, {id: itemId});
                        } else {
                            app.utils.notify({
                                type: 'error',
                                text: result.message
                            });
                        }
                    }.bind(this));
                    return true;
                },
                confirmNo: function () {
                    return false;
                }
            });
        },

        showModalCadastro: function (e) {

            e.preventDefault();

            var cadastroModel = new Backbone.Model(),
                id = $(e.currentTarget).data('id'),
                viewPath = this.viewRegisterPath,
                entityName = this.entityName,
                moduleName = this.moduleName,
                modalCustomClass = this.modalCustomClass,
                showModal = function (cadastroModel) {
                    require([viewPath], function (CadastroView) {
                        var actionIcon = '<i class="' + app.utils.getIconRoute(moduleName) + '"></i> ',
                            actionTitle = cadastroModel.get('id') ? 'Alterar ' : 'Cadastrar ',
                            view = new CadastroView({model: cadastroModel}),
                            modalOptions = {
                                showFooter: false,
                                title: actionIcon + actionTitle + entityName,
                                removeExtraPanel: true,
                                customClass: modalCustomClass
                            };
                        app.commands.execute("app:show:modalView", view, modalOptions);
                    });
                };

            if (id) {
                cadastroModel.set('id', id);
            }
            showModal(cadastroModel);
        },

        pageJumpFormSubmit: function (e) {
            e.preventDefault();
            var lastPage = this.model.get('last_page');
            var requestedPage = $('.pageJump').val();

            if (requestedPage == '') return false;

            if (requestedPage > lastPage || requestedPage < 1) {
                app.utils.notify({
                    type: 'error',
                    title: '!',
                    text: 'A página solicitada não existe.'
                });
                return false;
            }
            this.goToPage(requestedPage);
        },

        searchFormSubmit: function (e) {

            e && e.preventDefault();

            var search = this.model.get('search');

            var request = app.dataStore.ajax({
                url: this.endpoint,
                data: {'search': search, pageSize: this.itemsPerPage}
            });

            request.done(function (r) {
                this.itemsCollection.reset(r.data.data);

                this.itemsCollection.state.totalPages = r.data.last_page;
                this.itemsCollection.state.currentPage = r.data.current_page;
                this.itemsCollection.state.firstPage = 1;
                this.itemsCollection.state.lastPage = r.data.last_page;

                this.itemsCollection.queryParams.search = this.model.get('search');

                this.renderControls(r.data.current_page, r.data.last_page);

                this.model.set({
                    last_page: r.data.last_page,
                    total: r.data.total,
                    current_page: r.data.current_page,
                });
                this.stickit();

                if (r.data.data.length == 0) {
                    app.utils.notify({
                        type: 'info',
                        text: 'Nenhum item encontrado.'
                    });
                }

            }.bind(this));

        },

        setItemsPerPage: function() {
            var itemsPerPageAuto =  parseInt((($(window).height() - 300) / 36));
            if (!this.itemsPerPage || this.itemsPerPage == 'auto') {
                this.itemsPerPage = itemsPerPageAuto;
                console.log('alterando resultados por página para: ' + itemsPerPageAuto);
            }

            this.$('.table-wrapper').css({
                'min-height': ($(window).height() - 330) ,
            });
        },

        events: {
            'click .confirmDelete': 'confirmDelete',
            'click .showModalCadastro': 'showModalCadastro',
            'click .nextPage': 'nextPage',
            'click .prevPage': 'prevPage',
            'click .pagination a:not(:last):not(:first)': 'goToPage',
            'keyup .pageJump': 'pageJump',
            'keyup .search-box': 'searchBoxKeyup',
            'change .pageJump': 'pageJump',
            'submit .formPageJump': 'pageJumpFormSubmit',
            'submit .formSearch': 'searchFormSubmit'


        },

        bindings: {
            '.search-box': 'search',
            '.pagination, .pagesCount': {
                observe: 'last_page',
                visible: function (val) {
                    return val > 0
                }
            },
            '.totalPages': {
                observe: 'last_page',
                visible: function (val) {
                    return val > 0
                },
                updateView: true
            },
            '.totalItems': {
                observe: 'total',
                onGet: function (val) {
                    return val;
                },
                updateView: true
            },
            '.currentPage': 'current_page',
            '.pageJump': {

                attributes: [{
                    name: 'max',
                    observe: 'last_page',
                    onGet: function (val) {
                        return val;
                    }
                }]
            }
        }

    };

});
