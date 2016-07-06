<!-- Javascript Libs -->
{{--<script type="text/javascript" src="{{asset('admin/dist/lib/js/jquery.min.js')}}"></script>--}}
{{--<script type="text/javascript" src="{{asset('admin/dist/lib/js/bootstrap.min.js')}}"></script>--}}
{{--<script type="text/javascript" src="{{asset('admin/dist/lib/js/Chart.min.js')}}"></script>--}}
{{--<script type="text/javascript" src="{{asset('admin/dist/lib/js/bootstrap-switch.min.js')}}"></script>--}}
{{--<script type="text/javascript" src="{{asset('admin/dist/lib/js/jquery.matchHeight-min.js')}}"></script>--}}
{{--<script type="text/javascript" src="{{asset('admin/dist/lib/js/jquery.dataTables.min.js')}}"></script>--}}
{{--<script type="text/javascript" src="{{asset('admin/dist/lib/js/dataTables.bootstrap.min.js')}}"></script>--}}
{{--<script type="text/javascript" src="{{asset('admin/dist/lib/js/select2.full.min.js')}}"></script>--}}
{{--<script type="text/javascript" src="{{asset('admin/dist/lib/js/ace/ace.js')}}"></script>--}}
{{--<script type="text/javascript" src="{{asset('admin/dist/lib/js/ace/mode-html.js')}}"></script>--}}
{{--<script type="text/javascript" src="{{asset('admin/dist/lib/js/ace/theme-github.js')}}"></script>--}}
<!-- Javascript -->
{{--<script type="text/javascript" src="{{asset('admin/dist/js/app.js')}}"></script>--}}
{{--<script type="text/javascript" src="{{asset('admin/dist/js/index.js')}}"></script>--}}

<script>
    var env = {
        apiRoot: 'http://api.{{ env("APP_DOMAIN") }}/v1'
    };
</script>
<script data-main="admin/app/main" src="{{asset('admin/app/lib/requirejs/require.js')}}"></script>
