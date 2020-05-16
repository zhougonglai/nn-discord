<style scoped lang="scss">
.msg-tool {
  padding: 4px 24px 24px 24px;
}
.send-input {
  height: 44px;
  border-radius: 10px;
  background: #4b4e54;
  ::v-deep {
    .el-input-group__append {
      background-color: transparent;
      border: none;
    }
    input {
      border: none;
      background: none;
    }
  }
  .msg-right {
    .btn {
      cursor: pointer;
      padding: 5px;
      margin: 0 5px;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
}
.emoji-picker {
  position: absolute;
  background: #000;
  bottom: 60px;
  right: 10px;
  width: 470px;
  height: 300px;
  border-radius: 14px;
  overflow: auto;
  font-size: 14px;
  padding: 14px;
  h5 {
  }
  .emojiGroup {
    font-size: 24px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}
</style>
<template>
  <div class="msg-tool">
    <el-input
      v-model="input"
      class="send-input"
      placeholder="请按“ENTER”键发送信息"
      @keyup.enter.native="send"
    >
      <template slot="append">
        <div class="msg-right flex aic">
          <emoji-picker @emoji="insert" :search="search">
            <div
              slot="emoji-invoker"
              slot-scope="{ events: { click: clickEvent } }"
              @click.stop="clickEvent"
            >
              <div class="btn">
                <img src="http://placekitten.com/24/24" />
              </div>
            </div>
            <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
              <div class="emoji-picker flex column">
                <div>
                  <el-input
                    v-model="search"
                    placeholder="搜索emoji"
                    clearable
                    prefix-icon="el-icon-search"
                  ></el-input>
                </div>
                <div class="flex-sub">
                  <div v-for="(emojiGroup, category) in emojis" :key="category">
                    <h5>{{ category }}</h5>
                    <div class="emojiGroup">
                      <span
                        v-for="(emoji, emojiName) in emojiGroup"
                        :key="emojiName"
                        @click="insert(emoji)"
                        :title="emojiName"
                        >{{ emoji }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </emoji-picker>
          <div class="btn">
            <img src="http://placekitten.com/24/24" />
          </div>
          <div class="btn">
            <img src="http://placekitten.com/24/24" />
          </div></div></template
    ></el-input>
  </div>
</template>
<script>
import { Input } from 'element-ui'
import EmojiPicker from 'vue-emoji-picker'
export default {
  name: 'chat-tool',
  components: { [Input.name]: Input, EmojiPicker },
  mounted() {
    //console.log();
  },
  computed: {
    // test() {
    //   return 0;
    // }
  },
  data() {
    return {
      input: '',
      search: '',
    }
  },
  methods: {
    insert(emoji) {
      this.input += emoji
    },
    send() {
      this.$emit('send', {
        text: this.input,
      })
      this.input = ''
    },
  },
}
</script>
