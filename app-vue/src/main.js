// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Test from "./components/Test.vue";
import User from "./components/User.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes: [{
            path: "/",
            component: User
        },
        {
            path: "/test",
            component: Test
        }
    ]
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    components: {
        App
    },
    router,
    template: "<App/>"
});