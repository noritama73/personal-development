<template>
  <div>
    <div class="message" v-for="(chat, index) in chats" :key="index">
      <div class="propaty">
        <div>ID:{{chat.id}}</div>
        <div v-show="chat.from">From:{{chat.from}}</div>
        <div v-show="chat.to">To:{{chat.to}}</div>
      </div>
      <div class="body">
        <div>{{chat.text}}</div>
        <button class="button-outline" @click="remove(chat.id)">削除</button>
        <button class="button-outline" @click="openReply(index)">返信</button>
        <div class="replyBody">
          <reply-message :reply-id="chat.id" ref="child"></reply-message>
        </div>
      </div>
    </div>
      <transition name="fade">
        <div class="bg" v-show="isDelete">
          <transition name="slide" @after-leave="afterLeave">
            <div class="modal" v-show="isDelete">
              <p class="delete">{{deleteId}}番のレスを削除しますか？</p>
              <button class="button-outline no" @click.self="close">いいえ</button>
              <button class="button-outline yes" @click.self="doRemove(deleteId, deleteId)">はい</button>
            </div>
          </transition>
        </div>
      </transition>
  </div>
</template>

<script>
import ReplyMessage from "./ReplyMessage";
export default {
  name: "Message",
  props: ["chats"],
  components: { ReplyMessage },
  data: function() {
    return {
      isDelete: false,
      deleteId: "",
      index: ""
    };
  },
  methods: {
    remove(id) {
      this.isDelete = true;
      this.deleteId = id;
    },
    doRemove(index, did) {
      //this.$refs.child[index-1].deleteReply();
      this.chats = this.chats.filter( x => x.id !== did);
      this.isDelete = false;
    },
    openReply(index) {
      this.$refs.child[index].openReplyChild();
    },
    close: function() {
      this.isDelete = false;
    },
    afterLeave: function() {
      this.deleteId = undefined;
    }
  }
};
</script>

<style>
.message {
  margin: 10px 0;
  padding: 10px 0;
  border-top: solid 1px gray;
}
.delete {
  color: white;
}
.bg {
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.7);
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