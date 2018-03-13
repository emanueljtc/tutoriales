<template lang="html">
  <div class="container users">
    <div class="card">
      <div class="card-header">
        <h4>Componente User</h4>
      </div>
      <div class="card-body">
        <ul>
          <li v-for="user in users">
            {{ user.name }} - {{ user.email }} <button v-on:click="deleteUser(user)"> <i class="far fa-window-close"></i> </button>
          </li>
        </ul>
        <form v-on:submit.prevent="addUser">
          <div class="row">

            <div class="form-group col-md-6">
              <input type="text" class="form-control" v-model="newUser.name" placeholder="Ingrese Nombre">
            </div>
            <div class="form-group col-md-6">
              <input type="email" class="form-control" v-model="newUser.email" placeholder="Ingrese Email">
            </div>
            </div>
            <button type="submit" class="btn btn-primary">
                Añadir
            </button>
      </form>
    </div>
  </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: [{
            name: 'Emanuel Torres',
            email: 'emanueljtc@gmail.com',
            contacted: false
          }
          
        ],
        newUser: {}
      }
    },
    methods: {
      addUser() {
          this.users.push(this.newUser);
          this.newUser = {};
      },
      deleteUser(user){
         this.users.splice(this.users.indexOf(user), 1);
      }
    }
  }

</script>
<style lang="css">
  .users {
    background: tomato;
    padding: 20px;
  }

</style>
