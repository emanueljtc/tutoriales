<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
       
        <title>Laravel</title>

    </head>
    <body>
    <div id="main" class="container">
        <div class="row">
            <div class="col-sm-4">
                <h1>Laravel - VUE-js - Ajax - Axios</h1>
                <ul class="list-group">
                    <li v-for="item in lists" class="list-group-item">
                        @{{ item.name }} <strong>@{{ item.email }}</strong>
                    </li>
                </ul>
            </div>
            <div class="col-sm-8">
                <h1>Json</h1>
                <pre>
                    @{{ $data | json }}
                </pre>
            </div>
        </div>
    </div>
     <script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.min.js"></script>
        <script src="{{ asset('js/app.js') }}"> </script>
  
    </body>
</html>
