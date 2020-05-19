<template lang="pug">
.news-item-num-main
  .news-item-num 
      .news-item-num-item
          i.iconfont.iconzan
          span {{nums.likes}}
      .news-item-num-item( @click="onComment" )
          i.iconfont.iconpinglun
          span {{nums.comments}}
      .news-item-num-item
          i.iconfont.iconsharearticle
          span {{nums.forwards}}
      .news-item-num-item
          i.iconfont.iconChannelcollection
          span {{nums.collects}}
  .news-item-comment
      NewsItemComment( v-if="commentShow" )
</template>
<script>
import NewsItemComment from '~/components/channel/community/NewsItemComment'
export default {
  name: 'NewsItemNum',
  props: ['nums'],
  data() {
    return {
      commentShow: true,
    }
  },
  components: {
    NewsItemComment,
  },
  methods: {
    onComment() {
      this.commentShow = !this.commentShow
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
