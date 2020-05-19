<template lang="pug">
#audio-room.flex
  .room-content
    .message.flex-sub(ref="message")
      chat-item(v-for="data in msgList" :key="data.id" :data="data")
    chat-tool(@send="sendText")
  .room-sider
    .tools
      nn-dropdown(:label="type.label" v-model="type.value")
        nn-dropitem(v-for="item in types" :key="item.value" :value="item.value") {{item.label}}
      .tap 控麦
      .tap 上麦
      .tap 下麦
</template>
<script>
import { mapState, mapActions } from 'vuex'
import chatItem from '~/components/channel/chat-item'
import chatTool from '~/components/channel/chat-tool'

export default {
  name: 'AudioRoom',
  components: {
    chatItem,
    chatTool,
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
