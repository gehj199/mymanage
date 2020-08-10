import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Container',
        component: () =>
            import ('@/components/Container')
    }, {
        path: '/Test',
        name: 'Test',
        component: () =>
            import ('@/components/Test')
    }]
})