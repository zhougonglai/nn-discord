<template lang="pug">
.news-item-comment
    .comment-edit
        NewsItemCommentEdit
    .comment-all
        NewsItemCommentItem
        NewsItemCommentItem
        NewsItemCommentItem
        NewsItemCommentItem
        NewsItemCommentItem
        NewsItemCommentItem
        NewsItemCommentItem
        NewsItemCommentItem
        .comment-all-length 共15条回复 &gt;
    .comment-all-more 查看更多 &gt;
</template>
<script>
import NewsItemCommentItem from '~/components/channel/community/NewsItemCommentItem'
import NewsItemCommentEdit from '~/components/channel/community/NewsItemCommentEdit'
export default {
  name: 'NewsItemComment',
  data() {
    return {}
  },
  components: {
    NewsItemCommentItem,
    NewsItemCommentEdit,
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.news-item-comment {
  background: rgba(34, 36, 40, 1);
  border: 1px solid rgba(29, 30, 30, 1);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  padding: 15px;
  margin-top: 20px;
  position: relative;
  max-height: 460px;
  overflow-y: auto;
  .comment-all {
    padding-left: 30px;
  }
  &::after {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    background: rgba(34, 36, 40, 1);
    border: 1px solid rgba(29, 30, 30, 1);
    top: -5px;
    left: 70px;
    transform: rotate(45deg);
  }
  .comment-all-length,
  .comment-all-more {
    color: rgba(114, 118, 125, 1);
    font-size: 12px;
    padding-top: 10px;
    cursor: pointer;
  }
  .comment-all-more {
    text-align: center;
  }
}
</style>
