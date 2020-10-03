import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.store({
    state: {
        tasks: [
            id,
            name,
            date,
            finished,
        ],
        select: [
            month,
            day,
        ]
    },
    mutations: {
        
    }
})
export default store