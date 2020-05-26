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
import { mapState, mapActions, mapMutations } from 'vuex'
import chatItem from '~/components/channel/chat-item'
import chatTool from '~/components/channel/chat-tool'
import MembersItem from '~/components/channel/MembersItem'
import RTC from '~/services/agora-rtc'

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
    ...mapState(['user']),
    ...mapState('chat', ['msgList']),
  },
  mounted() {
    this.$nextTick(this.scrollEnd)
    this.initClient()
  },
  destroyed() {
    RTC.getInstance().leave()
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
    async initClient() {
      if (process.client) {
        const rtc = RTC.getInstance()
        // , this.user.userId
        await rtc.join(this.$route.params.audioId)
        await rtc.publish({ audio: true, video: false })
        await rtc.networkQuality(this.qualityCB)
      }
    },
    qualityCB(status) {
      // const { downlinkNetworkQuality, uplinkNetworkQuality } = status
      this.SET_STATUS(status)
    },
    async publishCB(user, mediaType) {
      const rtc = RTC.getInstance()
      await rtc.client.subscribe(user)
      if (mediaType === 'audio' || mediaType === 'all') {
        // 当订阅完成后，就可以从 `user` 中获取远端音视频轨道对象了
        const remoteAudioTrack = user.audioTrack
        // 播放音频因为不会有画面，不需要提供 DOM 元素的信息
        remoteAudioTrack.play()
      }
    },
    ...mapActions('chat', ['send-text']),
    ...mapMutations('rtc', ['SET_STATUS']),
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
