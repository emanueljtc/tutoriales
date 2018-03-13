<template>
<div>
  <div v-text="title"></div>
    <div v-if="showName">
        <p>{{user.firstName}}</p>
    </div>
    <div v-else>
        <p>No puedo Mostrar Nombre</p>
    </div>
    <hr>
    <ul>
        <li v-for="task in tasks"
            :key="task">
            {{ task.title }}
        </li>
    </ul>
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
        }
    }
</script>

<style media="screen">
    
</style>