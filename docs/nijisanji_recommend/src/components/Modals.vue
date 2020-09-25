<template>
<div class="modal">
    <div v-for="item in modalLivers" :key="item.id" class="individual">
        <div>{{item.name}}</div>
        <div><img :src="item.pic"></div>
    </div>
</div>
</template>

<script>
import store from '../store'
export default {
    computed: {
        modalLivers() {
            return this.$store.getters.currentLivers;
        }
    }
}
</script>

<style scoped>
img {
    width: 100px;
}
</style>