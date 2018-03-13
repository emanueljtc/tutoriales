<template>
    <div class="container test">
        <div class="card">
            <div class="card-header">
                <h4>DATOS</h4>
            </div>
            <div class="card-body">
                <div class="row">
    
                    <div class="form-group col-md-6">
                        <label class="">Nombre:</label>
                        <input type="text" v-model="user.firstName" class="form-control">
                    </div>
                    <div class="form-group col-md-6">
                        <label class="">Apellido:</label>
                        <input type="text" v-model="user.lastName" class="form-control">
                    </div>
                    <div class="col-md-12 center-block">
                        <button type="button" class="btn btn-dark" value="saludar" v-on:click="saludar(user.firstName)">
                            Click Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="card">
            <div class="card-header">
                <h4>Metodo Keyup</h4>
            </div>
            <div class="card-body">
                <div class="form-group">
                    {{ fullName }}
                </div>
            </div>
        </div>
        <hr>
        <div class="card">
            <div class="card-body">
                <p>{{ msg }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Soy un Componente',
                user: {
                    firstName: 'Emanuel',
                    lastName: 'Torres'
                },
                myHtml: '<h3>Hola Vue</h3>',
                showName: false,
                tasks: [{
                        title: 'comer'
                    },
                    {
                        title: 'dormir'
                    }
                ]
            }
        },
        methods: {
            saludar(name) {
                alert('Gracias' + ' ' + name)
            },
            typing(e) {
                console.log(e.target.value);
            }
        },
        computed: {
            fullName() {
                return this.user.firstName + ' ' + this.user.lastName;
            }
        },
        props: {
            msg: {
                type: String,
                default: 'defecto'
            }
        }
    }
</script>

<style media="screen">
    .test{
        background: #eee;
    }
</style>