import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import router from "./route";

Vue.use(Router);

new Vue({
    el: "#app",
    render: h => h(App),
    router
});