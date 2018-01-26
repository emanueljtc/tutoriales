<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{'css/app.css'}}">

        <title>Laravel</title>

    </head>
    <body>
        <div class="container">
            @yield('content')
        </div>
    <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
