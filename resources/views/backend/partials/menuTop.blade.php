<nav class="navbar navbar-default navbar-fixed-top navbar-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-expand-toggle">
                <i class="fa fa-bars icon"></i>
            </button>
            <ul class="nav navbar-nav">
                <li>
                    <div style="min-width: 50px;margin-top: 5px">
                        <img class="app-busy" src="{{asset('admin/dist/img/loader-blue.gif')}}"/>
                    </div>
                </li>
            </ul>
            <ol class="breadcrumb navbar-breadcrumb">
                <li class="active"></li>
            </ol>
            <button type="button" class="navbar-right-expand-toggle pull-right visible-xs">
                <i class="fa fa-th icon"></i>
            </button>
        </div>
        <ul class="nav navbar-nav navbar-right">
            <button type="button" class="navbar-right-expand-toggle pull-right visible-xs">
                <i class="fa fa-times icon"></i>
            </button>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i
                            class="fa fa-comments-o"></i></a>
                <ul class="dropdown-menu animated fadeInDown">
                    <li class="title">
                        Notification <span class="badge pull-right">0</span>
                    </li>
                    <li class="message">
                        No new notification
                    </li>
                </ul>
            </li>
            <li class="dropdown danger">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i
                            class="fa fa-star-half-o"></i> 1</a>
                <ul class="dropdown-menu danger  animated fadeInDown">
                    <li class="title">
                        Notification <span class="badge pull-right">1</span>
                    </li>
                    <li>
                        <ul class="list-group notifications">
                            <li class="list-group-item">
                                <a href="#">
                                    <i class="fa fa-exclamation-circle icon"></i> new registration
                                    <span class="badge pull-right">1</span>
                                </a>
                            </li>
                            <li class="list-group-item message">
                                <a href="#">ver todas</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="dropdown profile">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    {{Auth::user()->name}} <span class="caret"></span>
                </a>
                <ul class="dropdown-menu animated fadeInDown">
                    <li class="profile-img">
                        <img src="{{asset('admin/dist/img/profile/unnamed.jpg')}}"
                             class="profile-img">
                    </li>
                    <li>
                        <div class="profile-info">
                            <h4 class="username">{{Auth::user()->name}}</h4>
                            <p>{{Auth::user()->email}}</p>
                            <div class="btn-group margin-bottom-2x" role="group">
                                <button type="button" class="btn btn-default"><i class="fa fa-user"></i> Meu Perfil
                                </button>
                                <button type="button" class="btn btn-default"><i class="fa fa-sign-out"></i> Sair
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</nav>