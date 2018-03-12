<template>
    <div>
        <h1>Vuejs Funcionado</h1>
        <div class="col-md-2">
            <router-link :to="{ name: 'CreateItem'}" class="btn btn-primary">
                Crear Producto
            </router-link>

        </div><br>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    export default {

    }
</script>