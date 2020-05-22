<template>
  <div
    ref="container"
    :class="{ 'comment-editor1': inputClass === 'content2' }"
    class="comment-editor"
  >
    <div :class="{ inline }" class="input-wrapper">
      <InputBox
        ref="inputBox"
        :rows="2"
        @focus="onInputFocus"
        @blur="onInputBlur"
        @keyup.enter.native="handlerSubmit"
        @keydown="handlerKeydown"
        v-model="inputContent"
        :placeholder="placeholder"
        :focused="showInlineButton"
        :inputClass="inputClass"
        :type="inline ? 'text' : 'textarea'"
        content-type="rich"
        class="input-box"
      >
        <div
          slot="append"
          v-if="inline"
          :class="['input-append', { hasbg: !showInlineButton }]"
        >
          <EmojiPicker
            ref="emojiPicker"
            @activated="inputBoxFocused = true"
            @selected="handlerEmojiSelected"
            :button-text-visible="false"
            trigger-pick="click"
            picker-position="left"
          ></EmojiPicker>
        </div>
      </InputBox>
      <transition name="button">
        <div
          ref="button"
          :disabled="!inputContent"
          v-show="showInlineButton && inline"
          @click="handlerSubmit"
          class="submit-button inline"
        >
          {{ buttonText }}
        </div>
      </transition>
    </div>
    <div
      v-if="!inline"
      :class="{ 'footer-action1': inputClass === 'content2' }"
      class="footer-action"
    >
      <EmojiPicker
        @activated="$refs.inputBox.focus()"
        @selected="handlerEmojiSelected"
        trigger-pick="click"
      >
        <slot></slot>
      </EmojiPicker>
      <span class="submit-tiptext"><slot></slot></span>
      <div
        @click="handlerSubmit"
        :disabled="!inputContent"
        class="submit-button"
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
  props: {
    buttonText: {
      type: String,
      default: '提交',
    },
    placeholder: {
      type: String,
      default: '说点什么吧...',
    },
    inputClass: {
      type: String,
      default: undefined,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: false,
      inputContent: '',
      inputBoxFocused: false,
    }
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
        if (this.inputContent) {
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
.comment-editor1 {
  padding-left: 0px;
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
.footer-action1 {
  .submit-button {
    width: 80px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin-left: 10px;
  }
  padding-bottom: 10px;
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
