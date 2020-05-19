<template>
  <div class="comment-editor" ref="container">
    <div class="input-wrapper" :class="{ inline }">
      <InputBox
        ref="inputBox"
        :type="inline ? 'text' : 'textarea'"
        content-type="rich"
        :rows="2"
        @focus="onInputFocus"
        @blur="onInputBlur"
        @keyup.enter.native="handlerSubmit"
        @keydown="handlerKeydown"
        v-model="inputContent"
        :placeholder="placeholder"
        :focused="showInlineButton"
        :inputStyle="inputStyle"
        class="input-box"
      >
        <div
          v-if="inline"
          :class="['input-append', { hasbg: !showInlineButton }]"
          slot="append"
        >
          <EmojiPicker
            ref="emojiPicker"
            trigger-pick="click"
            @activated="inputBoxFocused = true"
            @selected="handlerEmojiSelected"
            picker-position="left"
            :button-text-visible="false"
          ></EmojiPicker>
        </div>
      </InputBox>
      <transition name="button">
        <div
          @click="handlerSubmit"
          class="submit-button inline"
          :disabled="!inputContent"
          ref="button"
          v-show="showInlineButton && inline"
        >
          {{ buttonText }}
        </div>
      </transition>
    </div>
    <div class="footer-action" v-if="!inline">
      <EmojiPicker
        trigger-pick="click"
        @activated="$refs.inputBox.focus()"
        @selected="handlerEmojiSelected"
      ></EmojiPicker>
      <span class="submit-tiptext"></span>
      <div
        @click="handlerSubmit"
        class="submit-button"
        :disabled="!inputContent"
      >
        {{ buttonText }}
      </div>
    </div>
  </div>
</template>
<script>
import InputBox from '~/components/nnediter/NnEditerInput'
import EmojiPicker from '~/components/nnediter/NnEditerEmoji'
export default {
  name: 'NnEditer',
  components: { InputBox, EmojiPicker },
  data() {
    return {
      active: false,
      inputContent: '',
      inputBoxFocused: false,
    }
  },
  props: {
    buttonText: {
      type: String,
      default: '提交',
    },
    placeholder: {
      type: String,
      default: '说点什么吧...',
    },
    inputStyle: {
      type: Number,
      default: 0,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showInlineButton() {
      return !!(this.inputBoxFocused || this.inputContent)
    },
  },
  destroyed() {
    document.removeEventListener('click', this.hideButton)
  },
  mounted() {
    document.addEventListener('click', this.hideButton)
  },
  methods: {
    focus() {
      this.$refs.inputBox.focus()
    },
    hideButton(e) {
      if (this.$refs.container.contains(e.target)) {
        return
      }

      if (!this.$refs.container.contains(e.target)) {
        this.inputBoxFocused = false
      }
    },
    onInputFocus(e) {
      this.inputBoxFocused = true
    },
    onInputBlur(e) {
      if (this.$refs.container.contains(e.target)) {
        return
      }

      this.inputBoxFocused = false
    },
    handlerSubmit(e) {
      if (e.target.hasAttribute('disabled') || e.keyCode === 13) {
        return
      }
      this.$emit('submit', this.inputContent)
    },
    handlerKeydown(e) {
      if (e.keyCode === 13) {
        e.preventDefault()
        if (!e.target.hasAttribute('disabled')) {
          this.$emit('submit', this.inputContent)
        }
      }
    },
    handlerEmojiSelected(e) {
      this.$refs.inputBox.focus()
      const clonedNode = e.target.cloneNode(true)
      clonedNode.style.verticalAlign = 'text-top'
      document.execCommand('insertHTML', false, clonedNode.outerHTML)
    },
  },
}
</script>

<style scoped lang="scss">
.comment-editor {
  padding-left: 34px;
}
.input-wrapper {
  &.inline {
    display: flex;
    .input-box {
      flex: 1;
      margin-right: 14px;
    }
  }
  .input-append {
    width: 30px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    &.hasbg {
      background: #eee;
    }
  }
}

.footer-action {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.submit-tiptext {
  margin-left: auto;
  margin-right: 4px;
  font-size: 14px;
  color: #ccc;
}
.submit-button {
  align-self: flex-end;
  transition: all 0.2s;
  width: 50px;
  height: 20px;
  line-height: 20px;
  background: #dcddde;
  border-radius: 17px;
  text-align: center;
  color: white;
  user-select: none;
  font-size: 12px;
  color: rgba(54, 57, 63, 1);
  &.button-enter,
  &.button-leave-to {
    // zoom:0;
    margin-left: -40px;
    transform: scale(0, 0);
  }
  &[disabled] {
    // cursor: not-allowed;
    background: #dcddde;
  }
  &:hover {
    background: #dcddde;
    cursor: pointer;
  }
  &:not([disabled]):active {
    background: #dcddde;
  }
}
</style>
