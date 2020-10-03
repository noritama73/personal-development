<template>
  <div class="move-month">
    <span><button @click="prevMonth"><i class="fas fa-chevron-left"></i></button></span>
    <span>
      <input type="number" v-model.number="today.year" />年
      <input type="number" v-model.number="today.month" />月
    </span>
    <span><button @click="nextMonth"><i class="fas fa-chevron-right"></i></button></span>
  </div>
</template>

<script>
import store from "../store"
import dayjs from 'dayjs'

export default {
  computed: {
    today:{
      get(){
        this.$store.commit('today')
        return this.$store.getters.currentDate
      },
      set(value){
        this.$store.commit('setDate',value)
      }
    }
  },
  methods: {
    prevMonth() {
      this.$store.commit("prev");
    },
    nextMonth() {
      this.$store.commit("next");
    }
  }
};
</script>

<style scoped>
input {
  width: 3em;
}
.move-month {
  margin: 50px;
}
</style>