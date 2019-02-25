import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Error from './views/Error.vue';


Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/error',
            name: 'error',
            component: Error
        }
    ]
})