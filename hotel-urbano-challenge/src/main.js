import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueMaterial);

new Vue({
    router,
    store,
    VueResource,
    render: h => h(App)
}).$mount("#app");
