<template>
  <div class>
    <div type="text" class="input-box-wrapper">
      <div
        ref="richText"
        :class="[
          { focused },
          type,
          { content1: inputClass === 'content1' },
          { content2: inputClass === 'content2' },
        ]"
        v-on="listeners"
        v-bind="$attrs"
        :contenteditable="contenteditable"
        class="content"
      ></div>
      <div class="append-wrapper">
        <slot name="append"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputBox',
  props: {
    focused: {
      type: Boolean,
      default: false,
    },
    contentType: {
      type: String,
      default: 'plain',
      validator(value) {
        return ['plain', 'rich'].includes(value)
      },
    },
    inputClass: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'textarea'].includes(value)
      },
    },
    // rows: {
    //   type: Number,
    // },
  },
  data() {
    return {
      contenteditable: true,
    }
  },
  computed: {
    listeners() {
      return Object.assign({}, this.$listeners, {
        input: function (e) {
          const inputContent =
            this.contentType === 'plain'
              ? e.target.textContent
              : e.target.innerHTML
          this.$emit('input', inputContent)
        }.bind(this),
      })
    },
  },
  methods: {
    focus() {
      this.$refs.richText.focus()
    },
  },
}
</script>

<style scoped lang="scss">
.input-box-wrapper {
  position: relative;
}

.content {
  height: 36px;
  line-height: 20px;
  overflow: auto;
  font-size: 14px;
  color: #72767d;
  border: 1px solid #36393f;
  border-radius: 3px;
  padding: 7px 10px;
  padding-right: 30px;
  position: relative;
  &::-webkit-scrollbar {
    width: 0;
  }
  &.text {
    min-height: 1.2em;
  }

  &:empty:before {
    content: attr(placeholder);
    color: #72767d;
    position: absolute;
    left: 10px;
    top: 7px;
    font-size: 14px;
  }
  &.focused {
    cursor: text;
    color: #72767d;
    border: 1px solid #36393f;
  }
  &:focus {
    outline: none;
    border: #dcddde 1px solid;
    background: rgba(54, 57, 63, 1);
    color: #dcddde;
  }
}

.content1 {
  color: #72767d;
  border: 1px solid #36393f;
  background: #36393f;
  &::-webkit-scrollbar {
    width: 0;
  }
  &.text {
    min-height: 1.2em;
  }

  &:empty:before {
    content: attr(placeholder);
    color: #72767d;
    border: 1px solid #36393f;
    background: #36393f;
    position: absolute;
    left: 10px;
    top: 7px;
    font-size: 14px;
  }
  &.focused {
    color: #72767d;
    border: 1px solid #36393f;
    background: #36393f;
  }
  &:focus {
    outline: none;
    color: #72767d;
    border: 1px solid #36393f;
    background: #36393f;
  }
}
.content2 {
  color: #72767d;
  background: rgba(48, 51, 57, 1);
  border: 1px solid rgba(34, 36, 40, 1);
  height: 176px;
  &::-webkit-scrollbar {
    width: 0;
  }
  &.text {
    min-height: 1.2em;
  }

  &:empty:before {
    content: attr(placeholder);
    color: #72767d;
    left: 10px;
    top: 7px;
    font-size: 14px;
  }
  &.focused {
    color: #72767d;
    background: rgba(48, 51, 57, 1);
    border: 1px solid rgba(34, 36, 40, 1);
  }
  &:focus {
    color: #72767d;
    background: rgba(48, 51, 57, 1);
    border: 1px solid rgba(34, 36, 40, 1);
    outline: none;
  }
}

.append-wrapper {
  position: absolute;
  right: 1px;
  top: 1px;
  bottom: 1px;
  display: flex;
  cursor: pointer;
  align-items: center;
}
</style>
