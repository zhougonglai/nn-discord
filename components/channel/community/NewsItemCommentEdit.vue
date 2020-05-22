<template lang="pug">
.news-item-comment-edit
    .news-item-comment-edit-photo
        img(src="~/assets/imgs/xbox@2x.jpg", alt="alt")
    NnEditer( :inline="false" :buttonText="buttonText" :placeholder="placeholder" :inputClass="inputClass" @submit="onSubmit" )
</template>
<script>
import NnEditer from '~/components/nnediter/NnEditer'
export default {
  name: 'NewsItemCommentEdit',
  components: {
    NnEditer,
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
    inputClass: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {}
  },
  methods: {
    onSubmit(inputContent) {
      // todo
      // console.log(inputContent, 'inputContent')
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
