import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    VueResource,
    render: h => h(App)
}).$mount("#app");
