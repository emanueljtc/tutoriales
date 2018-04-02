import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //State: es el objeto JavaScript que contiene los datos de la aplicacion
    state: {
        todos: [{
            id: 0,
            task: 'Tarea 1',
            completed: false
        }, {
            id: 1,
            task: 'Tarea 2',
            completed: true
        }, {
            id: 2,
            task: 'Tarea 3',
            completed: false
        }]
    },
    //Getters: son funciones que devuelven los contenidos de los estados
    getters: {
        getTodos: state => state.todos
    },
    //Mutations: son funciones sincronas que devuelven el estado, y son el unico mecanismo que existe para esto.
    //POR CONVENCION LAS MUTACIONES SE DEFINEN EN MAYUSCULAS PARA DIFERENCIAR
    mutations: {
        ADD_TODO: (state, payload) => {
            const newTask = {
                id: payload.id,
                task: payload.task,
                completed: false
            }
            state.todos.unshift(newTask)
        },
        TOGGLE_TODO: (state, payload) => {
            let item = state.todos.find(todo => todo.id === payload)
            item.completed = !item.completed
        },
        DELETE_TODO: (state, payload) => {
            let index = state.todos.findIndex(todo => todo.id === payload)
            state.todos.splice(index, 1)
        },
    },
    //Actions: Son funciones asincronas que actualizan el estado a traves de una mutacion existente, puede invocar mutaciones
    actions: {
        addTodo: (context, payload) => {
            context.commit('ADD_TODO', payload)
        },
        toggleTodo: (context, payload) => {
            context.commit('TOGGLE_TODO', payload)

        },
        deleteTodo: (context, payload) => {
            context.commit('DELETE_TODO', payload)
        }
    }
})