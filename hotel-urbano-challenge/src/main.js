import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Loading from "vue-loading-overlay";
import VueResource from "vue-resource";
import VueMaterial from "vue-material";
import filters from "./filters/filters";
import "vue-loading-overlay/dist/vue-loading.min.css";
import "vue-material/dist/vue-material.min.css";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueMaterial);
Vue.use(Loading);

filters.create(Vue);

new Vue({
    router,
    store,
    VueResource,
    Loading,
    render: h => h(App)
}).$mount("#app");
