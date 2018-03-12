<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-10">
                    <h3>Actualizar Producto</h3>
                </div>
                <div class="col-md-2">
                    <router-link :to="{ name: 'DisplayItem' }" class="btn btn-success">
                        Retornar
                    </router-link>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="updateItem">
            <div class="form-group">
                <label>Nombre</label>
                <input type="text" class="form-control" v-model="item.name">
            </div>

            <div class="form-group">
                <label name="product_price">Precio</label>
                <input type="text" class="form-control" v-model="item.price">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Actualizar</button>
            </div>
        </form>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                item: {}
            }
        },
        created: function () {
            this.getItem();
        },
        methods: {
            getItem() {
                let uri = 'http://localhost:3000/item/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },
            updateItem() {
                let uri = 'http://localhost:3000/item/update/' + this.$route.params.id;
                this.axios.post(uri, this.item).then((response) => {
                    this.$router.push({
                        name: 'DisplayItem'
                    });
                    
                });
            
            }
        }
    }
</script>