<template>
  <div id="app">
    <Modals />
  </div>
</template>

<script>
import Modals from './components/Modals'

export default {
  name: 'App',
  components: { Modals },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
