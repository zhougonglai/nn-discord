<style scoped lang="scss">
//聊天窗口
.page {
  background-color: #36393f;
}

.message {
  padding: 30px 24px;
}
</style>
<template>
  <div class="page spacer flex column">
    <TopTip
      @click="add_friend"
      msg="非好友消息可能会丢失哦，快添加成好友吧"
      btntext="添加好友"
    ></TopTip>
    <!-- 消息 -->
    <div ref="message" class="message flex-sub">
      <chat-item
        v-for="data in msgList"
        :key="data.id"
        :data="data"
      ></chat-item>
    </div>
    <!-- 输入框 -->
    <chat-tool @send="send_text"></chat-tool>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import chatItem from '~/components/channel/chat-item'
import chatTool from '~/components/channel/chat-tool'
import TopTip from '~/components/channel/top-tip'
export default {
  components: {
    [chatItem.name]: chatItem,
    [chatTool.name]: chatTool,
    [TopTip.name]: TopTip,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      msgList: (s) => s.chat.msgList,
    }),
  },
  watch: {
    msgList: {
      handler() {
        if (!process.client) return
        setTimeout(() => {
          const m = this.$refs.message
          m.scrollTop = m.scrollHeight
        }, 10)
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(['chat/send-text']),
    add_friend() {
      this.$axios.get('friend/is/1/2').then(({ data, code, msg }) => {
        //
      })
    },
    send_text(data) {
      this['chat/send-text'](data.text)
    },
  },
}
</script>
