<template lang="pug">
section#container
  .user-header
    .user-panel
      .user-avatar
        .avatar(:style="{'background-image':`url(${user.imageUrl})`}")
      .user-info
        .user-item.user-fans {{user.fans}}粉丝
        .user-item.user-follow {{user.follow}}关注
        .user-item.user-nickname {{user.nickName}}
        .user-item.user-memberNo NNID：{{user.id}}
        p.user-descript {{user.signature}}
      nn-btn.user-editor(rund type="text" size="small") 编辑资料
  .tabs
    .tab-bars
      n-link.tab-bar(to="/channels/me/" exact) 个人中心
      n-link.tab-bar(to="/channels/me/community") 社区资料
      n-link.tab-bar(to="/channels/me/notice") 公告
      n-link.tab-bar(to="/channels/me/safe") 账户安全
      n-link.tab-bar(to="/channels/me/author") 账号授权
      n-link.tab-bar(to="/channels/me/member") 成员
      .tab-tools
        nn-btn(rund size="small") 充值
    .tab-body
      slot
</template>
<script>
import { mapState } from 'vuex'
import nnBtn from '~/components/wc/nnButton'

export default {
  name: 'PageHead',
  components: {
    [nnBtn.name]: nnBtn,
  },
  computed: {
    ...mapState(['user']),
  },
}
</script>

<style lang="scss" scoped>
section#container {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--background-primary);
  .user {
    &-header {
      height: 180px;
      width: 100%;
      padding-left: 20px;
      background-color: var(--background-secondary);
      // background-image: url('http://dummyimage.com/1200x130/000000');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: left center;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
    }
    &-editor {
      position: absolute;
      top: 15px;
      right: 15px;
    }
    &-panel {
      width: 50vw;
      display: flex;
    }
    &-avatar {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      .avatar {
        width: 90px;
        height: 90px;
      }
    }
    &-info {
      display: flex;
      flex-wrap: wrap;
    }
    &-item {
      flex: 1 1 50%;
      min-height: 32px;
      line-height: 16px;
      display: flex;
      align-items: flex-end;
    }
    &-nickname {
      font-weight: bold;
    }
    &-descript {
      font-size: small;
      color: lightgray;
      user-select: none;
    }
  }
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
}
</style>
