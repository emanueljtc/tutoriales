import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

// import Toastr
import Toastr from 'vue-toastr';
// import toastr less file: need webpack less-loader
require('vue-toastr/src/vue-toastr.less');
// Register plugin
Vue.use(Toastr);

import App from './App.vue';
import DisplayItem from './components/DisplayItem.vue';
import CreateItem from './components/CreateItem.vue';
import EditItem from './components/EditItem.vue';
const routes = [{
        name: "DisplayItem",
        path: "/",
        component: DisplayItem
    },
    {
        name: 'CreateItem',
        path: '/create/item',
        component: CreateItem
    },
    {
        name: 'EditItem',
        path: '/create/item',
        component: EditItem
    }
];
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
new Vue(Vue.util.extend({
    router
}, App)).$mount('#app');