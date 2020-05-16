<template lang="pug">
    .community-main
        .community-main-left
            HotNews
            NewsItem( v-for="item in newsList" :key="item.sourceId" :item="item" )
        .community-main-right 热门社区
            
</template>
<script>
import { mapState } from 'vuex'
import HotNews from '~/components/channel/community/HotNews'
import NewsItem from '~/components/channel/community/NewsItem'
export default {
  name: 'CommunityMain',
  components: {
    HotNews,
    NewsItem,
  },
  computed: {
    ...mapState('community', ['newsList']),
  },
}
</script>
<style lang="scss" scoped>
.community-main {
  display: flex;
  .community-main-left {
    flex-grow: 1;
    flex-shrink: 222;
    background: #36393f;
    padding: 20px;
    height: calc(100vh - 248px);
    overflow-y: auto;
    ul {
      height: 90px;
      overflow-y: auto;
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        i {
          font-size: 14px;
          vertical-align: middle;
        }
        a {
          color: #fff;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .community-main-right {
    width: 254px;
  }
}
</style>
