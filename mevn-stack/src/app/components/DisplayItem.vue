<template lang="html">
    <div>
        <h3>Mostrando Items</h3>
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Operaciones</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                items: []
            }
        },
        created(){
            this.fetchItems();
        },
        methods: {
            fetchItems() {
                //const uri = "http://localhost:3000/item"
                this.axios.get('/item')
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            }
        }
    }
</script>