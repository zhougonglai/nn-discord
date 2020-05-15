<style scoped lang="scss">
.page {
  background-color: #36393f;
}
</style>
<template>
  <div class="page spacer flex column">
    <NnBanner href="//www.baidu.com" img="http://placekitten.com/1280/130"></NnBanner>
    <div class="flex-sub">好友资料</div>
  </div>
</template>
<script> 
import nnBanner from '~/components/wc/nnBanner';
export default {
  name: 'FriendSearch',
  components: {
    [nnBanner.name]:nnBanner
  },
 
}
</script>
