@extends('app')

@section('content')

<div id="crud" class="row">
    <div class="col-xs-12">
        <h1 class="page-header">CRUD LARAVEL Y VUE</h1>
    </div>
    <div class="col-sm-7">
        <a href="#" class="btn btn-primary pull-right" data-toggle="modal" data-target="#create">
             Nueva Tarea
        </a>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tarea</th>
                    <th colspan="2">
                        &nbsp;
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="keep in keeps">
                    <th width="10px">@{{ keep.id }}</th>
                    <td>@{{ keep.keep }}</td>
                    <td width="10px">
                        <a href="#" class="btn btn-warning btn-sm">Editar</a>
                    </td>
                    <td width="10px">
                        <a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteKeep(keep)">Eliminar</a>
                    </td>
                </tr>
            </tbody>
        </table>
       @include('create')
    </div>
     <div class="col-sm-5">
            <pre>
                @{{ $data }}
            </pre>
        </div>
</div>


@endsection