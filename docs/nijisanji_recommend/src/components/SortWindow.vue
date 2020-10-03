<template>
  <div class="search">
    <div class="search-name">
      <input
        type="text"
        v-model="filter.name"
        placeholder="ライバー名を入力してください。"
      />
    </div>
    <div class="search-chara">
      <select v-model="sort.key">
        <option value="id">五十音順</option>
        <option value="song">歌</option>
        <option value="talk">トーク</option>
        <option value="chara">キャラクター性</option>
        <option value="game">ゲーム配信</option>
        <option value="voice">声</option>
      </select>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "SortWindow",
  computed: {
    filter: {
      get() {
        return this.$store.getters.filter;
      }
    },
    sort: {
      get() {
        return this.$store.getters.sort;
      }
    }
  },
  updated() {
    this.$store.commit("result");
  }
};
</script>

<style>
</style>