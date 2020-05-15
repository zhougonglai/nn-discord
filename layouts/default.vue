<template lang="pug">
#app
  header#app-header
    #logo
      Logo
    .search-input(@click="openSearch") 搜索好友/社区
      i.bx.bx-search
  main#app-main
    nav#app-nav(aria-label="侧边栏")
      n-link(v-if="user" to="/me/" v-slot="{ href }")
        a.nav-item(:href="href" :class="[['/friends', '/me'].some(path => $route.path.includes(path))? 'active' : '']")
          .avatar.large(:style="{'background-image':`url(${user.imageUrl})`}")
          | {{user.nickName}}
      template(v-if="helpNav.length")
        n-link(
          :to="`/channels/${nav.label}`"
          v-for="nav in helpNav"
          :key="nav.id"
          v-slot="{href}")
          a.nav-item(:href="href" :class="[ nav.label === $route.params.channel ? 'active' : '']")
            .avatar.large(:style="{'background-image':`url(${nav.url})`}")
            | {{nav.label}}
      .spacer
      n-link.nav-item(to="/more/" active-class="active")
        .avatar.large
          i.bx.bxs-widget
        | 更多社区
    nuxt
  footer#app-footer
    .tools
      .item
        i.bx.bxs-microphone
      .item
        i.bx.bxs-music
      .item
        i.bx.bx-headphone
      .item 自由
      .item
        i.bx.bxs-cog
  nn-dialog(:open.sync="sign.in.status" clear)
    #box(v-if="sign.in.status")
      SignIn
</template>
<script>
import { mapState } from 'vuex'
import Logo from '~/assets/logo.svg'
import SignIn from '~/components/sign/in'

export default {
  name: 'DefaultLayout',
  components: {
    Logo,
    SignIn,
  },
  data() {
    return {
      theme: {
        auto: false,
        type: 'dark', // dark light, system
      },
      sign: {
        in: {
          status: false,
        },
      },
      search: {
        open: false,
      },
      helpNav: [
        {
          id: Math.random().toString(16).slice(-10),
          label: 'FIFA18',
          url: require('~/assets/imgs/FIFA18@2x.jpg'),
        },
        {
          id: Math.random().toString(16).slice(-10),
          label: 'Xbox',
          url: require('~/assets/imgs/xbox@2x.jpg'),
        },
        {
          id: Math.random().toString(16).slice(-10),
          label: 'gog',
          url: require('~/assets/imgs/GOG_Galaxy@2x.jpg'),
        },
        {
          id: Math.random().toString(16).slice(-10),
          label: 'MOMO模拟器',
          url: require('~/assets/imgs/MuMu@2x.jpg'),
        },
      ],
    }
  },
  computed: {
    ...mapState(['user']),
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        if (!this.user) {
          this.sign.in.status = true
        }
      }, 600)
    })
  },
  methods: {
    openSearch() {
      this.search.open = true
    },
    closeSearch() {
      this.search.open = false
    },
    toggleSearchDialog() {
      this.search.open = !this.search.open
    },
  },
  head() {
    return {
      bodyAttrs: !this.theme.auto && {
        'vs-theme': this.theme.type,
      },
    }
  },
}
</script>
<style lang="scss" scoped>
main#app-main {
  position: absolute;
  top: 52px;
  left: 0;
  right: 0;
  bottom: 60px;
  display: flex;
}
nav#app-nav {
  width: 190px;
  padding-left: 10px;
  padding-bottom: 10px;
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
    cursor: pointer;
    svg {
      fill: #72767d;
    }

    &:hover {
      svg {
        fill: #9fa4ab;
      }
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

footer#app-footer {
  position: absolute;
  background-color: var(--vs-theme-layout2);
  display: flex;
  height: 60px;
  padding: 0 20px;
  bottom: 0;
  left: 0;
  right: 0;
  .tools {
    display: flex;
    align-items: center;
    .item {
      font-size: 18px;
      i {
        font-size: 30px;
      }
      & + .item {
        margin-left: 10px;
      }
    }
  }
}

#box {
  width: 1000px;
  height: 474px;
  background-image: url('../assets/imgs/sign_bg.png');
  background-position: center;
  background-size: cover;
  padding: 64px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
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
  overflow: hidden;
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
      color: white;
    }
  }
}
.divier {
  width: 30px;
  height: 1px;
  background: darkgray;
}
</style>
