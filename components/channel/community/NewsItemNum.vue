<template lang="pug">
.news-item-num 
    .news-item-num-item
        i.bx.bx-search
        span {{nums.likes}}
    .news-item-num-item
        i.bx.bx-search
        span {{nums.comments}}
    .news-item-num-item
        i.bx.bx-search
        span {{nums.forwards}}
    .news-item-num-item
        i.bx.bx-search
        span {{nums.collects}}
</template>
<script>
export default {
  name: 'NewsItemNum',
  props: ['nums'],
  data() {
    return {}
  },
  methods: {},
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
    i {
      font-size: 14px;
    }
    span {
      position: relative;
      top: -2px;
      margin-left: 5px;
    }
  }
}
</style>
