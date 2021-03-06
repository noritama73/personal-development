<template>
  <div class="move-month">
    <button @click="test">test</button>
    <span
      ><button @click="prevMonth"><i class="fas fa-chevron-left"></i></button
    ></span>
    <span>
      {{ today }}
    </span>
    <span
      ><button @click="nextMonth"><i class="fas fa-chevron-right"></i></button
    ></span>
  </div>
</template>

<script>
import store from "../store";
import dayjs from "dayjs";

export default {
  computed: {
    today() {
      return this.$store.getters.showHeader.format('YYYY年MM月');
    } 
  },
  methods: {
    prevMonth() {
      this.$store.commit("prev");
    },
    nextMonth() {
      this.$store.commit("next");
    },
    test() {
      console.log(this.today);
    }
  }
};
</script>

<style scoped>
input {
  width: 4em;
}
.move-month {
  margin: 50px;
}
</style>