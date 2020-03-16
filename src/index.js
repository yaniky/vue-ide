import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import router from "./route";
import store from "./store";
import "normalize.css";

Vue.use(Router);

new Vue({
    el: "#app",
    render: h => h(App),
    store,
    router
});