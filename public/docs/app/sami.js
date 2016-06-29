
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:App" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App.html">App</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Console" >                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Console.html">Console</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Console_Commands" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Console/Commands.html">Commands</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Console_Commands_Inspire" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Console/Commands/Inspire.html">Inspire</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Console_Kernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Console/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Events" >                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Events.html">Events</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Events_Event" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Events/Event.html">Event</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Exceptions" >                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Exceptions_ApiException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Exceptions/ApiException.html">ApiException</a>                    </div>                </li>                            <li data-name="class:App_Exceptions_Handler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Exceptions/Handler.html">Handler</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http" >                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers.html">Controllers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Api</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers_Api_V1" >                    <div style="padding-left:72px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers/Api/V1.html">V1</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Controllers_Api_V1_JwtAuthController" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="App/Http/Controllers/Api/V1/JwtAuthController.html">JwtAuthController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Api_V1_UsersController" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="App/Http/Controllers/Api/V1/UsersController.html">UsersController</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http_Controllers_Auth" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers/Auth.html">Auth</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Controllers_Auth_AuthController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/AuthController.html">AuthController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_PasswordController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/PasswordController.html">PasswordController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Controllers_Controller" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/Controller.html">Controller</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_HomeController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/HomeController.html">HomeController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http_Middleware" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Middleware.html">Middleware</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Middleware_Authenticate" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/Authenticate.html">Authenticate</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_EncryptCookies" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/EncryptCookies.html">EncryptCookies</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_RedirectIfAuthenticated" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/RedirectIfAuthenticated.html">RedirectIfAuthenticated</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_VerifyCsrfToken" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/VerifyCsrfToken.html">VerifyCsrfToken</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http_Requests" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Requests.html">Requests</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Requests_Request" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Requests/Request.html">Request</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Kernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Http/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Jobs" >                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Jobs.html">Jobs</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Jobs_Job" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Jobs/Job.html">Job</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Models" >                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Models.html">Models</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Models_User" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/User.html">User</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Providers" >                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Providers.html">Providers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Providers_AppServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AppServiceProvider.html">AppServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_AuthServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AuthServiceProvider.html">AuthServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_EventServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/EventServiceProvider.html">EventServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_RouteServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/RouteServiceProvider.html">RouteServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Repositories" >                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Repositories.html">Repositories</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Repositories_UsersRepository" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Repositories/UsersRepository.html">UsersRepository</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_User" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/User.html">User</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "App.html", "name": "App", "doc": "Namespace App"},{"type": "Namespace", "link": "App/Console.html", "name": "App\\Console", "doc": "Namespace App\\Console"},{"type": "Namespace", "link": "App/Console/Commands.html", "name": "App\\Console\\Commands", "doc": "Namespace App\\Console\\Commands"},{"type": "Namespace", "link": "App/Events.html", "name": "App\\Events", "doc": "Namespace App\\Events"},{"type": "Namespace", "link": "App/Exceptions.html", "name": "App\\Exceptions", "doc": "Namespace App\\Exceptions"},{"type": "Namespace", "link": "App/Http.html", "name": "App\\Http", "doc": "Namespace App\\Http"},{"type": "Namespace", "link": "App/Http/Controllers.html", "name": "App\\Http\\Controllers", "doc": "Namespace App\\Http\\Controllers"},{"type": "Namespace", "link": "App/Http/Controllers/Api.html", "name": "App\\Http\\Controllers\\Api", "doc": "Namespace App\\Http\\Controllers\\Api"},{"type": "Namespace", "link": "App/Http/Controllers/Api/V1.html", "name": "App\\Http\\Controllers\\Api\\V1", "doc": "Namespace App\\Http\\Controllers\\Api\\V1"},{"type": "Namespace", "link": "App/Http/Controllers/Auth.html", "name": "App\\Http\\Controllers\\Auth", "doc": "Namespace App\\Http\\Controllers\\Auth"},{"type": "Namespace", "link": "App/Http/Middleware.html", "name": "App\\Http\\Middleware", "doc": "Namespace App\\Http\\Middleware"},{"type": "Namespace", "link": "App/Http/Requests.html", "name": "App\\Http\\Requests", "doc": "Namespace App\\Http\\Requests"},{"type": "Namespace", "link": "App/Jobs.html", "name": "App\\Jobs", "doc": "Namespace App\\Jobs"},{"type": "Namespace", "link": "App/Models.html", "name": "App\\Models", "doc": "Namespace App\\Models"},{"type": "Namespace", "link": "App/Providers.html", "name": "App\\Providers", "doc": "Namespace App\\Providers"},{"type": "Namespace", "link": "App/Repositories.html", "name": "App\\Repositories", "doc": "Namespace App\\Repositories"},
            
            {"type": "Class", "fromName": "App\\Console\\Commands", "fromLink": "App/Console/Commands.html", "link": "App/Console/Commands/Inspire.html", "name": "App\\Console\\Commands\\Inspire", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Console\\Commands\\Inspire", "fromLink": "App/Console/Commands/Inspire.html", "link": "App/Console/Commands/Inspire.html#method_handle", "name": "App\\Console\\Commands\\Inspire::handle", "doc": "&quot;Execute the console command.&quot;"},
            
            {"type": "Class", "fromName": "App\\Console", "fromLink": "App/Console.html", "link": "App/Console/Kernel.html", "name": "App\\Console\\Kernel", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Events", "fromLink": "App/Events.html", "link": "App/Events/Event.html", "name": "App\\Events\\Event", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Exceptions", "fromLink": "App/Exceptions.html", "link": "App/Exceptions/ApiException.html", "name": "App\\Exceptions\\ApiException", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Exceptions", "fromLink": "App/Exceptions.html", "link": "App/Exceptions/Handler.html", "name": "App\\Exceptions\\Handler", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_report", "name": "App\\Exceptions\\Handler::report", "doc": "&quot;Report or log an exception.&quot;"},
                    {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_render", "name": "App\\Exceptions\\Handler::render", "doc": "&quot;Render an exception into an HTTP response.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Api\\V1", "fromLink": "App/Http/Controllers/Api/V1.html", "link": "App/Http/Controllers/Api/V1/JwtAuthController.html", "name": "App\\Http\\Controllers\\Api\\V1\\JwtAuthController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Api\\V1\\JwtAuthController", "fromLink": "App/Http/Controllers/Api/V1/JwtAuthController.html", "link": "App/Http/Controllers/Api/V1/JwtAuthController.html#method_login", "name": "App\\Http\\Controllers\\Api\\V1\\JwtAuthController::login", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Api\\V1", "fromLink": "App/Http/Controllers/Api/V1.html", "link": "App/Http/Controllers/Api/V1/UsersController.html", "name": "App\\Http\\Controllers\\Api\\V1\\UsersController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Api\\V1\\UsersController", "fromLink": "App/Http/Controllers/Api/V1/UsersController.html", "link": "App/Http/Controllers/Api/V1/UsersController.html#method___construct", "name": "App\\Http\\Controllers\\Api\\V1\\UsersController::__construct", "doc": "&quot;UsersController constructor.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/AuthController.html", "name": "App\\Http\\Controllers\\Auth\\AuthController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\AuthController", "fromLink": "App/Http/Controllers/Auth/AuthController.html", "link": "App/Http/Controllers/Auth/AuthController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\AuthController::__construct", "doc": "&quot;Create a new authentication controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/PasswordController.html", "name": "App\\Http\\Controllers\\Auth\\PasswordController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\PasswordController", "fromLink": "App/Http/Controllers/Auth/PasswordController.html", "link": "App/Http/Controllers/Auth/PasswordController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\PasswordController::__construct", "doc": "&quot;Create a new password controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/Controller.html", "name": "App\\Http\\Controllers\\Controller", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/HomeController.html", "name": "App\\Http\\Controllers\\HomeController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\HomeController", "fromLink": "App/Http/Controllers/HomeController.html", "link": "App/Http/Controllers/HomeController.html#method___construct", "name": "App\\Http\\Controllers\\HomeController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\HomeController", "fromLink": "App/Http/Controllers/HomeController.html", "link": "App/Http/Controllers/HomeController.html#method_index", "name": "App\\Http\\Controllers\\HomeController::index", "doc": "&quot;Show the application dashboard.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http", "fromLink": "App/Http.html", "link": "App/Http/Kernel.html", "name": "App\\Http\\Kernel", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/Authenticate.html", "name": "App\\Http\\Middleware\\Authenticate", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\Authenticate", "fromLink": "App/Http/Middleware/Authenticate.html", "link": "App/Http/Middleware/Authenticate.html#method_handle", "name": "App\\Http\\Middleware\\Authenticate::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/EncryptCookies.html", "name": "App\\Http\\Middleware\\EncryptCookies", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\RedirectIfAuthenticated", "fromLink": "App/Http/Middleware/RedirectIfAuthenticated.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html#method_handle", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/VerifyCsrfToken.html", "name": "App\\Http\\Middleware\\VerifyCsrfToken", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Requests", "fromLink": "App/Http/Requests.html", "link": "App/Http/Requests/Request.html", "name": "App\\Http\\Requests\\Request", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Jobs", "fromLink": "App/Jobs.html", "link": "App/Jobs/Job.html", "name": "App\\Jobs\\Job", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/User.html", "name": "App\\Models\\User", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AppServiceProvider.html", "name": "App\\Providers\\AppServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_boot", "name": "App\\Providers\\AppServiceProvider::boot", "doc": "&quot;Bootstrap any application services.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_register", "name": "App\\Providers\\AppServiceProvider::register", "doc": "&quot;Register any application services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AuthServiceProvider.html", "name": "App\\Providers\\AuthServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AuthServiceProvider", "fromLink": "App/Providers/AuthServiceProvider.html", "link": "App/Providers/AuthServiceProvider.html#method_boot", "name": "App\\Providers\\AuthServiceProvider::boot", "doc": "&quot;Register any application authentication \/ authorization services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/EventServiceProvider.html", "name": "App\\Providers\\EventServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\EventServiceProvider", "fromLink": "App/Providers/EventServiceProvider.html", "link": "App/Providers/EventServiceProvider.html#method_boot", "name": "App\\Providers\\EventServiceProvider::boot", "doc": "&quot;Register any other events for your application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/RouteServiceProvider.html", "name": "App\\Providers\\RouteServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_boot", "name": "App\\Providers\\RouteServiceProvider::boot", "doc": "&quot;Define your route model bindings, pattern filters, etc.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_map", "name": "App\\Providers\\RouteServiceProvider::map", "doc": "&quot;Define the routes for the application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Repositories", "fromLink": "App/Repositories.html", "link": "App/Repositories/UsersRepository.html", "name": "App\\Repositories\\UsersRepository", "doc": "&quot;Class EmployeesRepository&quot;"},
                                                        {"type": "Method", "fromName": "App\\Repositories\\UsersRepository", "fromLink": "App/Repositories/UsersRepository.html", "link": "App/Repositories/UsersRepository.html#method_model", "name": "App\\Repositories\\UsersRepository::model", "doc": "&quot;Retorna qual \u00e9 o model que este reposit\u00f3rio gerencia&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


