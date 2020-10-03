import "babel-polyfill";
import Vue from "vue";
import Vuex from "vuex";
import dayjs from "dayjs";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: {
      id: [],
      name: "",
      date: [],
      finished: []
    },
    select: {
      year: Number,
      month: Number,
      day: Number
    }
  },
  getters: {
    currentDate(state) {
      return state.select;
    }
  },
  mutations: {
    today(state) {
      state.select.year = dayjs().year();
      state.select.month = dayjs().month() + 1;
      state.select.day = dayjs().date();
    },
    setDate(state, value) {
      state.select.year = value;
      state.select.month = value;
      state.select.day = value;
    },
    prev(state) {
      if (state.select.month === 1) {
        state.select.month = 12;
        state.select.year--;
      } else {
        state.select.month--;
      }
    },
    next(state) {
      if (state.select.month === 12) {
        state.select.month = 1;
        state.select.year++;
      } else {
        state.select.month++;
      }
    }
  }
});
export default store;
