<template lang="pug">
.news-item-comment-edit
    .news-item-comment-edit-photo
        img(src="~/assets/imgs/xbox@2x.jpg", alt="alt")
    NnEditer( :inline="false" :buttonText="buttonText" :placeholder="placeholder" :inputStyle="inputStyle" @submit="onSubmit" )
</template>
<script>
import NnEditer from '~/components/nnediter/NnEditer'
export default {
  name: 'NewsItemCommentEdit',
  data() {
    return {}
  },
  props: {
    buttonText: {
      type: String,
      default: '评论',
    },
    placeholder: {
      type: String,
      default: '说点什么吧...',
    },
    inputStyle: {
      type: Number,
      default: 0,
    },
  },
  components: {
    NnEditer,
  },
  methods: {
    onSubmit(inputContent) {
      // todo
      console.log(inputContent, 'inputContent')
    },
  },
}
</script>
<style lang="scss" scoped>
.news-item-comment-edit {
  border-bottom: 1px solid #282a30;
  padding-bottom: 20px;
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
