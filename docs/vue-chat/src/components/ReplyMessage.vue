<template>
  <div>
    <div v-show="can">>>{{replyId}}</div>
    <div>{{replyText}}</div>
    <div class="accordion" v-show="isReply">
      <textarea v-model="replyText" rows="5" cols="60" placeholder="返信を入力してください"></textarea>
      <button class="button-outline" @click="childAddReply">送信</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReplyMessage",
  props: ["replyId"],
  data: function() {
    return {
        id: "",
        replyText: "",
        can: false,
        isReply: false
    };
  },
  methods: {
    openReplyChild() {
      this.isReply = true;
    },
    childAddReply() {
      this.id = this.replyId;
      this.can = true;
      this.isReply = false;
    },
    deleteReply() {
      this.replyText = "";
      this.can = false;
    }
  }
};
</script>