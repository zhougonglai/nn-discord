<template lang="pug">
label.nn-radio
  input.nn-radio-input(
    v-bind="$attrs"
    type="radio"
    :checked="value === label"
    :name="name"
    :value="value"
    v-on="listeners")
  span.nn-radio-content
    span.nn-radio-border
    span.nn-radio-circle
  span.nn-radio-label
    slot
</template>
<script>
export default {
  name: 'NnRadio',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Boolean, Number],
      default: '',
    },
    label: {
      type: [String, Boolean, Number],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: () => this.$emit('input', this.label),
        click: () => this.$emit('input', this.label),
      }
    },
  },
}
</script>
