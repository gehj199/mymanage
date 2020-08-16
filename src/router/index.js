import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('@/components/Home')
    }, {
        path: '/leave',
        name: 'leave',
        component: () =>
            import ('@/components/Leave')
    }, {
        path: '/Error',
        name: 'Error',
        component: () =>
            import ('@/components/Error')
    }, {
        path: '/*',
        name: '*',
        redirect: '/Error',
        component: () =>
            import ('@/components/Error')
    }]
})