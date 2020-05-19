<template lang="pug">
.news-forward-comment
    .news-forward-comment-p {{ font }}
      <slot></slot>
    span( v-if="show" @click="all" ) 查看全部内容
</template>
<script>
export default {
  name: 'NewsItemFront',
  props: ['content', 'num'],
  data() {
    return {
      font: '',
      show: true,
    }
  },
  watch: {
    content: {
      immediate: true,
      handler() {
        if (this.content.length > this.num) {
          this.font = this.content.substr(0, this.num) + '...'
          return
        }
        this.all()
      },
    },
  },
  methods: {
    all() {
      this.font = this.content
      this.show = false
    },
  },
}
</script>
<style lang="scss" scoped>
.news-forward-comment {
  font-size: 14px;
  color: rgba(220, 221, 222, 1);
  line-height: 24px;
  margin-top: 10px;
  p {
    padding: 0;
    margin: 0 0 10px;
  }
  span {
    font-size: 14px;
    margin-top: 10px;
    color: rgba(101, 178, 255, 1);
    display: inline-block;
    cursor: pointer;
  }
  b {
    font-style: normal;
    color: rgba(114, 118, 125, 1);
  }
}
</style>
