<template lang="pug">
.community-news-item
    .news-photo
        img( :src="item.frontCover" )
    .news-main
        .news-main-header
            .news-main-header-left
                p
                    b 守望先锋
                    SvgIcon( icon-class="iconofficial" )
                    span 守望先锋官方
                p
                    span {{ formateTime(item.createAt) }}
                    span 来自NN客户端编辑
            .news-main-header-right
                .flow +关注
                i.iconfont.iconxiala
        .news-main-body( v-if="item.forwardType === 1" )
            NewsItemFront( :num="20" :content="item.forwardComment" )
            NewsItemBox( :item="{ title: item.title, content: item.content, thumb: item.thumb }" )
        .news-main-body( v-if="item.forwardType === 2" )
            NewsItemFront( :num="20" :content="item.forwardComment" )
              b // EDG官方后援
              SvgIcon( icon-class="iconofficial" )
              b ：给力！！！
            NewsItemTranspond( :item="{ title: item.title, content: item.content, thumb: item.thumb, forwardComment: item.forwardComment }" )
        .news-main-bottom
            NewsItemNum( :nums="{ likes: item.likes, comments: item.comments, forwards: item.forwards, collects: item.collects }" )
</template>
<script>
/* eslint-disable */
import { mapState } from 'vuex'
import NewsItemFront from '~/components/channel/community/NewsItemFront'
import NewsItemBox from '~/components/channel/community/NewsItemBox'
import NewsItemTranspond from '~/components/channel/community/NewsItemTranspond'
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
    NewsItemTranspond,
  },
  methods: {
    formateTime(time) {
      time = new Date(time).getTime()
      const date_now = new Date()
      const date_time = new Date(time)
      const distance = date_now.getTime() - time

      const days = parseInt(distance / (1000 * 60 * 60 * 24))
      let d_hours = date_time.getHours()
      if (d_hours < 10) {
        d_hours = '0' + d_hours
      }
      let d_minutes = date_time.getMinutes()
      if (d_minutes < 10) {
        d_minutes = '0' + d_minutes
      }
      if (days == 1) {
        return '昨天' + d_hours + ':' + d_minutes
      } else if (days == 2) {
        return days + '天前' + d_hours + ':' + d_minutes
      } else if (days >= 2) {
        const year = date_time.getFullYear()
        let month = date_time.getMonth() + 1
        if (month < 10) {
          month = '0' + month
        }
        let day = date_time.getDate()
        if (day < 10) {
          day = '0' + day
        }
        if (date_now.getFullYear() == year) {
          return month + '月' + day + '日' + d_hours + ':' + d_minutes
        } else {
          return (
            year + '年' + month + '月' + day + '日' + d_hours + ':' + d_minutes
          )
        }
      }

      const hours = parseInt(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      if (hours > 0) {
        return hours + '小时前'
      }

      const minutes = parseInt((distance % (1000 * 60 * 60)) / (1000 * 60))
      if (minutes > 0) {
        return minutes + '分钟前'
      }
      return '刚刚'
    },
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
          .icon {
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
          font-size: 10px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
