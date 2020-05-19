<template lang="pug">
.news-item-comment-edit
    .news-item-comment-edit-photo
        img(src="~/assets/imgs/xbox@2x.jpg", alt="alt")
    NnEditer
</template>
<script>
import NnEditer from '~/components/nnediter/NnEditer'
export default {
  name: 'NewsItemCommentEdit',
  data() {
    return {}
  },
  components: {
    NnEditer,
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.news-item-comment-edit {
  border-bottom: 1px solid #282a30;
  .news-item-comment-edit-photo {
    float: left;
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
}
</style>
