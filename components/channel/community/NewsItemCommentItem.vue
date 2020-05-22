<template lang="pug">
.comment-item-template
    .comment-item
        .comment-item-left
            img(src="~/assets/imgs/xbox@2x.jpg", alt="alt")
        .comment-item-right
            .comment-item-info
                span AtlasPrime：
                b 有点相像让你点，大部分都是见后范文芳看看就知道了，不会很难。
            .comment-item-tool
                span 5分钟
                em 
                    i.iconfont.iconzan
                    span 20
                b( @click="onReply" :class="{ cur: show }" ) 回复
    .comment-item-editer( v-if="show" )
        NewsItemCommentEdit( :buttonText="'回复'" :placeholder="'回复 Leisefw：'" :inputClass="'content1'")
</template>
<script>
import NewsItemCommentEdit from '~/components/channel/community/NewsItemCommentEdit'
export default {
  name: 'NewsItemCommentItem',
  components: {
    NewsItemCommentEdit,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    onReply() {
      this.show = !this.show
    },
  },
}
</script>
<style lang="scss" scoped>
.comment-item {
  border-bottom: 1px solid #282a30;
  display: flex;
  padding-top: 18px;
  clear: both;
  .comment-item-left {
    width: 34px;
    height: 24px;
    padding-right: 10px;
    img {
      width: 24px;
      height: 24px;
      background: rgba(0, 0, 0, 0);
      border-radius: 50%;
    }
  }
  .comment-item-right {
    color: #dcddde;
    font-size: 14px;
    width: 100%;
    .comment-item-info {
      span {
        color: rgba(114, 118, 125, 1);
      }
      b {
        font-weight: normal;
      }
    }
    .comment-item-tool {
      color: #72767d;
      padding: 15px 0 18px;
      span {
      }
      b {
        font-weight: normal;
        color: #9fa4ab;
        float: right;
        cursor: pointer;
        margin-right: 24px;
      }
      .cur {
        color: #dcddde;
      }
      em {
        float: right;
        font-style: normal;
        position: relative;
        top: -2px;
        cursor: pointer;
        span {
          margin-left: 5px;
        }
      }
    }
  }
}
.comment-item-editer {
  clear: both;
  background: rgba(38, 39, 43, 1);
  border-radius: 5px;
  padding: 10px;
  margin-top: -1px;
}
</style>
