<template lang="pug">
.nn-dropdown-menu(
  :class="[dropdown.value === value ? 'active': '']"
  @click="change")
  slot
</template>
<script>
export default {
  name: 'NnDropitem',
  inject: ['dropdown'],
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    change() {
      this.$parent.onChange(this.value)
    },
  },
}
</script>
