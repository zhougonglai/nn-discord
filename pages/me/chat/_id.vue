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
      <el-button @click="add_friend" round size="medium" type="primary"
        >添加好友</el-button
      >
    </div>
    <!-- 消息 -->
    <div class="message flex-sub" ref="message">
      <chat-item
        :data="data"
        :key="data.id"
        v-for="data in msgList"
      ></chat-item>
    </div>
    <!-- 输入框 -->
    <chat-tool @send="send_text"></chat-tool>
  </div>
</template>
<script>
import chatItem from '~/components/channel/chat-item'
import chatTool from '~/components/channel/chat-tool'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  components: {
    [chatItem.name]: chatItem,
    [chatTool.name]: chatTool,
  },
  mounted() {
    setTimeout(() => {
      let m = this.$refs.message
    }, 10)
  },
  watch: {
    msgList: {
      handler: function () {
        setTimeout(() => {
          let m = this.$refs.message
          m.scrollTop = m.scrollHeight
        }, 0)
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState({
      msgList: (s) => s.chat.msgList,
    }),
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['chat/send-text']),
    add_friend() {
      console.log('添加好友')
    },
    send_text(data) {
      console.log(this.$store)
      this['chat/send-text'](data.text)
    },
  },
}
</script>
