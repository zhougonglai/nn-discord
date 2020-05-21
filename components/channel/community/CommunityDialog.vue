<template>
  <transition
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    name="dialog-fade"
  >
    <div
      v-show="visible"
      @click.self="handleWrapperClick"
      class="el-dialog__wrapper"
    >
      <div
        ref="dialog"
        :key="key"
        :class="[
          'el-dialog',
          { 'is-fullscreen': fullscreen, 'el-dialog--center': center },
          customClass,
        ]"
        :aria-label="title || 'dialog'"
        :style="style"
        role="dialog"
        aria-modal="true"
      >
        <div class="nn-dialog__header">
          <slot name="title">
            <span class="nn-dialog__title">{{ title }}</span>
          </slot>
          <button
            @click="handleClose"
            v-if="showClose"
            type="button"
            class="nn-dialog__headerbtn"
            aria-label="Close"
          >
            <i class="iconfont iconPopboxclosed"></i>
          </button>
        </div>
        <div v-if="rendered" class="nn-dialog__body"><slot></slot></div>
        <div v-if="$slots.footer" class="el-dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from 'element-ui/src/utils/popup'
import Migrating from 'element-ui/src/mixins/migrating'
import emitter from 'element-ui/src/mixins/emitter'
export default {
  name: 'ElDialog',
  mixins: [Popup, emitter, Migrating],
  props: {
    title: {
      type: String,
      default: '',
    },
    modal: {
      type: Boolean,
      default: true,
    },
    modalAppendToBody: {
      type: Boolean,
      default: true,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: '40%',
    },
    fullscreen: Boolean,
    customClass: {
      type: String,
      default: '',
    },
    top: {
      type: String,
      default: '15vh',
    },
    beforeClose: {
      type: Function,
      default: null,
    },
    center: {
      type: Boolean,
      default: false,
    },
    destroyOnClose: Boolean,
  },
  data() {
    return {
      closed: false,
      key: 0,
    }
  },
  computed: {
    style() {
      const style = {}
      if (!this.fullscreen) {
        style.marginTop = this.top
        if (this.width) {
          style.width = this.width
        }
      }
      return style
    },
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false
        this.$emit('open')
        this.$el.addEventListener('scroll', this.updatePopper)
        this.$nextTick(() => {
          this.$refs.dialog.scrollTop = 0
        })
        if (this.appendToBody) {
          document.body.appendChild(this.$el)
        }
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper)
        if (!this.closed) this.$emit('close')
        if (this.destroyOnClose) {
          this.$nextTick(() => {
            this.key++
          })
        }
      }
    },
  },
  mounted() {
    if (this.visible) {
      this.rendered = true
      this.open()
      if (this.appendToBody) {
        document.body.appendChild(this.$el)
      }
    }
  },
  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  methods: {
    getMigratingConfig() {
      return {
        props: {
          size: 'size is removed.',
        },
      }
    },
    handleWrapperClick() {
      if (!this.closeOnClickModal) return
      this.handleClose()
    },
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide)
      } else {
        this.hide()
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false)
        this.$emit('close')
        this.closed = true
      }
    },
    updatePopper() {
      this.broadcast('ElSelectDropdown', 'updatePopper')
      this.broadcast('ElDropdownMenu', 'updatePopper')
    },
    afterEnter() {
      this.$emit('opened')
    },
    afterLeave() {
      this.$emit('closed')
    },
  },
}
</script>
<style lang="scss">
.nn-dialog__header {
  height: 40px;
  line-height: 40px;
  padding: 0 18px;
  .nn-dialog__title {
    font-size: 14px;
    color: rgba(220, 221, 222, 1);
  }
  .nn-dialog__headerbtn {
    float: right;
    border: none;
    background: none;
    padding: 0;
    margin: 10px 0 0;
    i {
      color: #72767d;
      cursor: pointer;
    }
  }
}
.nn-dialog__body {
  padding: 5px 18px 15px;
  font-size: 14px;
}
</style>
