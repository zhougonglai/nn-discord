<template lang="pug">
.nn-option(:class="{active: selector.value === label}" @click="clickOption")
  slot
</template>
<script>
export default {
  name: 'NnOption',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
  },
  inject: ['selector'],
  methods: {
    clickOption() {
      this.$parent.selector(this.label)
      this.$parent.active = false
    },
  },
}
</script>
