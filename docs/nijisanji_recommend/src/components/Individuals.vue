<template>
  <div class="show">
    <transition-group name="list" tag="ul">
      <li
        v-for="item in individuals"
        :key="item.id"
        class="individual"
        :class="{ out: item[sort.key] < 3, reset: sort.key === 'id' }"
      >
        <div>{{ item.name }}</div>
        <div><img :src="'static/pic/' + item.pic + '.png'" /></div>
      </li>
    </transition-group>
  </div>
</template>

<script>
import store from "../store";
export default {
  computed: {
    individuals() {
      return this.$store.getters.currentLivers;
    },
    sort: {
      get() {
        return this.$store.getters.sort;
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 170px;
}
ul {
  list-style: none;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
.individual {
  background-color: rgb(206, 206, 206);
  width: 180px;
}
.out {
  opacity: 0.3;
}
.reset {
  opacity: 1;
}
.list-enter-active,
.list-leave-active,
.list-move {
  transition: opacity 1s, transform 1s;
}
.list-leave-active {
  position: absolute;
}
.list-enter {
  opacity: 0;
  transform: rotateX(-50px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>