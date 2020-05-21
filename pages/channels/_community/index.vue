<template lang="pug">
    .community-main
        .community-main-left
          .community-main-left-main
            HotNews
            .community-users-list( v-infinite-scroll="load" :class="'infinite-list'" )
              NewsItem( v-for="(item, i) in newsList" :key="i" :item="item" )
              .community-users-list-status
                .community-users-list-loading( v-if="getNewsStatus.loading" ) 
                  i.iconfont.iconloading.rotate-icon
                  span 正在加载中，请稍后...
                .community-users-list-error( v-if="getNewsStatus.error" ) 
                  i.iconfont.iconFailureprompt
                  span 加载失败，请点击重试...
                  i.iconfont.iconretry
                .community-users-list-none( v-if="getNewsStatus.none" ) 
                  span 已经是最后一条内容拉...
          .community-add-news-btn
            n-link( :to="'/channels/FIFA18/publish'" )
              i.iconfont.iconedit        
        .community-main-right 
          CommunityPublicTitle( :title="'热门社区'" :icon="'iconHotcommunities'" :to="'/channels/FIFA18'" )
          CommunityPublicIVessel
          CommunityPublicIVessel
          CommunityPublicIVessel
          CommunityPublicIVessel
          CommunityPublicTitle( :title="'名人堂'" :icon="'iconHalloffame'" :to="'/channels/FIFA18'" )
          CommunityPublicIVessel
          CommunityPublicIVessel
          CommunityPublicIVessel
          CommunityPublicIVessel
            
</template>
<script>
import { mapState } from 'vuex'
import HotNews from '~/components/channel/community/HotNews'
import NewsItem from '~/components/channel/community/NewsItem'
import CommunityPublicTitle from '~/components/channel/community/CommunityPublicTitle'
import CommunityPublicIVessel from '~/components/channel/community/CommunityPublicIVessel'
export default {
  name: 'CommunityMain',
  components: {
    HotNews,
    NewsItem,
    CommunityPublicTitle,
    CommunityPublicIVessel,
  },
  computed: {
    ...mapState('community', ['newsList', 'getNewsStatus']),
  },
  methods: {
    load() {
      this.$store.dispatch('community/getNewsList')
    },
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
    position: relative;
    height: calc(100vh - 248px);
    .community-main-left-main {
      height: calc(100vh - 248px);
      overflow-y: auto;
      padding: 20px;
    }
    .community-add-news-btn {
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      border-radius: 50%;
      background: #dcddde;
      position: absolute;
      bottom: 40px;
      right: 20px;
      color: #202225;
      cursor: pointer;
      a {
        color: #202225;
        display: block;
        height: 100%;
        width: 100%;
      }
      i {
        font-size: 32px;
      }
    }
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
    .community-users-list-status {
      text-align: center;
      font-size: 14px;
      color: rgba(114, 118, 125, 1);
      div {
        display: inline-block;
        width: 260px;
        height: 32px;
        line-height: 32px;
        background: rgba(47, 49, 54, 1);
        border-radius: 4px;
        span {
          margin: 0 5px;
        }
        .rotate-icon {
          animation: turn 1.5s linear infinite;
          display: inline-block;
        }
      }
    }
  }
  .community-main-right {
    width: 254px;
    padding: 15px 15px;
    height: calc(100vh - 248px);
    overflow-y: auto;
  }
}
@keyframes turn {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
