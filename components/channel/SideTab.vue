<template lang="pug">
.tabs(v-bind="$attrs")
  nn-dialog(:open.sync="dialog.community.channel.status" title="创建频道")
    .body(v-if="dialog.community.channel.status")
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
  .tab-bars
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
      a.tab-bar(:href="href" :class="{active: isActive}" v-click-outside="()=>{contextmenu.friends.status=false}"
        @contextmenu.prevent="()=>{contextmenu.friends.status=true}")
        i.bx.bxs-group
        transition(name="scale")
          .tab-bar-content(v-if="isActive") 好友
        transition(name="scale")
          .tab-bar-after(v-if="isActive") +
        transition(name="fade")
          .context-menus.left.bottom(v-if="contextmenu.friends.status")
            .context-menu(@click.prevent="menuClick('fold')") 创建文件夹
            .context-menu(@click.prevent="menuClick('channel')") 创建频道
  .tab-body
    slot
</template>
<script>
export default {
  name: 'SideTab',
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
    flex-direction: column;
    flex: 1;
    background-color: var(--background-secondary);
    height: calc(100% - 136px);
    max-height: 100%;
  }
  &-body {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 35vh;
    svg.empty {
      fill: var(--background-primary);
      padding: 16px 0;
    }
  }
  &-bar {
    &s {
      display: flex;
    }
    user-select: none;
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
