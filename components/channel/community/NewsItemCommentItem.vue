<template lang="pug">
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
            b 回复
</template>
<script>
export default {
  name: 'NewsItemCommentItem',
  data() {
    return {}
  },
  methods: {},
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
</style>
