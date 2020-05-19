<template lang="pug">
#audio-room.flex
  .room-content
    .message.flex-sub(ref="message")
      chat-item(v-for="data in msgList" :key="data.id" :data="data")
    chat-tool(@send="sendText")
  .room-sider
    .tools
      nn-dropdown(label="asasf")
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

.message {
  padding: 30px 24px;
}
</style>
