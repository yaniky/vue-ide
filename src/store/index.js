import Vue from "vue";
import Vuex from "vuex";
import hellow from "./test/hellow";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        hellow
    }
});