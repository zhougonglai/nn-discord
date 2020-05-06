<template lang="pug">
#app
  header#app-header
    #logo
      Logo
    .search-input(@click="openSearch") 搜索好友/社区
      i.bx.bx-search
  nav#app-nav(aria-label="侧边栏")
    .nav-item(v-if="user" :class="[{active: active === user.id}]" @click="active = user.id")
      .avatar(:style="{'background-image':`url(${user.imageUrl})`}")
      | {{user.nickName}}
    template(v-if="helpNav.length")
      .nav-item(
        v-for="nav in helpNav"
        :key="nav.id"
        :class="[{active: active === nav.id}]"
        @click="active = nav.id")
          .avatar(:style="{'background-image':`url(${nav.url})`}")
          | {{nav.label}}
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
</template>
<script>
import { mapState, mapActions } from 'vuex'
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
      search: {
        open: false
      },
      helpNav: [
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          label: 'FIFA18',
          url: require('~/assets/imgs/FIFA18@2x.jpg')
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          label: 'Xbox',
          url: require('~/assets/imgs/xbox@2x.jpg')
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          label: 'gog',
          url: require('~/assets/imgs/GOG_Galaxy@2x.jpg')
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          label: 'MOMO模拟器',
          url: require('~/assets/imgs/MuMu@2x.jpg')
        }
      ]
    }
  },
  computed: {
    ...mapState(['user'])
  },
  async created() {
    await this.getUser()
    await this.getCommunityGroup()
    await this.getFriendsGroup()
  },
  mounted() {
    this.active = this.user.id
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
    ...mapActions(['getUser', 'getCommunityGroup', 'getFriendsGroup'])
  }
}
</script>
<style lang="scss" scoped>
nav#app-nav {
  position: absolute;
  top: 52px;
  left: 0;
  bottom: 60px;
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
}
.divier {
  width: 30px;
  height: 1px;
  background: darkgray;
}
</style>
