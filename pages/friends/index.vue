<style scoped lang="scss">
.page {
  background-color: #36393f;
  // padding: 100px 50px;
}
.demonstration {
  color: #dcddde;
}
</style>
<template>
  <div class="page spacer">
    <NnBanner href="//www.baidu.com" img="http://placekitten.com/1280/130"></NnBanner>
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
