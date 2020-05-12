<template lang="pug">
.content
  dialog.nn-dialog(ref="con" :open="open")
    .icon.nn-dialog-close(@click="close")
      i.bx.bx-x
    header.nn-dialog-header
      h4.no-margin
        slot(name="header") {{title}}
    .nn-dialog-body
      slot
    footer.nn-dialog-footer
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
  },
  async mounted() {
    const dialogPolyfill = await import('dialog-polyfill').then(
      (m) => m.default
    )
    dialogPolyfill.registerDialog(this.$refs.con)
  },
  methods: {
    close() {
      this.$emit('update:open', false)
    },
  },
}
</script>
