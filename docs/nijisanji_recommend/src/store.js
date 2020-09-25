import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import liverData from './assets/livers.json'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        livers : liverData,
    },
    getters: {
        currentLivers(state) {
            return state.livers
        }
    }
})

export default store