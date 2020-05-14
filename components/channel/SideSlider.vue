<template lang="pug">
section#app-page
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
      n-link(:to="{name: 'me'}" v-slot="{href, isActive}")
        a.tab-bar(
          :href="href"
          :class="{active: isActive}"
          v-click-outside="outClick"
          @contextmenu.prevent="communityMenu")
          .tab-bar-pre
            i.bx.bxs-heart-circle
          transition(name="scale")
            .tab-bar-content(v-if="isActive")  社区
          transition(name="scale")
            .tab-bar-after(v-if="isActive") +
          transition(name="fade")
            .context-menus.left.bottom(v-if="contextmenu.community.status")
              .context-menu(@click.prevent="menuClick('fold')") 创建文件夹
              .context-menu(@click.prevent="menuClick('channel')") 创建频道
      n-link(:to="{name: 'friends'}" v-slot="{ href, isActive }")
        a.tab-bar(:href="href" :class="{active: isActive}")
          i.bx.bxs-group
          transition(name="scale")
            .tab-bar-content(v-if="isActive") 好友
          transition(name="scale")
            .tab-bar-after(v-if="isActive") +
    .scrollerWrap
      slot
  nuxt-child
</template>
<script>
export default {
  name: 'SideSlider',
  data() {
    return {
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
    }
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
  },
}
</script>
<style lang="scss" scoped>
section#app-page {
  width: calc(100vw - 190px);
  background: var(--vs-theme-bg);
  display: flex;
  align-items: stretch;
  flex: 1;
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

.question::v-deep {
  .nn-input {
    flex: 1;

    & + .nn-input {
      margin-left: 10px;
    }
  }
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
    color: #dcddde;
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
</style>
