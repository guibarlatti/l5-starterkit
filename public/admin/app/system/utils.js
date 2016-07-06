define(['toastr', 'idleTimer'], function (toastr) {


    function setToggleLoading(app) {
        app.toggleLoading = function () {
            $('body').toggleClass('appLoading');
        };
    }

    function setupNotifiers(app) {

        app.utils.showToastr = function (userOptions) {


            var defaults = app.config.notify.toastr.defaults,
                options = defaults;

            if (userOptions) {
                options = $.extend(defaults, userOptions);
            }

            toastr.options = options;

            if (toastr.hasOwnProperty(options.type)) {
                toastr[options.type](options.text);
            } else {
                toastr.info(options.text);
            }

        };

        /**
         * [notify description]
         * @param  {[type]} userOptions [description]
         * @return {[type]}             [description]
         */
        app.utils.notify = function (userOptions) {

            var method,
                sound,
                defaults = {
                    component: 'Toastr'
                },
                options = defaults;

            if (userOptions) {
                options = $.extend(defaults, userOptions);
            }

            method = (function () {
                return 'show' +
                    options.component.charAt(0).toUpperCase() +
                    options.component.substr(1);
            }());

            app.utils[method](options);

            if (app.config.notify.playSound || options.playSound) {

                sound = $('#sound-' + options.type);

                if (sound.length) {
                    sound[0].play();
                }

            }
        };
    }

    function setupBackboneHelpers(app) {

        Backbone.ajax = function () {

            arguments[0].headers = {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
                'Accept': "application/json"
            };
            return Backbone.$.ajax.apply(Backbone.$, arguments);
        };


        /*  Turning off div wrap for Backbone.Marionette.ItemView.
         *  Example:
         *  onRender: function () {
         *       app.utils.turnOffDivWrap(this);
         *  }
         *********************************************************/
        app.utils.turnOffDivWrap = function (view) {
            // Get rid of that pesky wrapping-div.
            // Assumes 1 child element present in template.
            view.$el = view.$el.children();
            // Unwrap the element to prevent infinitely
            // nesting elements during re-render.
            view.$el.unwrap();
            view.setElement(view.$el);
        };

        app.utils.getIconRoute = function (route) {
            route = route || Backbone.history.getFragment();
            var icon = app.routesCollection.findWhere({'route': route});
            return (icon) ? icon.get('iconClass') : '';
        };
    }

    function setupPlugins() {
        var body = $('body');

        body.tooltip({
            selector: '[data-toggle="tooltip"]'
        });

        body.popover({
            selector: '[data-toggle="popover"]',
            trigger: "hover"
        });

        setupMenu();
    }

    function setupMenu() {
        $(function () {

            $(".navbar-expand-toggle").click(function () {
                $(".app-container").toggleClass("expanded");
                return $(".navbar-expand-toggle").toggleClass("fa-rotate-90");
            });

            $(".navbar-right-expand-toggle").click(function () {
                $(".navbar-right").toggleClass("expanded");
                return $(".navbar-right-expand-toggle").toggleClass("fa-rotate-90");
            });

            $(".side-menu .nav .dropdown").on('show.bs.collapse', function () {
                return $(".side-menu .nav .dropdown .collapse").collapse('hide');
            });

            $(window).on('hashchange', function () {
                var hash = window.location.hash.substr(1);
                $('#app-routes-collection').find('.active').removeClass('active');
                $('[data-route="' + hash + '"]').addClass('active');
            });

            var loadingIndicator = $('.app-busy');
            loadingIndicator.hide();
            $(document).ajaxStart(function () {
                loadingIndicator.show();
            }).ajaxStop(function () {
                loadingIndicator.hide();
            });
        });
    }

    function setInputsAlphaOnly() {
        $("body").on('keypress', '.alpha-only', function (event) {
            var inputValue = event.charCode;
            if ((inputValue > 47 && inputValue < 58) && (inputValue != 32)) {
                event.preventDefault();
            }
        });
    }

    function set(app) {
        app.utils = app.utils || {};
        setupBackboneHelpers(app);
        setupNotifiers(app);
        setToggleLoading(app);
        setupPlugins(app);
        setInputsAlphaOnly();
    }

    return {
        set: set
    }

});
