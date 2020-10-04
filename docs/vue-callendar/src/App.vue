<template>
  <div id="app">
    <h1>Calender by Vue.js</h1>
    <Header />
    <Body />
    <Modal />
  </div>
</template>

<script>
import Header from "./components/Header"
import Body from "./components/Body"
import Modal from "./components/Modal"

export default {
  name: "App",
  components: {
    Header,Body,Modal
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
