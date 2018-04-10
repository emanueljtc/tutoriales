import "./helpers/firebase";
import Vue from "vue";
import App from "./App.vue";
import VueFire from "vuefire";

Vue.use(VueFire);

new Vue({
    el: "#app",
    render: h => h(App)
});