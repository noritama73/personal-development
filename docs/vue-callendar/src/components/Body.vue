<template>
  <div class="calendar-body">
    <div class="day-of-week" v-for="week in weeks" :key="week">{{ week }}</div>
    <div class="date" v-for="day in calendarMake" :key="day">{{ day }}</div>
  </div>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";
import dayjs from "dayjs";

export default {
  data() {
    return {
      weeks: ["日", "月", "火", "水", "木", "金", "土"],
      showDates: []
    };
  },
  computed: {
    calendarMake() {
      const firstDate = dayjs(this.$store.getters.currentDate).startOf('month').date;
      const lastDate = dayjs(this.$store.getters.currentDate).endOf('month').date
      const space = (firstDate === 0 ? 6 : firstDate - 1);
      //console.log(this.$store.state.select.month)
      console.log(this.$store.getters.currentDate.startOf('month'))
      //console.log(this.$store.getters.currentDate.month)
      const list = []
      //const list = [[...Array(space)].map(i=>" "), [...Array(lastdate)].map((_, i) => i+1)];
      return list;
    }
  }
};
</script>

<style>
.calendar-body {
  display: flex;
  flex-wrap: wrap;
}
.day-of-week,
.date {
  width: 14.28%;
}
.date {
  margin: 70px 0;
}
</style>