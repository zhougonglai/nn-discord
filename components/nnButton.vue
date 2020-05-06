<template lang="pug">
button.nn-btn(
  :class=`[
    size ? size : '',
    type ? type : ''
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
