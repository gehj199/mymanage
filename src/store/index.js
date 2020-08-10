import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

