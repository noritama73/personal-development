<template>
  <div id="app">
    <SortWindow />
    <Individuals />
  </div>
</template>

<script>
import Individuals from './components/Individuals'
import SortWindow from  './components/SortWindow'

export default {
  name: 'App',
  components: { Individuals, SortWindow },
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
