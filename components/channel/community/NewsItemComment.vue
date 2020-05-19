<template lang="pug">
.news-item-comment
    .news-item-comment-main
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
  margin-top: 20px;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    display: block;
    background: rgba(34, 36, 40, 1);
    border-top: 5px transparent dashed;
    border-left: 5px transparent dashed;
    border-bottom: 5px transparent dashed;
    border-right: 5px solid rgba(34, 36, 40, 1);
    top: -5px;
    left: 75px;
    transform: rotate(45deg);
  }
  .news-item-comment-main {
    overflow-y: auto;
    max-height: 460px;
    padding: 15px;
  }
  .comment-all {
    padding-left: 30px;
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
