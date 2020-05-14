<style scoped lang="scss">
</style>
<template>
  <div class="spacer flex">
    <div class="left">
      <div>
        <n-link :to="{name: 'channels-me'}">社区</n-link>
      </div>
      <div>
        <n-link :to="{name: 'friends'}">添加好友</n-link>
      </div>
      <div>
        <n-link :to="{name: 'friends-pass'}">好友申请</n-link>
      </div>
      <div>
        <n-link :to="{name: 'friends-chat-id',params:{id:11111}}">私聊1</n-link>
      </div>
      <div>
        <n-link :to="'/friends/chat/222'">私聊2</n-link>
      </div>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>

export default {
  name:"friends",
  
  mounted() {
    //console.log();
  },
  computed: {
    // test() {
    //   return 0;
    // }
  },
  data() {
    return {
//id:1
};
  },
methods:{
    // test() {
    //   return 0;
    // }
}
};
</script>