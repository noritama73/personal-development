<template>
  <div id="app">
    <h1>フリーチャット</h1>
    <div class="message-form">
      <div class="address">
        <label for="from">From:</label>
        <input type="text" name="chats.from" id="chats.from" v-model="chats.from" />
        <label for="from">To:</label>
        <input type="text" name="chats.to" id="chats.to" v-model="chats.to" />
      </div>
      <div class="text-body">
        <label for="from">Message:</label><br>
        <textarea
          name="chats.text"
          id="chats.text"
          v-model="chats.text"
          　rows="8"
          cols="100"
          placeholder="本文を入力してください"
        ></textarea>
      </div>
      <button type="submit" class="button" value="送信" @click.prevent="addMessage(chats)" >送信</button>
      <Errors :errors="errors" />
    </div>
    <div class="container">
      <Message :chats="showChats" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Errors from "./components/Errors";
import Message from "./components/Message";

export default {
  name: "app",
  components: { Errors, Message },
  data() {
    return {
      chats: {
        id: "",
        from: "",
        to: "",
        text: ""
      },
      errors: {
        from: "",
        to: "",
        text: "",
      },
      showChats: [],
      currentId: 1,
      isAdd: true
    };
  },
  methods: {
    addMessage(showChats) {
      this.errors.from = "";
      this.errors.to = "";
      this.errors.text = "";
      var isAdd = true;

      if (!this.chats.from) {
        this.errors.from = "送り名が入力されていません";
        isAdd = false;
      }
      if (!this.chats.to) {
        this.errors.to = "宛名が入力されていません";
        isAdd = false;
      }
      if (!this.chats.text) {
        this.errors.text = "本文が入力されていません";
        isAdd = false;
      }

      if (isAdd) {
        this.chats.id = this.currentId;
        this.currentId++;
        this.showChats.push(Vue.util.extend({}, showChats));
      }
    }
  }
};
</script>

<style>
input,textarea {
  border-radius: 10px;
  background: #e9ebed;
  box-shadow: inset -10px 10px 20px #d2d4d5, 
              inset 10px -10px 20px #ffffff;
}
.container {
  padding: 0 5px;
}
.button {
  background: #51fac2;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  display: block;
  width: 100px;
  height: 40px;
  padding: 5px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  outline: none;
}
.button:hover {
  opacity: 0.6;
}
.button-outline {
  background: #fff;
  color: #51fac2;
  border: 1px solid #51fac2;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  padding: 0 10px;
  min-width: 8em;
  cursor: pointer;
  outline: none;
  transition: 0.2s;
}
.button-outline:hover {
  background-color: #83fad2;
  color: #fff;
}
</style>
