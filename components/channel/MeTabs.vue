<template lang="pug">
.tabs
  .tab-bars
    n-link.tab-bar(to="/me/" exact) 个人中心
    n-link.tab-bar(to="/me/community") 社区资料
    n-link.tab-bar(to="/me/notice") 公告
    n-link.tab-bar(to="/me/safe") 账户安全
    n-link.tab-bar(to="/me/author") 账号授权
    n-link.tab-bar(to="/me/member") 成员
    .tab-tools
      nn-btn(rund size="small") 充值
  .tab-body
    slot
</template>
<script>
export default {
  name: 'MeTabs',
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
    box-shadow: 0 1px 4px 2px var(--background-secondary);
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
