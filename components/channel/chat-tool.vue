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
      padding: 0 5px;
      padding-top: 6.5px;
      margin: 0 5px;
    }
  }
  &.disabled {
    padding: 0 15px;
    color: #72767d;
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
    <div v-if="disabled" class="send-input flex jcb aic disabled">
      你还不能发言，因为你还没有加入此社区
      <el-button @click="$emit('click_join')" round size="mini" type="primary"
        >+加入</el-button
      >
    </div>
    <el-input
      ref="txt"
      v-else
      v-model="input"
      @keyup.enter.native="send"
      class="send-input"
      placeholder="请按“ENTER”键发送信息"
    >
      <template slot="append">
        <div class="msg-right flex aic">
          <emoji-picker :search="search" @emoji="insert">
            <div
              slot="emoji-invoker"
              slot-scope="{ events: { click: clickEvent } }"
              @click.stop="clickEvent"
            >
              <div class="btn">
                <emoji></emoji>
              </div>
            </div>
            <div slot="emoji-picker" slot-scope="{ emojis, insert }">
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
                        :title="emojiName"
                        @click="insert(emoji)"
                        >{{ emoji }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </emoji-picker>
          <div class="btn">
            <tupian></tupian>
          </div>
          <div class="btn">
            <Screenshot></Screenshot>
          </div>
        </div>
      </template>
    </el-input>
  </div>
</template>
<script>
import { Input } from 'element-ui'
import EmojiPicker from 'vue-emoji-picker'
import emoji from '~/assets/icons/emoji.svg'
import Screenshot from '~/assets/icons/Screenshot.svg'
import tupian from '~/assets/icons/tupian.svg'

export default {
  name: 'ChatTool',
  components: {
    emoji,
    Screenshot,
    tupian,
    [Input.name]: Input,
    EmojiPicker,
  },
  props: { disabled: Boolean },
  data() {
    return {
      input: '',
      search: '',
    }
  },
  computed: {
    // test() {
    //   return 0;
    // }
  },
  mounted() {
    // console.log();
  },
  methods: {
    insert(emoji) {
      // this.input += emoji
      const txt = this.$refs.txt.$el.querySelector('input')
      const startPos = txt.selectionStart
      const endPos = txt.selectionEnd
      this.input =
        txt.value.substring(0, startPos) +
        emoji +
        txt.value.substring(endPos, txt.value.length)
      setTimeout(() => {
        txt.setSelectionRange(startPos + 1, startPos + 1)
        txt.focus()
      }, 10)
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
