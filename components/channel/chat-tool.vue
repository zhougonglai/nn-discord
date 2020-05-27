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
      v-paste-img="send_img"
      v-drop-img="send_img"
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
          <div @click="$refs.inputimg.click()" class="btn">
            <tupian></tupian>
          </div>
          <div class="btn">
            <Screenshot></Screenshot>
          </div>
        </div>
      </template>
    </el-input>
    <input
      ref="inputimg"
      @change="selectFiles"
      accept="image/gif,image/jpeg,image/jpg,image/png,image/bmp"
      type="file"
      style="display: none;"
    />
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
  computed: {},
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
        data: this.input,
        type: 0,
      })
      this.input = ''
    },
    compress(img) {
      // 图片压缩
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      //    瓦片canvas
      const tCanvas = document.createElement('canvas')
      const tctx = tCanvas.getContext('2d')

      const initSize = img.src.length
      let width = img.width
      let height = img.height
      // 如果图片大于四百万像素，计算压缩比并将大小压至400万以下
      let ratio
      if ((ratio = (width * height) / 4000000) > 1) {
        ratio = Math.sqrt(ratio)
        width /= ratio
        height /= ratio
      } else {
        ratio = 1
      }
      canvas.width = width
      canvas.height = height
      //        铺底色
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      // 如果图片像素大于100万则使用瓦片绘制
      let count
      if ((count = (width * height) / 1000000) > 1) {
        count = ~~(Math.sqrt(count) + 1) // 计算要分成多少块瓦片
        //            计算每块瓦片的宽和高
        const nw = ~~(width / count)
        const nh = ~~(height / count)
        tCanvas.width = nw
        tCanvas.height = nh
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count; j++) {
            tctx.drawImage(
              img,
              i * nw * ratio,
              j * nh * ratio,
              nw * ratio,
              nh * ratio,
              0,
              0,
              nw,
              nh
            )
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh)
          }
        }
      } else {
        ctx.drawImage(img, 0, 0, width, height)
      }
      // 进行最小压缩
      const ndata = canvas.toDataURL('image/jpeg', 0.8)
      console.log('压缩前：' + initSize)
      console.log('压缩后：' + ndata.length)
      console.log(
        '压缩率：' + ~~((100 * (initSize - ndata.length)) / initSize) + '%'
      )
      tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0
      return ndata
    },
    selectFiles(event) {
      Array.prototype.forEach.call(event.target.files, (file) => {
        if (!/\/(?:jpeg|png|gif)/i.test(file.type)) return

        this.send_img(file)
      })
    },
    getBlob(buffer, format) {
      try {
        return new Blob(buffer, { type: format })
      } catch (e) {
        const bb = new (window.BlobBuilder ||
          window.WebKitBlobBuilder ||
          window.MSBlobBuilder)()
        buffer.forEach(function (buf) {
          bb.append(buf)
        })
        return bb.getBlob(format)
      }
    },
    send_img(file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        const img = new Image()
        img.onload = () => {
          const base64 = this.compress(img)
          const text = window.atob(base64.split(',')[1])
          const buffer = new Uint8Array(text.length)
          // var pecent = 0,
          //   loop = null;
          for (let i = 0; i < text.length; i++) {
            buffer[i] = text.charCodeAt(i)
          }
          const blob = this.getBlob([buffer], file.type)
          console.log(blob)
          // 上传图片
          // this.$upload("upload", blob, {
          //   scene: "account"
          // })
          //   .then(data => {
          //     this.loading = false;
          //     console.log("data:", data);
          //     this.$emit("input", data);
          //   })
          //   .catch(err => {
          //     console.log("err:", err);
          //     this.loading = false;
          //     this.$toast.fail("图片上传失败!");
          //   });
        }
        img.src = reader.result
      }
    },
  },
}
</script>
