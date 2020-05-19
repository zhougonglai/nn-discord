<template lang="pug">
.tabs
  .tab-bars
    n-link.tab-bar(to="/me/" exact) 个人中心
    n-link.tab-bar(to="/me/notice") 公告
    n-link.tab-bar(to="/me/community") 社区资料
    n-link.tab-bar(to="/me/safe") 账户安全
    n-link.tab-bar(to="/me/author") 账号授权
    n-link.tab-bar(to="/me/member") 成员
    .tab-tools
      nn-btn(rund size="small" @click="show_Recharge=true") 充值
  .tab-body
    slot
  Recharge(v-click-outside="()=>{show_Recharge=false}" @close="()=>{show_Recharge=false}" v-if="show_Recharge")
</template>
<script>
import Recharge from '~/components/channel/Recharge'
export default {
  name: 'MeTabs',
  components: { [Recharge.name]: Recharge },
  data() {
    return {
      show_Recharge: false,
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.tab {
  &s {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  &-bars {
    height: 48px;
    padding: 0 20px;
    width: 100%;
    border-bottom: 1px solid #2f3136;
    display: flex;
  }
  &-bar {
    cursor: pointer;
    min-width: 68px;
    color: var(--interactive-hover);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    overflow: hidden;
    transition: color 0.2s linear;
    will-change: color;
    &::after {
      content: '';
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      height: 8px;
      border-radius: 4px 4px 0 0;
      width: 0;
      background-color: var(--vs-theme-color);
      transition: width 0.2s linear;
      will-change: width;
    }

    &.nuxt-link-active {
      color: var(--vs-theme-color);
      &::after {
        width: 56px;
      }
    }

    & + .tab-bar {
      margin-left: 20px;
    }
  }
  &-body {
    flex: 1;
    display: flex;
  }
  &-tools {
    flex: 1;
    justify-content: flex-end;
    display: flex;
    align-items: center;
  }
}
</style>
