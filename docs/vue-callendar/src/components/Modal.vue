<template>
  <transition name="fade">
    <div class="bg" v-show="isShow">
      <transition name="slide" @after-leave="afterLeave">
        <div class="modal" v-show="isShow">
          <h1>{{ this.targetDay }}日</h1>
          <span>予定：</span>
          <input type="text" /><br />
          <span>日付：</span>
          <input type="text" v-model="targetDate" placeholder="2020-10-8"/><br />
          <span>時間：</span>
          <input type="text" />
          <div>
            <button @click.self="close">戻る</button>
            <button>登録</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import store from "../store";

export default {
  computed: {
    isShow() {
      return this.$store.state.modalIsShow;
    },
    targetDay() {
      return this.$store.state.selectedDay;
    },
    targetDate: {
      get() {
        return this.$store.state.selectedDate;
      },
      set(value) {
        this.$store.commit('updateSelectedDate', value)
      }
    }
  },
  methods: {
    afterLeave() {},
    close() {
      this.$store.commit("close");
    }
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
.bg {
  position: fixed;
  display: flex;
  background: rgba(0, 150, 0, 0.5);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.modal {
  position: relative;
  cursor: default;
  max-width: 90%;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: top 0.5s ease;
  top: 0;
}
.slide-enter {
  top: -100px;
}
.slide-leave-to {
  top: 300px;
}
</style>