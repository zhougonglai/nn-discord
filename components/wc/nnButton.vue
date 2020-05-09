<template lang="pug">
button.nn-btn(
  :class=`[
    size ? size : '',
    type ? type : '',
    rund ? 'rund' : '',
    block? 'block': ''
  ]`
  v-bind="$attrs"
  v-on="listeners")
  slot
</template>
<script>
export default {
  name: 'NnBtn',
  props: {
    size: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    rund: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners
      }
    }
  }
}
</script>
