<template>
  <div id="app" class="container">
    <h1>Vue and Firebase</h1>
  </div>
</template>

<script>
//importamos Firebase
import Firebase from 'firebase';

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

let linksRef = db.ref('links')

export default {
  name: 'App',
  
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
