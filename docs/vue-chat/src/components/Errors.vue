<template>
    <transition-group name="fade" appear>
        <div class="error" v-for="error in errors" :key="error">{{error}}</div>
    </transition-group>
</template>

<script>
export default {
  name: "Errors",
  props: ["errors"]
};
</script>

<style>
.error {
  color: red;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>