import 'regenerator-runtime/runtime';
import Vue from 'vue';

import store from './store';
import App from './App.vue';

new Vue({
    store,
    el: '#app',
    render: h => h(App),
});
