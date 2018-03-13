<template>
<div>
    <input type="text"  v-model="user.firstName">
  <button type="button" value="saludar" v-on:click="saludar(user.firstName)">
      Click Me
  </button>
</div>
</template>

<script>
    export default {
        data(){
            return{
                title: 'Soy un Componente',
                user: {
                    firstName: 'Emanuel',
                    lastName: 'Torres'
                },
                myHtml: '<h3>Hola Vue</h3>',
                showName: false,
                tasks: [
                    {title: 'comer'},
                    {title: 'dormir'}
                    ]
            }
        },
        methods: {
            saludar(name){
                alert('Gracias' + ' ' + name)
            }
        }
    }
</script>

<style media="screen">
    
</style>