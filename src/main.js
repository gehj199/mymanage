import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import ElemetUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElemetUI)
Vue.prototype.$store = store

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')