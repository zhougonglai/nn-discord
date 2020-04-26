<template lang="pug">
#app
  nav#app-nav(aria-label="侧边栏")
    template(v-for="nav in navs")
      .nav-item(
        v-if="nav.type === 'link'"
        :key="nav.id"
        :class="[{active: active === nav.id}]"
        @click="active = nav.id")
          .icon-button
            i.bx(:class="[nav.icon]")
      .divier(v-else-if="nav.type === 'divier'" :key="nav.id")
      .nav-item(
        v-if="nav.type === 'button'"
        :key="nav.id"
        :class="[{active: active === nav.id}]"
        @click="active = nav.id" )
          .icon-button
            i.bx(:class="[nav.icon]")
          //-  :color="active === nav.id ? 'var(--vs-theme-bg)' : 'rgb(var(--vs-primary))'"
  nuxt
</template>
<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      active: '',
      homeNav: [
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          type: 'link',
          label: '我的主页',
          icon: 'bx-home-circle',
          class: 'me'
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          type: 'divier'
        }
      ],
      helpNav: [
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          type: 'button',
          label: '添加服务器',
          icon: 'bx-plus'
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          type: 'link',
          label: '查找服务器',
          icon: 'bx-search'
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          type: 'divier'
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          type: 'button',
          label: '下载APP',
          icon: 'bx-download'
        }
      ]
    }
  },
  computed: {
    navs() {
      return this.homeNav.concat(this.helpNav)
    }
  },
  created() {
    this.active = this.navs[0].id
  }
}
</script>
<style lang="scss" scoped>
nav#app-nav {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--vs-theme-layout);
}
.nav-item {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 0;
    border-radius: 0 4px 4px 0;
    margin-left: -4px;
    background: var(--vs-theme-color);
    contain: layout size;
    transition: height 0.2s linear;
  }
  &.active {
    &::before {
      height: 40px;
    }
    .icon-button {
      border-radius: 8px;
      background-color: rgba(var(--vs-primary), 1);
    }
    i.bx {
      color: var(--vs-theme-bg) !important;
    }
  }
  &:not(.active):hover,
  &:not(.active):active,
  &:not(.active):focus {
    &::before {
      height: 12px;
    }
    .icon-button {
      border-radius: 8px;
      background-color: rgba(var(--vs-primary), 1);
    }
    i.bx {
      color: var(--vs-theme-bg);
    }
  }
  .icon-button {
    cursor: pointer;
    width: 48px;
    height: 48px;
    background: var(--vs-theme-bg2);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 48px;
    transition: border-radius 325ms linear, background-color 0.2s linear;
    will-change: border-radius, background-color;

    i.bx {
      color: rgb(var(--vs-primary));
      font-size: 24px;
    }
  }
}
.divier {
  width: 30px;
  height: 1px;
  background: rgba(var(--vs-dark), 0.4);
}
</style>
