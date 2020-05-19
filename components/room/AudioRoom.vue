<template lang="pug">
#audio-room.flex
  .room-content
    .message.flex-sub(ref="message")
      chat-item(v-for="data in msgList" :key="data.id" :data="data")
    chat-tool(@send="sendText")
  .room-sider.flex.column
    .tools
      nn-dropdown.flex-3(:label="type.value === 'microphone' ? '麦序模式' : '自由模式'" v-model="type.value")
        nn-dropitem(v-for="item in types" :key="item.value" :value="item.value") {{item.label}}
      .tap.spacer 控麦
      .tap.spacer 上麦
      .tap.spacer 下麦
    div.flex-sub
      template(v-for="a in 30")
        nn-context-menus(:key="a" @menuClick="menuClick")
          MembersItem
          template(v-slot:menus)
            nn-context-menu(v-for="b in 5" :key="b" :name="b")
              | {{b}}
</template>
<script>
import { mapState, mapActions } from 'vuex'
import chatItem from '~/components/channel/chat-item'
import chatTool from '~/components/channel/chat-tool'
import MembersItem from '~/components/channel/MembersItem'

export default {
  name: 'AudioRoom',
  components: {
    chatItem,
    chatTool,
    [MembersItem.name]: MembersItem,
  },
  data() {
    return {
      type: {
        label: '麦序模式',
        value: 'microphone',
      },
      types: [
        {
          label: '麦序模式',
          value: 'microphone',
        },
        {
          label: '自由模式',
          value: 'free',
        },
      ],
    }
  },
  computed: {
    ...mapState('chat', ['msgList']),
  },
  methods: {
    scrollEnd() {
      this.$refs.message.scrollTo(0, this.$refs.message.scrollHeight)
    },
    sendText(e) {
      this['send-text'](e.text)
      this.$nextTick(this.scrollEnd)
    },
    menuClick(e) {
      console.log('menuClick', e)
    },
    ...mapActions('chat', ['send-text']),
  },
  mounted() {
    this.$nextTick(this.scrollEnd)
  },
}
</script>
<style lang="scss" scoped>
#audio-room {
  flex: 1;
  width: 100%;
}

.room {
  &-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #36393f;
  }
  &-sider {
    width: 250px;
    background-color: #2f3136;
  }
}

.tools {
  display: flex;
  align-items: center;
  justify-content: center;
}

.message {
  padding: 30px 24px;
}
</style>
