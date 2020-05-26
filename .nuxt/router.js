import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _76872b20 = () => interopDefault(import('..\\pages\\channels.vue' /* webpackChunkName: "pages_channels" */))
const _449a6562 = () => interopDefault(import('..\\pages\\channels\\index.vue' /* webpackChunkName: "pages_channels_index" */))
const _7c2b700a = () => interopDefault(import('..\\pages\\channels\\_community.vue' /* webpackChunkName: "pages_channels__community" */))
const _2234a538 = () => interopDefault(import('..\\pages\\channels\\_community\\index.vue' /* webpackChunkName: "pages_channels__community_index" */))
const _f352291a = () => interopDefault(import('..\\pages\\channels\\_community\\block.vue' /* webpackChunkName: "pages_channels__community_block" */))
const _5e90d3d7 = () => interopDefault(import('..\\pages\\channels\\_community\\block\\_id.vue' /* webpackChunkName: "pages_channels__community_block__id" */))
const _0b68875d = () => interopDefault(import('..\\pages\\channels\\_community\\news.vue' /* webpackChunkName: "pages_channels__community_news" */))
const _31de3775 = () => interopDefault(import('..\\pages\\channels\\_community\\publish.vue' /* webpackChunkName: "pages_channels__community_publish" */))
const _161d7ee6 = () => interopDefault(import('..\\pages\\channels\\_community\\standings.vue' /* webpackChunkName: "pages_channels__community_standings" */))
const _36cc7d0e = () => interopDefault(import('..\\pages\\channels\\_community\\article\\_id.vue' /* webpackChunkName: "pages_channels__community_article__id" */))
const _5e8ff56f = () => interopDefault(import('..\\pages\\demo\\index.vue' /* webpackChunkName: "pages_demo_index" */))
const _682ff5f5 = () => interopDefault(import('..\\pages\\friends.vue' /* webpackChunkName: "pages_friends" */))
const _7c969e26 = () => interopDefault(import('..\\pages\\friends\\index.vue' /* webpackChunkName: "pages_friends_index" */))
const _05e3bb46 = () => interopDefault(import('..\\pages\\friends\\pass.vue' /* webpackChunkName: "pages_friends_pass" */))
const _aab7ead6 = () => interopDefault(import('..\\pages\\friends\\_id.vue' /* webpackChunkName: "pages_friends__id" */))
const _7722dae8 = () => interopDefault(import('..\\pages\\me.vue' /* webpackChunkName: "pages_me" */))
const _f59236cc = () => interopDefault(import('..\\pages\\me\\index.vue' /* webpackChunkName: "pages_me_index" */))
const _c37ecb1a = () => interopDefault(import('..\\pages\\me\\author.vue' /* webpackChunkName: "pages_me_author" */))
const _55ef7967 = () => interopDefault(import('..\\pages\\me\\Dynamic.vue' /* webpackChunkName: "pages_me_Dynamic" */))
const _b06637fc = () => interopDefault(import('..\\pages\\me\\member.vue' /* webpackChunkName: "pages_me_member" */))
const _a7d4bd80 = () => interopDefault(import('..\\pages\\me\\notice.vue' /* webpackChunkName: "pages_me_notice" */))
const _eca96eb6 = () => interopDefault(import('..\\pages\\me\\Setup.vue' /* webpackChunkName: "pages_me_Setup" */))
const _668a805a = () => interopDefault(import('..\\pages\\me\\chat\\robot.vue' /* webpackChunkName: "pages_me_chat_robot" */))
const _efdcb220 = () => interopDefault(import('..\\pages\\me\\audio\\_audioId.vue' /* webpackChunkName: "pages_me_audio__audioId" */))
const _0c48d4ac = () => interopDefault(import('..\\pages\\me\\chat\\_id.vue' /* webpackChunkName: "pages_me_chat__id" */))
const _7c50039e = () => interopDefault(import('..\\pages\\me\\messages\\_msgId.vue' /* webpackChunkName: "pages_me_messages__msgId" */))
const _296f242c = () => interopDefault(import('..\\pages\\me\\_channel.vue' /* webpackChunkName: "pages_me__channel" */))
const _845fd7b6 = () => interopDefault(import('..\\pages\\more.vue' /* webpackChunkName: "pages_more" */))
const _94e18686 = () => interopDefault(import('..\\pages\\more\\index.vue' /* webpackChunkName: "pages_more_index" */))
const _629a60b2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _09dd2790 = () => interopDefault(import('..\\pages\\index\\index.vue' /* webpackChunkName: "pages_index_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/channels",
    component: _76872b20,
    children: [{
      path: "",
      component: _449a6562,
      name: "channels"
    }, {
      path: ":community",
      component: _7c2b700a,
      children: [{
        path: "",
        component: _2234a538,
        name: "channels-community"
      }, {
        path: "block",
        component: _f352291a,
        name: "channels-community-block",
        children: [{
          path: ":id?",
          component: _5e90d3d7,
          name: "channels-community-block-id"
        }]
      }, {
        path: "news",
        component: _0b68875d,
        name: "channels-community-news"
      }, {
        path: "publish",
        component: _31de3775,
        name: "channels-community-publish"
      }, {
        path: "standings",
        component: _161d7ee6,
        name: "channels-community-standings"
      }, {
        path: "article/:id?",
        component: _36cc7d0e,
        name: "channels-community-article-id"
      }]
    }]
  }, {
    path: "/demo",
    component: _5e8ff56f,
    name: "demo"
  }, {
    path: "/friends",
    component: _682ff5f5,
    children: [{
      path: "",
      component: _7c969e26,
      name: "friends"
    }, {
      path: "pass",
      component: _05e3bb46,
      name: "friends-pass"
    }, {
      path: ":id",
      component: _aab7ead6,
      name: "friends-id"
    }]
  }, {
    path: "/me",
    component: _7722dae8,
    children: [{
      path: "",
      component: _f59236cc,
      name: "me"
    }, {
      path: "author",
      component: _c37ecb1a,
      name: "me-author"
    }, {
      path: "Dynamic",
      component: _55ef7967,
      name: "me-Dynamic"
    }, {
      path: "member",
      component: _b06637fc,
      name: "me-member"
    }, {
      path: "notice",
      component: _a7d4bd80,
      name: "me-notice"
    }, {
      path: "Setup",
      component: _eca96eb6,
      name: "me-Setup"
    }, {
      path: "chat/robot",
      component: _668a805a,
      name: "me-chat-robot"
    }, {
      path: "audio/:audioId?",
      component: _efdcb220,
      name: "me-audio-audioId"
    }, {
      path: "chat/:id?",
      component: _0c48d4ac,
      name: "me-chat-id"
    }, {
      path: "messages/:msgId?",
      component: _7c50039e,
      name: "me-messages-msgId"
    }, {
      path: ":channel",
      component: _296f242c,
      name: "me-channel"
    }]
  }, {
    path: "/more",
    component: _845fd7b6,
    children: [{
      path: "",
      component: _94e18686,
      name: "more"
    }]
  }, {
    path: "/",
    component: _629a60b2,
    children: [{
      path: "",
      component: _09dd2790,
      name: "index"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
