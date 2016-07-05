define(['toastr', 'gritter', 'nicescroll', 'idleTimer'], function (toastr) {

    /* App navigation handler.
     ****************************/
    function setupNavigationHandler(app) {
        app.utils.canNavigate = function () {
            return true;
        };

        var defaultLoadUrl = Backbone.History.prototype.loadUrl;
        Backbone.History.prototype.loadUrl = function () {
            if (app.utils.canNavigate()) {
                //Set canNavigate to default behavior.
                app.utils.canNavigate = function () {
                    return true;
                };
                return defaultLoadUrl.apply(this, arguments);
            } else {
                history.back();
                return true;
            }
        };
    }


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

        app.utils.showGritter = function (userOptions) {

            var defaults = config.notify.gritter.defaults,
                options = defaults;

            if (userOptions) {
                options = $.extend(defaults, userOptions);

                if (userOptions.hasOwnProperty('type')) {
                    options.class_name = 'gritter-' + userOptions.type;
                }
            }

            $.gritter.add(options);
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


    function setupPopovers(app) {

        var body = $('body');
        var timer;

        body.on('click', function (e) {
            $('[data-load-popover],[data-toggle="popover"]').each(function () {
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                    $(this).popover('hide');
                }
            });
        });

        body.on('mouseenter', '[data-load-popover]', function () {

            if (timer) return false;

            timer = true;
            var e = $(this),
                placement = e.data('placement') || 'top';

            e.css('cursor', 'wait');

            setTimeout(function () {
                timer = false;
                require([['modules', e.attr('data-load-popover')].join('/')], function (PopoverView) {
                    console.log(e.data());
                    var htmlContent = new PopoverView({model: new Backbone.Model(e.data())}).render().el;

                    $('[data-load-popover]').not(e).popover('hide');

                    e.popover({
                        'container': 'body',
                        'content': htmlContent,
                        'html': true,
                        'placement': placement
                    }).popover('show');

                    e.css('cursor', 'default');

                });
            }.bind(this), 500);


        });

        body.on('click', '.hide-popovers', function () {
            app.vent.trigger('popover:closeAll');
        });

        app.vent.on('popover:closeAll', function () {
            $('[data-load-popover],[data-toggle="popover"]').popover('hide');
        });

    }


    function setupFullsizePanels(app) {

        $('body').on('click', '.toggle-panel-size', function (e) {
            e.preventDefault();
            var panel = $(this),
                target = $(panel.data('target')),
                icon = panel.find('i');

            target.toggleClass('full-size-panel');

            icon.removeClass();
            if (target.hasClass('full-size-panel')) {
                icon.addClass(panel.data('icon-compress') || app.config.icons.compress);
            } else {
                icon.addClass(panel.data('icon-expand') || app.config.icons.expand);
            }
        });

        $(document).on('keyup', function (e) {
            if (e.keyCode == 27) {
                $('.full-size-panel').removeClass('full-size-panel');
                $('.toggle-panel-size i').removeClass().addClass(app.config.icons.expand);
            }
        });

        app.vent.on('fspanel:close', function () {
            $('.full-size-panel').removeClass('full-size-panel');
        });

    }


    function setupPlugins(app) {
        var body = $('body');
        body.niceScroll({
            background: '#E5E9E7',     // The scrollbar rail color
            cursorwidth: '10px',       // Scroll cursor width
            cursorcolor: '#949494',     // Scroll cursor color
            scrollspeed: 90, // scrolling speed
            mousescrollstep: 90, // scrolling speed with mouse wheel (pixel)
            railoffset: 300
        });


        body.tooltip({
            selector: '[data-toggle="tooltip"]'
        });

        body.popover({
            selector: '[data-toggle="popover"]',
            trigger: "hover"
        });

        var $offlineUI = $('.offline-ui'),
            $backdrop = $('#full-backdrop');

        if (app.config.enableNetworkCheck) {

            if (!navigator.onLine) {
                $offlineUI.addClass('offline-ui-down offline-ui-waiting');
            }

            if (app.config.blockOfflineInteraction && !navigator.onLine) {
                $backdrop.fadeIn('3000');
            }

            window.addEventListener('online', function () {
                $offlineUI.removeClass('offline-ui-down offline-ui-waiting');
                $offlineUI.addClass('offline-ui-up offline-ui-up-5s');
                $backdrop.hide();
            });

            window.addEventListener('offline', function () {
                $offlineUI.addClass('offline-ui-down offline-ui-waiting');
                $backdrop.fadeIn('3000');
            });
        }

        var ajaxProcess = $('#ajaxProcess');
        $(document).ajaxStart(function () {
            $('.btn').attr('disabled', 'disabled');
            ajaxProcess.show();
        }).ajaxStop(function () {
            $('.btn').removeAttr('disabled');
            ajaxProcess.hide();
        });


        $('#toolbar-fixed').find('a').on('click', function () {
            $('.main-menu').find('a').removeClass('active');
        });

    }

    function setMenuScroll() {

        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".nav").hasClass("sub-nav collapse in");

            if (_opened === true && !clickover.hasClass("active")) {
                $('#main-nav .in').collapse('hide');
            }

        });

        function initNiceScroll() {
            $('#main-nav').niceScroll({
                background: '#E5E9E7',     // The scrollbar rail color
                cursorwidth: '10px',       // Scroll cursor width
                cursorcolor: '#949494',     // Scroll cursor color
                scrollspeed: 90, // scrolling speed
                mousescrollstep: 90, // scrolling speed with mouse wheel (pixel)
                railoffset: 300,
                autohidemode: "scroll"
            });
        }

        function onResize() {
            var mainNav = $('#main-nav'),
                w = $(window).width(),
                breakpoint = 1024,
                ns = mainNav.getNiceScroll();

            if (w > breakpoint) {
                if (ns.length) {
                    ns.resize();
                } else {
                    initNiceScroll();
                }
            } else {
                if (ns.length) {
                    ns.remove();
                }
            }
        }

        var timer;
        $(window).on('resize', function () {
            timer && clearTimeout(timer);
            timer = setTimeout(onResize, 1000);
        });

        setTimeout(function () {
            onResize();
        }, 2000);

    }

    function setupLockScreen(app) {

        require(['system/views/default/lockScreen'], function (LockScreenView) {

            app.LockScreenView = LockScreenView;

            app.lockScreen = function () {
                if (app.config.lockScreenIsEnabled()) {
                    app.lockScreenRegion.show(new LockScreenView());
                    app.locked = true;
                }
            };

            app.unlockScreen = function () {
                app.lockScreenRegion.reset();
                app.locked = false;
            };

            $(document).on("idle.idleTimer", function (event, elem, obj) {
                app.lockScreen();
            });

            $(document).on("active.idleTimer", function (event, elem, obj, triggerevent) {
                //   app.unlockScreen();
            });

            $.idleTimer(app.config.getIdleTimeout());

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
        setupNavigationHandler(app);
        setupNotifiers(app);
        setToggleLoading(app);
        setupFullsizePanels(app);
        setupPlugins(app);
        setupPopovers(app);
        setupLockScreen(app);
        setInputsAlphaOnly();

        var $body = $('body');

        $body.on('change', '.chosen-select, .input-date', function () {
            if ($(this).val()) {
                $(this).removeClass('error');
            }
        });

        $body.on('focus', 'input[type="search"]', function () {
            $(this).addClass('active');
        });

        $body.on('blur', 'input[type="search"]', function () {
            if ($(this).val().length == 0)
                $(this).removeClass('active');
        });


        jQuery.extend({
            getQueryParameters: function (str) {
                return (str || document.location.search)
                    .split('?')
                    .pop()
                    .replace(/(^\?)/, '')
                    .split("&")
                    .map(function (n) {
                        return n = n.split("="), this[n[0]] = n[1], this
                    }.bind({}))[0];
            }
        });
    }

    return {
        set: set,
        setMenuScroll: setMenuScroll
    }

});
