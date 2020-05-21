<template lang="pug">
.publish-header
    .publish-header-title {{titleText}}
        n-link( :to="to" )
            .publish-header-title-back {{btnText}}
                .publish-header-title-back-icon1
                .publish-header-title-back-icon2
</template>
<script>
export default {
  name: 'CommunityPublicHeader',
  props: {
    btnText: {
      type: String,
      default: '返回首页',
    },
    titleText: {
      type: String,
      default: '编辑文章',
    },
    to: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss">
.publish-header-title {
  text-align: center;
  position: relative;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  color: rgba(220, 221, 222, 1);
  border-bottom: 1px solid #2f3136;
  .publish-header-title-back {
    position: absolute;
    cursor: pointer;
    height: 24px;
    line-height: 24px;
    top: 12px;
    left: 12px;
    text-align: right;
    padding-right: 8px;
    padding-left: 15px;
    font-size: 10px;
    color: rgba(220, 221, 222, 1);
    background: rgba(72, 75, 83, 1);
    .publish-header-title-back-icon1 {
      position: absolute;
      width: 0;
      height: 0;
      border: 12px solid transparent;
      border-right-color: rgba(72, 75, 83, 1);
      top: 0;
      left: -24px;
    }
    .publish-header-title-back-icon2 {
      position: absolute;
      width: 0;
      height: 0;
      border: 4px solid transparent;
      border-right-color: #7a7d84;
      top: 8px;
      left: -2px;
    }
  }
}
</style>
