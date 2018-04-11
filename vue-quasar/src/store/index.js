import "../helpers/firebase";
import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from "vuefire";
import example from './module-example'
Vue.use(VueFire);
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        example
    }
})

export default store