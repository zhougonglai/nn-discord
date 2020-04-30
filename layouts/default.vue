<template lang="pug">
#app
  header#app-header
    Logo#logo
    .search-input 搜索好友/社区
      i.bx.bx-search
  nav#app-nav(aria-label="侧边栏")
    template(v-if="navs.length")
      .nav-item(
        v-for="nav in navs"
        :key="nav.id"
        :class="[{active: active === nav.id}]"
        @click="active = nav.id")
          .avatar(:data-src="nav.avatar" :style="{'background-image':`url(${nav.url})`}")
          | {{nav.label}}
  nuxt
</template>
<script>
import Logo from '~/assets/logo.svg'

export default {
  name: 'DefaultLayout',
  head() {
    return {
      bodyAttrs: !this.theme.auto && {
        'vs-theme': this.theme.type
      }
    }
  },
  components: {
    Logo
  },
  data() {
    return {
      active: '',
      theme: {
        auto: false,
        type: 'dark' // dark light, system
      },
      homeNav: [
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          label: '我的主页',
          url: 'http://dummyimage.com/125x125',
          class: 'me'
        }
      ],
      helpNav: [
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          label: 'FIFA18',
          url: 'http://dummyimage.com/125x125'
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          label: 'Xbox',
          url: 'http://dummyimage.com/125x125'
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          label: 'gog',
          url: 'http://dummyimage.com/125x125'
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          label: 'MOMO模拟器',
          url: 'http://dummyimage.com/125x125'
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
  top: 52px;
  left: 0;
  bottom: 0;
  width: 190px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--vs-theme-layout2);
}
header#app-header {
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  #logo {
    fill: #72767d;
    cursor: pointer;

    &:hover {
      fill: #9fa4ab;
    }
  }

  .search-input {
    cursor: pointer;
    margin-left: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    width: 200px;
    height: 28px;
    border-radius: 14px;
    background-color: var(--vs-theme-layout3);
    color: var(--deprecated-quickswitcher-input-background);
  }
}

.nav-item {
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  border-radius: 36px 0 0 36px;
  padding: 3px;
  cursor: pointer;
  transition: background 0.2s linear;
  color: var(--nav-label);
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 0;
    border-radius: 4px 0 0 4px;
    margin-right: -4px;
    background: var(--vs-theme-color);
    contain: layout size;
    transition: height 0.2s linear, background 325ms linear;
  }
  &.active {
    background-color: var(--nav-hover);
    color: var(--nav-label-active);
    &::after {
      height: 100%;
    }
    .icon-button {
      border-radius: 8px;
      background-color: rgb(var(--vs-primary));
    }
    i.bx {
      color: var(--interactive-active) !important;
    }
  }
  &:not(.active):hover,
  &:not(.active):active,
  &:not(.active):focus {
    background-color: var(--nav-hover);
    color: var(--nav-label-active);
    &::after {
      height: 24px;
    }
    .avatar {
      background-color: rgb(var(--vs-primary));
    }
    i.bx {
      color: var(--vs-theme-bg);
    }
  }
  .avatar {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 48px;
    margin-right: 10px;
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
  background: darkgray;
}
</style>
