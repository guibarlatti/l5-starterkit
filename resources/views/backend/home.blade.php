<!DOCTYPE html>
<html>

<head>
    <title>Starterkit Admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @include('backend.partials.cssDefault')

</head>

<body class="flat-blue">
<div class="app-container expanded">
    <div class="row content-container">
        @include('backend.partials.menuTop')
        @include('backend.partials.menuLeft')
        @include('backend.partials.content')
    </div>

    @include('backend.partials.footer')

    @include('backend.partials.jsDefault')
</div>
</body>

</html>
