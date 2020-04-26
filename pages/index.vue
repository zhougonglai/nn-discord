<template lang="pug">
main#app-page
  nav.sidebar
    .searchBar

    .scrollerWrap
      .list
        .list-item 好友
  .container
    section.container
      .tabBar 好友
      .toolbar 工具栏
    .tabBody 添加好友
</template>

<script>
export default {
  name: 'HomePage'
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
  }
}
</style>
