<template>
  <div id="app" class="container">
    <h1>Vue and Firebase</h1>

    <div class="card">
      <div class="card-header">
        <h3>Add A Link</h3>
      </div>

      <div class="card-body">

        <form v-on:submit.prevent="addLink" class="form-inline">
          
          <div class="form-group">
            <label for="" style="margin-left:10px;"> Titulo </label>
          <input v-model="newLink.title" placeholder="Titulo" type="text" class="form-control" style="margin-left:10px;">
          </div>

          <div class="form-group">
            <label for="" style="margin-left:10px;"> Autor </label>
          <input v-model="newLink.author" placeholder="Autor" type="text" class="form-control" style="margin-left:10px;">
          </div>

          <div class="form-group">
            <label for="" style="margin-left:10px;"> Url </label>
          <input v-model="newLink.url" placeholder="URL" type="text" class="form-control" style="margin-left:10px;">
          </div>

          <input type="submit" class="btn btn-success" value="Add a Link" style="margin-left:10px;">
        </form>
      </div>

      <hr>
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Links Lista</h3>
        </div>
        <div class="card-body">
          <table class="table table-striped">
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Autor</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="link in links">
                  <td>
                    <a v-bind:href="link.url" target="_blank">{{ link.title }}</a>
                  </td>
                  <td>
                    {{ link.author }}
                  </td>
                  <td>
                    <button class="btn btn-danger" v-on:click="deleteLink(link)">
                      <i class="fa fa-trash-o" aria-hiden="true"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//importamos Firebase
import Firebase from 'firebase';
import toastr from 'toastr';
//creamos la variable que contiene los datos de la APIKEY
let config = {
  apiKey: "AIzaSyDK5LixDK_ZbPEFtTbrnRATXyYjVSBnn20",
    authDomain: "vuefire-906a9.firebaseapp.com",
    databaseURL: "https://vuefire-906a9.firebaseio.com",
    projectId: "vuefire-906a9",
    storageBucket: "",
    messagingSenderId: "326103442942"
};

//Firebase conectate
let app = Firebase.initializeApp(config);

//Firebase trae la Base de Datos
let db = app.database();

//COLECCION DE DATOS
let linksRef = db.ref('links')

export default {
  name: 'App',
  firebase: {
    links: linksRef
  },
  data() {
    return {
      newLink: {
        title: '',
        author: '',
        url: ''
      }
    }
  },
  methods: {
    addLink: function () {
      linksRef.push(this.newLink);

      this.newLink.title = '';
      this.newLink.author = '';
      this.newLink.url = '';
      toastr.success('Link Agregado!!')
    },
    deleteLink: function (link) {
      linksRef.child(link['.key']).remove();
      toastr.success('Link Eliminado!!')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
