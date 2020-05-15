<template lang="pug">
.nn-dialog(v-if="open" ref="dialog")
  .nn-dialog-content(ref="con" :open="open")
    .icon.nn-dialog-close(v-if="!noClose" @click="close")
      i.bx.bx-x
    header.nn-dialog-header(v-if="!clear")
      h4.no-margin
        slot(name="header") {{title}}
    .nn-dialog-body
      slot
    footer.nn-dialog-footer(v-if="!clear")
      slot(name="footer")
        .spacer
        nn-btn 取消
        nn-btn 确定
  .backdrop(v-if="backdrop && open" @click="close")
</template>
<script>
import nnButton from './nnButton'

export default {
  name: 'NnDialog',
  components: {
    [nnButton.name]: nnButton,
  },
  props: {
    open: {
      default: false,
      type: [Boolean, Number],
    },
    backdrop: {
      default: true,
      type: Boolean,
    },
    title: {
      default: '',
      type: String,
    },
    clear: {
      type: Boolean,
      default: false,
    },
    noClose: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    open(val) {
      this.$nextTick(() => {
        if (val) {
          this.insetBody()
        }
      })
    },
  },
  mounted() {
    if (this.open) {
      this.insetBody()
    }
  },
  methods: {
    close() {
      this.$emit('update:open', false)
    },
    insetBody() {
      const dialog = this.$refs.dialog
      document.body.insertBefore(dialog, document.body.firstChild)
    },
  },
}
</script>
