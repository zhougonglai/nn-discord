<template lang="pug">
.community-article
  .community-article-left
    CommunityPublicHeader( :btnText="'返回'" :titleText="''" :to="'/channels/FIFA18'" )
    .community-article-header
      .community-article-header-icon
        img( :src="frontCover" )
      .community-article-header-left
          p
              b 守望先锋
              SvgIcon( icon-class="iconofficial" )
              span 守望先锋官方
          p
              span {{ formateTime(item.createAt) }}
              span 来自NN客户端编辑
      .community-article-header-right
          el-button( round size="small" type="primary") + 关注
    .community-article-content
      .community-article-content-img
        img( :src="frontCover" )
      .community-article-content-title 换个视角世界依旧精彩：《我的世界：底下城》剁手前瞻的 一级标题
      .community-article-content-body
        p 针对黑龙江省建三江垦区被虐打女童于某茜的伤情，4月29日，哈尔滨市儿童医院相关科室工作人员告诉澎湃新闻，受伤女童今天早上转到该院治疗，“现在还在ICU，状况不好，特别重，有生命危险。” 该工作人员称，现在哈尔滨市儿童医院已组织全院专家进行会诊，对该受伤女童进行全力救治。 该名工作人员透露，目前医院所在的辖区派出所也在医院了解情况，该案件处于侦查阶段。小女孩在当地医院救治时，接诊医护人员已经报警。
    NewsItemNum( :nums="{ likes: item.likes, comments: item.comments, forwards: item.forwards, collects: item.collects }" )
  .community-article-right
    CommunityPublicTitle( :title="'热门社区'" :icon="'iconHotcommunities'" :to="'/channels/FIFA18'" )
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicTitle( :title="'名人堂'" :icon="'iconHalloffame'" :to="'/channels/FIFA18'" )
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
    CommunityPublicIVessel
</template>
<script>
import CommunityPublicTitle from '~/components/channel/community/CommunityPublicTitle'
import CommunityPublicIVessel from '~/components/channel/community/CommunityPublicIVessel'
import CommunityPublicHeader from '~/components/channel/community/CommunityPublicHeader'
import NewsItem from '~/components/channel/community/NewsItem'
import NewsItemNum from '~/components/channel/community/NewsItemNum'
import toolboxMixin from '~/mixins/toolboxMixin'
export default {
  name: 'CommunityNewsArticle',
  components: {
    CommunityPublicTitle,
    CommunityPublicIVessel,
    CommunityPublicHeader,
    NewsItem,
    NewsItemNum,
  },
  mixins: [toolboxMixin],
  data() {
    return {
      frontCover: require('~/assets/imgs/xbox@2x.jpg'),
      item: {
        sourceId: '1112233', // 原文id
        frontCover: require('~/assets/imgs/xbox@2x.jpg'), // 封面url
        title: 'nn新版本6月1号上线与大家见面',
        thumb: require('~/assets/imgs/user_bg@2x.png'), // 缩列图
        content:
          '2020年KPL夏季赛选手阵容确定！5月1日晚上20:30， NN平台EDG粉丝社区直播大厅，线上粉丝见面会...', // 内容
        to: '/channels/FIFA18/article/10000',
        likes: 189, // 点赞数
        comments: 210, // 评论数
        forwards: 319, // 转发数
        collects: 21, // 收藏数
        forwardType: 1, // 发布来源, 默认0：草稿，1：官方  2：转发
        createAt: '2020-05-16 17:00', // 时间
        forwardComment:
          '11小伙伴蓝儿参加#7天赚钱训练营# 拿到第一名🥇了[赞]，好开心😁，为她骄傲！要不断的学习成长，4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00...', // 转发动态
      },
    }
  },
}
</script>
<style lang="scss">
.community-article {
  display: flex;
  .community-article-left {
    flex-grow: 1;
    flex-shrink: 222;
    background: #36393f;
    padding: 0 20px 20px;
    position: relative;
    height: calc(100vh - 248px);
    overflow-y: auto;
  }
  .community-article-right {
    width: 254px;
    padding: 15px 15px;
    height: calc(100vh - 248px);
    overflow-y: auto;
  }
}
.community-article-header {
  display: flex;
  padding-top: 28px;
  .community-article-header-icon {
    width: 34px;
    height: 34px;
    margin-right: 5px;
    img {
      width: 34px;
      height: 34px;
      border-radius: 50%;
    }
  }
  .community-article-header-left {
    flex-grow: 1;
    p {
      margin: 0;
      b {
        font-size: 14px;
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
  .community-article-header-right {
  }
}
.community-article-content {
  padding-top: 28px;
  .community-article-content-img {
    text-align: center;
    img {
      max-width: 100%;
    }
  }
  .community-article-content-title {
    font-size: 20px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
    padding-top: 20px;
  }
  .community-article-content-body {
    font-size: 14px;
    line-height: 20px;
    color: rgba(220, 221, 222, 1);
  }
}
</style>
