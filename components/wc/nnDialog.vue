<template lang="pug">
.content(v-show="open" ref="dialog" v-cloak)
  dialog.nn-dialog(ref="con" :open="open")
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
      type: Boolean,
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
  async mounted() {
    const dialogPolyfill = await import('dialog-polyfill').then(
      (m) => m.default
    )
    dialogPolyfill.registerDialog(this.$refs.con)
    // const dialog = this.$refs.dialog
    // document.body.insertBefore(dialog, document.body.firstChild)
  },
  methods: {
    close() {
      this.$emit('update:open', false)
    },
  },
}
</script>
