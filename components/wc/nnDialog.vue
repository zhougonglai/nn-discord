<template lang="pug">
.content
  dialog.nn-dialog(ref="con" :open="open")
    button.nn-btn.icon.nn-dialog-close(@click="close")
      i.bx.bx-x
    header.nn-dialog-header
      h4.no-margin {{title}}
    .nn-dialog-body
      slot
    footer.nn-dialog-footer(slot="footer") footer
  .backdrop(v-if="backdrop && open" @click="close")
</template>
<script>
export default {
  name: 'NnDialog',
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
