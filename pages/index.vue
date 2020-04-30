<template lang="pug">
main#app-page
  vs-dialog(width="300px" blur v-model="search.status")
    template(#header)
      h4.not-margin 搜索服务器.频道或私信
    .con-content
      vs-input(v-model="search.keyword" shadow placeholder="想要去哪里?")
        template(#icon)
          i.bx.bx-search-alt
  nav.sidebar
    .searchBar
      button.tap(@click="search.status = true") 寻找或开始新的对话
    .scrollerWrap
      .scroller
        .list.padding
          .list-item(v-for="friend in friends" :key="friend.id")
            .list-item-pre
              i.bx.bxs-face
            .list-item-content {{friend.label}}
        svg.empty(width="184" height="428" viewBox="0 0 184 428")
          rect(x="40" y="6" width="144" height="20" rx="10")
          circle(cx="16" cy="16" r="16")
          rect(x="40" y="50" width="144" height="20" rx="10" opacity="0.9")
          circle(cx="16" cy="60" r="16" opacity="0.9")
          rect(x="40" y="94" width="144" height="20" rx="10" opacity="0.8")
          circle(cx="16" cy="104" r="16" opacity="0.8")
          rect(x="40" y="138" width="144" height="20" rx="10" opacity="0.7")
          circle(cx="16" cy="148" r="16" opacity="0.7")
          rect(x="40" y="182" width="144" height="20" rx="10" opacity="0.6")
          circle(cx="16" cy="192" r="16" opacity="0.6")
          rect(x="40" y="226" width="144" height="20" rx="10" opacity="0.5")
          circle(cx="16" cy="236" r="16" opacity="0.5")
          rect(x="40" y="270" width="144" height="20" rx="10" opacity="0.4")
          circle(cx="16" cy="280" r="16" opacity="0.4")
          rect(x="40" y="314" width="144" height="20" rx="10" opacity="0.3")
          circle(cx="16" cy="324" r="16" opacity="0.3")
          rect(x="40" y="358" width="144" height="20" rx="10" opacity="0.2")
          circle(cx="16" cy="368" r="16" opacity="0.2")
          rect(x="40" y="402" width="144" height="20" rx="10" opacity="0.1")
          circle(cx="16" cy="412" r="16" opacity="0.1")
    section.panels
      vs-avatar(badge badge-color="success")
        i.bx.bx-user
      .nameTag
        .usernameContainer 码上有媳妇
        small.subtext #5983
      .tools
        i.bx.bxs-microphone
        i.bx.bx-headphone
        i.bx.bxs-cog
  section.container
    .toolbar
      .title
        i.bx.bx-user
        | 好友
      .divier
      .tabBar
        .tab 在线
      .tools 工具栏
    .tabBody 添加好友
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      search: {
        status: false,
        keyword: ''
      },
      friends: [
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          label: '好友',
          type: 'link'
        }
      ]
    }
  },
  methods: {
    openSearch() {}
  }
}
</script>
<style lang="scss" scoped>
main#app-page {
  position: absolute;
  left: 72px;
  top: 0;
  right: 0;
  bottom: 0;
  background: var(--vs-theme-bg);
  display: flex;
  align-items: stretch;
  flex: 1 1 auto;
  justify-content: flex-start;
  nav.sidebar {
    width: 240px;
    background: var(--background-secondary);
    display: flex;
    flex-direction: column;
    .searchBar {
      padding: 0 10px;
      height: 48px;
      z-index: 2;
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--elevation-low);
      button {
        text-align: left;
      }
    }
    .scrollerWrap {
      flex: 1 1 auto;
      height: 100%;
      display: flex;
      .scroller {
        flex: 1 1 auto;
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      svg.empty {
        fill: var(--background-primary);
        padding: 16px 0;
      }
    }

    section.panels {
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      margin-bottom: 1px;

      .nameTag {
        flex: 1;
        margin: 0 8px;
      }
      .tools {
        i {
          cursor: pointer;
          margin-right: 8px;
          font-size: 20px;
        }
      }
    }
  }
  section.container {
    flex: 1;
    .toolbar {
      display: flex;
      padding: 0 8px;
      font-size: 16px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      .tabBar {
        flex: 1;
      }
    }
  }
}

.divier {
  width: 1px;
  height: 20px;
  margin: 0 8px;
  background: darkgray;
}
.list {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  &.padding {
    padding: 16px;
  }
  &-item {
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    border-radius: 4px;
    cursor: pointer;

    &.active,
    &:hover,
    &:active,
    &:focus {
      background-color: var(--background-modifier-hover);
    }

    &-pre {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-content {
      flex: 1;
      font-weight: bold;
    }
  }
}
</style>
