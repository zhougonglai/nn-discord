<template lang="pug">
.channel 
  .channel-item
    .channel-left
      HeaderInfo
    .channel-center
      .channel-banner
        img( :src="channelBanner" )
  .channel-item
    .channel-left
      .community-search
        Search
      .community-nav
        Nav( v-for="(item, index) in mainNav" :key="index"  :nav='item' )
    .channel-center
      nuxt-child
</template>
<script>
import { mapState } from 'vuex'
import HeaderInfo from '~/components/channel/community/HeaderInfo'
import Search from '~/components/channel/community/Search'
import Nav from '~/components/channel/community/Nav'
export default {
  name: 'Community',
  components: {
    HeaderInfo,
    Search,
    Nav,
  },
  computed: {
    ...mapState('community', ['mainNav', 'channelBanner']),
  },
}
</script>
<style lang="scss" scoped>
.channel {
  background: #2f3136;
  flex-shrink: 222;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  .channel-item {
    display: flex;
    width: 100%;
  }
  .channel-left {
    width: 240px;
  }
  .community-search {
    padding: 20px 0;
  }
  .community-nav {
    padding: 0 10px;
  }
  .channel-center {
    flex-grow: 1;
    flex-shrink: 222;
    .channel-banner {
      height: 136px;
      text-align: center;
      img {
        height: 136px;
      }
    }
  }
}
</style>
