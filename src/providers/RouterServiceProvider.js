import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const RouterServiceProvider = new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
        return {x: 0, y: 0};
    },
    routes: [
        {path: '*', component: () => import('@/pages/NotFound')},
        {path: '/', name: 'home', component: () => import('@/pages/Home')}
    ]
});

export default RouterServiceProvider;
