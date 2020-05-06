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
  .backdrop(v-if="backdrop && open")
</template>
<script>
import dialogPolyfill from 'dialog-polyfill'

export default {
  name: 'NnDialog',
  props: {
    open: {
      default: false,
      type: Boolean
    },
    backdrop: {
      default: true,
      type: Boolean
    },
    title: {
      default: '',
      type: String
    },
    parent: {
      type: [Element, HTMLElement],
      default: null
    }
  },
  mounted() {
    dialogPolyfill.registerDialog(this.$refs.con)
  },
  methods: {
    close() {
      this.$emit('update:open', false)
    }
  }
}
</script>
