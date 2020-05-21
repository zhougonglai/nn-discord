<template lang="pug">
.news-item-num-main
  .news-item-num 
      .news-item-num-item
          i.iconfont.iconzan
          span {{nums.likes}}
      .news-item-num-item( @click="onComment" )
          i.iconfont.iconpinglun
          span {{nums.comments}}
      .news-item-num-item( @click="onForwards" )
          i.iconfont.iconsharearticle
          span {{nums.forwards}}
      .news-item-num-item
          i.iconfont.iconChannelcollection
          span {{nums.collects}}
  .news-item-comment
      NewsItemComment( v-if="commentShow" )
  CommunityDialog( title="转发动态" :visible.sync="forwardsFlag" width="30%" :close-on-click-modal="false"  )
    NnEditer( :buttonText="'转发'" :placeholder="'转发动态'" :inputClass="'content2'" )
      NewsItemTranspondList
</template>
<script>
import NewsItemComment from '~/components/channel/community/NewsItemComment'
import CommunityDialog from '~/components/channel/community/CommunityDialog'
import NewsItemTranspondList from '~/components/channel/community/NewsItemTranspondList'
import NnEditer from '~/components/nnediter/NnEditer'
export default {
  name: 'NewsItemNum',
  components: {
    NewsItemComment,
    CommunityDialog,
    NnEditer,
    NewsItemTranspondList,
  },
  props: ['nums'],
  data() {
    return {
      commentShow: false,
      forwardsFlag: false,
    }
  },
  methods: {
    onComment() {
      this.commentShow = !this.commentShow
    },
    onForwards() {
      this.forwardsFlag = true
    },
    handleClose() {
      console.log('xxxx')
    },
  },
}
</script>
<style lang="scss" scoped>
.news-item-num {
  display: flex;
  padding-top: 20px;
  color: rgba(149, 153, 159, 1);
  font-size: 12px;
  .news-item-num-item {
    margin-right: 30px;
    cursor: pointer;
    i {
      font-size: 14px;
    }
    span {
      margin-left: 5px;
    }
  }
}
</style>
