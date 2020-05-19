<template lang="pug">
.nn-dropdown-menu(:class="[dropdown.value === value ? 'active': '']")
  slot
</template>
<script>
export default {
  name: 'NnDropdownMenu',
  inject: ['dropdown'],
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>
