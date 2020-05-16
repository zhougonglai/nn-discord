<template lang="pug">
.news-item-box
    .news-item-box-left
        p {{ item.title }}
        span {{ item.content }}
    .news-item-box-right
        img(:src="item.thumb")
</template>
<script>
export default {
  name: 'NewsItemBox',
  props: ['item'],
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.news-item-box {
  display: flex;
  padding-top: 15px;
  .news-item-box-left {
    flex-grow: 1;
    background: rgba(68, 71, 78, 1);
    border-radius: 4px 0 0 4px;
    padding: 10px 20px;
    p {
      font-size: 14px;
      font-weight: bold;
      line-height: 24px;
      height: 24px;
      margin: 0;
      color: #fff;
      overflow: hidden;
    }
    span {
      display: block;
      line-height: 18px;
      height: 36px;
      color: rgba(220, 221, 222, 1);
      font-size: 12px;
      overflow: hidden;
    }
  }
  .news-item-box-right {
    width: 138px;
    height: 78px;
    img {
      width: 138px;
      height: 78px;
      border-radius: 0px 4px 4px 0px;
    }
  }
}
</style>
