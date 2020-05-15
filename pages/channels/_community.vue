<template lang="pug">
.channel 
  .channel-left
    HeaderInfo
  .channel-right 内容区域
    nuxt-child
</template>
<script>
import HeaderInfo from '~/components/channel/community/HeaderInfo'
export default {
  name: 'Channel',
  components: {
    HeaderInfo,
  },
}
</script>
<style lang="scss" scoped>
.channel {
  background: #2f3136;
  flex-grow: 1;
  display: flex;
  .channel-left {
    width: 240px;
  }
}
</style>
