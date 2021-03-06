<template>
  <div class="calendar-body">
    <div class="day-of-week" v-for="week in weeks" :key="week">{{ week }}</div>
    <div
      class="date"
      v-for="(day, index) in calendarMake"
      :key="index"
      @click.prevent="openForm(day)"
    >
      {{ day }}
    </div>
  </div>
</template>

<script>
import store from "../store";
import dayjs from "dayjs";

export default {
  data() {
    return {
      weeks: ["日", "月", "火", "水", "木", "金", "土"]
    };
  },
  computed: {
    calendarMake() {
      const firstDate = dayjs(this.$store.getters.showBody)
        .startOf("month")
        .day();
      const lastDate = dayjs(this.$store.getters.showBody)
        .endOf("month")
        .date();
      const list = [];
      for (let i = 0; i < firstDate; i++) {
        list.push(" ");
      }
      for (let i = 1; i <= lastDate; i++) {
        list.push(i);
      }
      return list;
    }
  },
  methods: {
    openForm(day) {
      if (day != " ") {
        this.$store.commit("targetDaySet", day);
        this.$store.commit("open");
      }
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
.day-of-week {
  padding-bottom: 50px;
}
.date {
  padding-bottom: 120px;
}
.date:nth-child(7n + 1) {
  color: red;
}
.date:nth-child(7n) {
  color: blue;
}
.day-of-week:nth-child(1) {
  color: red;
}
.day-of-week:nth-child(7) {
  color: blue;
}
</style>