import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import liverData from './assets/livers.json'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        showlivers: liverData,
        list: liverData,
        sort: {
            key: '',
        },
        filter: {
            id: [],
            name: '',
            song: [],
            talk: [],
            chara: [],
            game: [],
            voice: [],
        }
    },
    getters: {
        currentLivers(state) {
            return state.list
        },
        filter(state) {
            return state.filter
        },
        sort(state) {
            return state.sort
        },
    },
    mutations: {
        result(state) {
            let list = state.showlivers.slice();
            if (state.sort.key) {
                list.sort((a, b) => {
                    a = a[state.sort.key];
                    b = b[state.sort.key];
                    if (state.sort.key === "id")
                    {
                        return (a === b ? 0 : a > b ? 1 : -1);
                    }
                    else {
                        return (a === b ? 0 : a < b ? 1 : -1);
                    }
                });
            }
            if (state.filter.name) {
                list = list.filter(item => item.name.indexOf(state.filter.name) > -1);
            }
            state.list = list
        },
    }
})

export default store