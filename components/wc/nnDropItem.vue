<template lang="pug">
.nn-dropdown-menu(
  :class="[dropdown.value === value ? 'active': '']"
  @click="$parent.$emit('input', value)")
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
}
</script>
