<template lang="pug">
main#app-page
  nn-dialog(:open.sync="dialog.community.channel.status" title="创建频道")
    .body
      h4.sub-title 频道资料
      .nn-radio-group
        .nn-radio-item(
          :class="{active: dialog.community.channel.value === 'audio'}"
          @click="dialog.community.channel.value = 'audio'")
          nn-radio(v-model="dialog.community.channel.value" label="audio" name="audio")
            i.bx.bxs-volume-full
            | 语音
        .nn-radio-item(
          :class="{active: dialog.community.channel.value === 'text'}"
          @click="dialog.community.channel.value = 'text'")
          nn-radio(v-model="dialog.community.channel.value" label="text" name="text")
            | 文 文字
      nn-select.my-2(v-model="dialog.community.channel.game_targer" placeholder="关联游戏")
        nn-option(v-for="game of games" :key="game.label" :label="game.label") {{game.label}}
      h4.sub-title 频道名称
      nn-input(v-model="dialog.community.channel.name" placeholder="请输入")
      .flex.align-center.space-between.my-2
        nn-radio(v-model="dialog.community.channel.guard" label="free") 自由进入
        nn-radio(v-model="dialog.community.channel.guard" label="link") 链接
        nn-radio(v-model="dialog.community.channel.guard" label="question") 问答
        nn-radio(v-model="dialog.community.channel.guard" label="invite") 邀请
      .flex.align-center.space-between.my-2.question
        nn-input(v-model="dialog.community.channel.question.title" placeholder="问题")
        nn-input(v-model="dialog.community.channel.question.answer" placeholder="答案")
    template(v-slot:footer)
      .footer
        nn-btn(rund type="text" @click="dialog.community.channel.status = false") 取消
        nn-btn(rund) 创建频道
  nav.sidebar
    .sidebar-header
      .panel.left
        .text 亚龙的社区
        .subtext 153.2W 成员
      .panel.right
        .subtext NN号 236584
        .subtext 153.2W 关注
      .panel.bottom
        nn-btn(rund size="small") +加入
    .tabs
      .tab-bar(
        :class="{active: active === 'community'}"
        @click="active = 'community'"
        v-click-outside="outClick"
        @contextmenu.prevent="communityMenu")
        .tab-bar-pre
          i.bx.bxs-heart-circle
        transition(name="scale")
          .tab-bar-content(v-if="active === 'community'")  社区
        transition(name="scale")
          .tab-bar-after(v-if="active === 'community'") +
        transition(name="fade")
          .context-menus.left.bottom(v-if="contextmenu.community.status")
            .context-menu(@click="menuClick('fold')") 创建文件夹
            .context-menu(@click="menuClick('channel')") 创建频道
      .tab-bar(:class="{active: active === 'friends'}" @click="active = 'friends'")
        i.bx.bxs-group
        transition(name="scale")
          .tab-bar-content(v-if="active === 'friends'") 好友
        transition(name="scale")
          .tab-bar-after(v-if="active === 'friends'") +
    .scrollerWrap
      .scroller(v-if="active === 'community'" key="community")
        .list.padding.my-1
          n-link(:to="{name: 'channels-me'}" v-slot="{ href, isActive }")
            a.list-item(:href="href" :class="[isActive && 'active']")
              .list-item-pre
                i.bx.bxs-home-circle
              .list-item-content 个人首页
        .list.group.padding.my-1(v-if="communityGroup.length" key="community")
          .list-group(
            v-for="group in communityGroup"
            :key="group.id"
            :class="{expand: activeCommunityGroup.includes(group.id)}")
            .list-header(@click="expandCommunityGroup(group)")
              .list-header-pre
                i.bx.bxs-chevron-down
              | {{group.label}}
            template(v-if="activeCommunityGroup.includes(group.id)")
              n-link.list-item(
                v-for="item in group.children"
                :to="`/channels/me/${item.id}`"
                :key="item.id")
                .list-item-pre
                  template(v-if="item.avatar.type === 'img'")
                    .avatar(:style="{'background-image':`url(${item.avatar.source})`}")
                  template(v-else-if="item.avatar.type === 'icon'")
                    i.bx(:class="[item.avatar.source]")
                  template(v-else) {{item.avatar.source}}
                  template(v-if="item.status")
                    span.HOLD(v-if="item.status === 'HOLD'")
                      span
                      span
                      span
                    span.DND(v-else-if="item.status === 'DND'")
                      i.bx.bxs-moon
                    span.AFK(v-else-if="item.status === 'AFK'")
                      i.bx.bxs-no-entry
                .list-item-content {{item.label}}
                .list-item-brief(v-if="item.brief")
                  span(:class="[item.brief.type, item.brief.class ? item.brief.class : '']") {{item.brief.payload > 99 ? 99 : item.brief.payload}}
      .scroller(v-else key="friend")
        .list.padding.my-1
          n-link(:to="{name: 'friends-search'}" v-slot="{ href, isActive }")
            a.list-item(:href="href" :class="[isActive && 'active']")
              .list-item-pre
                i.bx.bxs-home-circle
              .list-item-content 添加好友
        .list.padding.my-1
          n-link(:to="{name: 'friends-pass'}" v-slot="{ href, isActive }")
            a.list-item(:href="href" :class="[isActive && 'active']")
              .list-item-pre
                i.bx.bxs-home-circle
              .list-item-content 好友申请
        .list.group.padding.my-1( key="friends")
          .list-group(
            v-for="friend in friendsGroup"
            :key="friend.id"
            :class="{expand: activeFriendsGroup.includes(friend.id)}")
            .list-header(@click="expandFriendsGroup(friend)")
              .list-header-pre
                i.bx.bxs-chevron-down
              | {{friend.label}}
            template(v-if="activeFriendsGroup.includes(friend.id)")
              n-link.list-item(
                v-for="item in friend.children"
                :to="`/channels/me/${item.id}`"
                :key="item.id")
                .list-item-pre
                  template(v-if="item.avatar.type === 'img'")
                    .avatar(:style="{'background-image':`url(${item.avatar.source})`}")
                  template(v-else-if="item.avatar.type === 'icon'")
                    i.bx(:class="[item.avatar.source]")
                  template(v-else) {{item.avatar.source}}
                  template(v-if="item.status")
                    span.HOLD(v-if="item.status === 'HOLD'")
                      span
                      span
                      span
                    span.DND(v-else-if="item.status === 'DND'")
                      i.bx.bxs-moon
                    span.AFK(v-else-if="item.status === 'AFK'")
                      i.bx.bxs-no-entry
                .list-item-content {{item.label}}
                .list-item-brief(v-if="item.brief")
                  span(:class="[item.brief.type, item.brief.class ? item.brief.class : '']") {{item.brief.payload > 99 ? 99 : item.brief.payload}}
  nuxt-child
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import nnButton from '~/components/wc/nnButton'
import nnCheckbox from '~/components/wc/nnCheckbox'
import nnDialog from '~/components/wc/nnDialog'
import nnRadio from '~/components/wc/nnRadio'
import nnSelect from '~/components/wc/nnSelect'
import nnOption from '~/components/wc/nnOption'
import nnInput from '~/components/wc/nnInput'

export default {
  name: 'Me',
  components: {
    [nnDialog.name]: nnDialog,
    [nnButton.name]: nnButton,
    [nnCheckbox.name]: nnCheckbox,
    [nnRadio.name]: nnRadio,
    [nnSelect.name]: nnSelect,
    [nnOption.name]: nnOption,
    [nnInput.name]: nnInput,
  },
  data() {
    return {
      search: {
        status: false,
        keyword: '',
      },
      dialog: {
        community: {
          channel: {
            status: false,
            value: 'audio',
            name: '',
            game_targer: '',
            guard: 'free',
            guards: ['free', 'link', 'question', 'invite'],
            types: [
              {
                type: 'audio',
                label: '语音',
              },
              {
                type: 'text',
                label: '文字',
              },
            ],
            question: {
              title: '',
              answer: '',
            },
          },
          fold: {
            status: false,
          },
        },
      },
      contextmenu: {
        community: {
          status: false,
        },
        friends: {
          status: false,
        },
      },
      games: [
        {
          label: 'LOL',
        },
        {
          label: 'AAA',
        },
        {
          label: 'BBB',
        },
      ],
      active: 'community',
      activeLink: '',
    }
  },
  computed: {
    ...mapState([
      'communityGroup',
      'friendsGroup',
      'activeCommunityGroup',
      'activeFriendsGroup',
    ]),
  },
  watch: {
    active(newVal) {
      if (newVal === 'community') {
        this.$router.push({ name: 'channels-me' })
      } else if (newVal === 'friends') {
        this.$router.push({ name: 'channels-me-friends-search' })
      }
    },
  },
  methods: {
    communityMenu() {
      this.contextmenu.community.status = true
    },
    outClick() {
      if (this.contextmenu.community.status) {
        this.contextmenu.community.status = false
      }
    },
    menuClick(target) {
      const action = {
        fold: () => {
          this.outClick()
        },
        channel: () => {
          this.outClick()
          this.dialog.community.channel.status = true
        },
      }
      action[target]()
    },
    ...mapMutations(['expandCommunityGroup', 'expandFriendsGroup']),
  },
}
</script>
<style lang="scss" scoped>
@keyframes blink {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}

main#app-page {
  background: var(--vs-theme-bg);
  display: flex;
  align-items: stretch;
  flex: 1 1 auto;
  justify-content: flex-start;
  .sidebar {
    width: 240px;
    background: var(--background-secondary);
    display: flex;
    flex-direction: column;
    &-header {
      height: 130px;
      display: grid;
      background-image: url('http://dummyimage.com/240x130/02adea&text=a bgImg');
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      .panel {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .subtext {
          font-size: 12px;
        }
      }
      .left {
        grid-area: 1 / 1 / 2 / 2;
        .subtext {
          margin-top: 10px;
        }
      }
      .right {
        grid-area: 1 / 2 / 2 / 3;
        .subtext:last-of-type {
          margin-top: 10px;
        }
      }
      .bottom {
        grid-area: 2 / 1 / 3 / 3;
      }
    }
    .scrollerWrap {
      flex: 1 1 auto;
      display: flex;
      height: calc(100% - 52px - 130px);
      .scroller {
        flex: 1 1 auto;
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 35vh;
      }
      svg.empty {
        fill: var(--background-primary);
        padding: 16px 0;
      }
    }
  }
}

.footer {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab {
  &s {
    display: flex;
  }
  &-bar {
    height: 52px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: var(--background-primary);
    border-radius: 0 0 10px 10px;
    padding: 0 10px;
    transition: background 0.2s linear;
    will-change: background;
    position: relative;
    &:first-of-type {
      border-radius: 0 0 10px 0;
    }
    &:last-of-type {
      border-radius: 0 0 0 10px;
    }
    &.active {
      background-color: var(--background-secondary);
    }
    i.bx {
      font-size: 20px;
    }
    &-pre {
      margin-right: 5px;
    }
    &-content {
      flex: 1;
      margin-left: 5px;
      font-size: small;
      font-weight: bold;
    }
    &-after {
      position: absolute;
      right: 8px;
      width: 22px;
      height: 22px;
      font-size: 22px;
      line-height: 18px;
      text-align: center;
      border-radius: 5px;
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #fff;
        opacity: 0;
      }
      &:hover {
        &::after {
          opacity: 0.2;
        }
      }
    }
  }
}

.avatar {
  width: 32px;
  height: 32px;
}

.HOLD {
  display: inline-flex;
  align-items: center;
  height: 14px;
  background-color: var(--theme-success);
  position: absolute;
  right: 7px;
  bottom: 0;
  border-radius: 7px;
  padding: 0 3px;
  span {
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: var(--interactive-active);
    margin: 0 1px;
    animation: blink 1.4s infinite both;
    &:nth-of-type(2) {
      animation-delay: 0.2s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.4s;
    }
  }
}

.DND {
  position: absolute;
  bottom: 0;
  right: 7px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--background-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  i.bx {
    color: var(--theme-warn);
    font-size: 14px;
  }
}

.AFK {
  position: absolute;
  bottom: 0;
  right: 7px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--background-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  i.bx {
    font-size: 14px;
    color: var(--theme-error);
  }
}

.bage {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: var(--interactive-active);
  &.error {
    background-color: var(--theme-error);
  }
}

.question::v-deep {
  .nn-input {
    flex: 1;

    & + .nn-input {
      margin-left: 10px;
    }
  }
}

.action {
  font-size: 14px;
}

.divier {
  width: 1px;
  height: 20px;
  margin: 0 8px;
  background: darkgray;
}
</style>
