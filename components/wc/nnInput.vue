<template lang="pug">
.nn-input
  input.nn-input--input(
    ref="input"
    :value="value"
    v-bind="$attrs"
    :type="$attrs.type ? $attrs.type : 'text'"
    v-on="listeners"
  )
</template>
<script>
export default {
  name: 'NnInput',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (evt) => {
          this.$emit('input', evt.target.value)
        },
        focus: (evt) => {
          this.$emit('focus', evt)
        },
        blur: (evt) => {
          this.$emit('blur', evt)
        },
      }
    },
  },
}
</script>
