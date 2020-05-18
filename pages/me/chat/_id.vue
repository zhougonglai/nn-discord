<style scoped lang="scss">
//聊天窗口
.page {
  background-color: #36393f;
}
.add-friend-tip {
  $color-warn: #ef6643;
  $color: #fff;
  background-color: $color-warn;
  color: $color;
  padding: 7px;
  .el-button {
    margin-left: 15px;
    color: $color-warn;
    background: $color;
  }
}
.message {
  padding: 30px 24px;
}
</style>
<template>
  <div class="page spacer flex column">
    <div class="add-friend-tip flex jcc aic">
      非好友消息可能会丢失哦，快添加成好友吧
      <el-button round size="medium" type="primary" @click="add_friend"
        >添加好友</el-button
      >
    </div>
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
export default {
  components: {
    [chatItem.name]: chatItem,
    [chatTool.name]: chatTool,
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
        this.$nextTick(() => {
          setTimeout(() => {
            const m = this.$refs.message
            m.scrollTop = m.scrollHeight
          }, 0)
        })
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
      console.log(this.$store)
      this['chat/send-text'](data.text)
    },
  },
}
</script>
