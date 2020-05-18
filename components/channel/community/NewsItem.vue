<template lang="pug">
.community-news-item
    .news-photo
        img( :src="item.frontCover" )
    .news-main
        .news-main-header
            .news-main-header-left
                p
                    b 守望先锋
                    svg-icon( icon-class="iconofficial" )
                    span 守望先锋官方
                p 
                    span {{ item.createAt }}
                    span 来自NN客户端编辑
            .news-main-header-right
                .flow +关注
                i.bx.bx-search
        .news-main-body 
            NewsItemFront( :num="200" :content="item.forwardComment" )
            NewsItemBox( :item="{ title: item.title, content: item.content, thumb: item.thumb }" )
        .news-main-bottom
            NewsItemNum( :nums="{ likes: item.likes, comments: item.comments, forwards: item.forwards, collects: item.collects }" )
</template>
<script>
import { mapState } from 'vuex'
import NewsItemFront from '~/components/channel/community/NewsItemFront'
import NewsItemBox from '~/components/channel/community/NewsItemBox'
import NewsItemNum from '~/components/channel/community/NewsItemNum'
export default {
  name: 'CommunityNewsItem',
  props: ['item'],
  computed: {
    ...mapState('community', ['hotNews']),
  },
  components: {
    NewsItemFront,
    NewsItemBox,
    NewsItemNum,
  },
}
</script>
<style lang="scss" scoped>
.community-news-item {
  display: flex;
  margin-top: 20px;
  padding-bottom: 10px;
  .news-photo {
    width: 54px;
    height: 54px;
    img {
      width: 54px;
      height: 54px;
      border-radius: 50%;
    }
  }
  .news-main {
    flex-grow: 1;
    padding-left: 10px;
    .news-main-header {
      display: flex;
      height: 54px;
      padding-top: 2px;
      .news-main-header-left {
        flex-grow: 1;
        p {
          padding: 5px 0 0;
          margin: 0;
          b {
            font-size: 16px;
            color: rgba(220, 221, 222, 1);
          }
          i {
            margin: 0 5px;
          }
          .iconofficial {
            color: #068bff;
          }
          span {
            font-size: 12px;
            color: rgba(114, 118, 125, 1);
            margin-right: 10px;
          }
        }
      }
      .news-main-header-right {
        display: flex;
        width: 100px;
        line-height: 54px;
        padding-top: 14px;
        .flow {
          display: inline-block;
          width: 60px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          color: #dcddde;
          border: 1px solid #53565d;
          border-radius: 5px;
          margin-right: 17px;
          font-size: 14px;
        }
        .flowok {
          color: #72767d;
          border: 1px solid #72767d;
          font-size: 14px;
        }
        i {
          display: inline-block;
          color: #72767d;
          font-size: 16px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
