<template lang="pug">
.nn-checkbox
  input(
    class="nn-checkbox--input"
    type="checkbox"
    v-bind="$attrs"
    :checked="value || $attrs.checked"
    v-on:change="toggleValue")
  span.nn-checkbox--content
    span.nn-checkbox--check
      i.bx.bx-check.nn-checkbox--icon
  span.nn-checkbox--label
    slot
</template>
<script>
export default {
  name: 'NnCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleValue(e) {
      this.$emit('input', !this.value)
      this.$emit('change', e)
    },
  },
}
</script>
