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
                <tr v-for="item in items">
                     <td>{{ item._id }}</td>
                     <td>{{ item.name }}</td>
                     <td>{{ item.price }}</td>
                     <td>
                         <a href="#" class="btn btn-dark">Editar</a>
                         <a href="#" class="btn btn-danger">Eliminar</a>
                     </td>
                </tr>
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
                    .then(res => {
                        this.items = res.data;
                    })
                    .catch(err => console.log(err));
            }
        }
    }
</script>