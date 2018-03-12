<template lang="html">
    <div class="card">
        <div class="card-header">
            <h3>Agrega un Item</h3>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="addItem">
                <div class="form-group">
                    <input type="text" v-model="item.name" placeholder="Agrega un Nombre" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" v-model="item.price" placeholder="Agrega un Precio" class="form-control">
                </div>
                <div class="form-group col-md-4">
                    <button type="submit" class="btn btn-primary">
                        Agregar Producto
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                item: {

                }
            }
        },
        methods: {
            addItem() {
                this.axios.post('/item', this.item)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            }
        }
    }
</script>

<style lang="css">
</style>