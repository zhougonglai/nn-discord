<style scoped lang="scss">
//聊天窗口
.page {
  background-color: #36393f;
}

.message {
  padding: 30px 24px;
}
.Group-members {
  width: 250px;
  background-color: #2f3136;
  .title {
    height: 52px;
    color: #72767d;
    padding: 0 20px;
    svg {
      margin-right: 5px;
    }
  }
}
</style>
<template>
  <div class="page spacer flex column">
    <TopTip
      @click="add_friend"
      msg="你还未订阅“守望先锋”，订阅后了解更多"
      btntext="立即订阅"
    ></TopTip>
    <div class="flex-sub flex">
      <div class="flex column flex-sub">
        <!-- 消息 -->
        <div ref="message" class="message flex-sub">
          <chat-item
            v-for="data in msgList"
            :key="data.id"
            :data="data"
          ></chat-item>
        </div>
        <!-- 输入框 -->
        <chat-tool
          @send="send_text"
          :disabled="true"
          @click_join="join"
        ></chat-tool>
      </div>
      <div class="Group-members flex column">
        <div class="title flex aic"><listmembers></listmembers>成员列表</div>
        <div class="list flex-sub">
          <MembersItem v-for="a in 30" :key="a"></MembersItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import chatItem from '~/components/channel/chat-item'
import chatTool from '~/components/channel/chat-tool'
import TopTip from '~/components/channel/top-tip'
import MembersItem from '~/components/channel/MembersItem'

import listmembers from '~/assets/icons/List members.svg'
export default {
  components: {
    listmembers,
    [chatItem.name]: chatItem,
    [chatTool.name]: chatTool,
    [MembersItem.name]: MembersItem,
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
    // 加入社区
    join() {
      console.log('加入')
    },
  },
}
</script>
