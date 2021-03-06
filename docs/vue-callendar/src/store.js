import "babel-polyfill";
import Vue from "vue";
import Vuex from "vuex";
import dayjs from "dayjs";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: {
      name: "",
      date: []
    },//予定を格納する配列
    selectedMonth: dayjs(),//カレンダーの表示に使用する日付
    selectedDate: null,
    selectedDay: null,//予定追加時にクリックされた日(date)
    modalIsShow: false
  },
  getters: {
    showHeader(state) { //ヘッダーでの表示用
      return state.selectedMonth
    },
    showBody(state) { //カレンダー本体の表示用
      return state.selectedMonth
    },
  },
  mutations: {
    prev(state) { //表示する年月の変更
      state.selectedMonth = dayjs(state.selectedMonth).subtract(1,'month')
    },
    next(state) {
      state.selectedMonth = dayjs(state.selectedMonth).add(1,'month')
    },
    open(state) { //モーダルの開閉
      state.modalIsShow = true
    },
    close(state) {
      state.modalIsShow = false
    },
    targetDaySet(state, value) { //クリックされた日付の取得
      state.selectedDay = value
    },
    updateSelectedDate(state, value) {
      state.selectedDate = state.selectdMonth.date(value)
    }
  }
});
export default store;
