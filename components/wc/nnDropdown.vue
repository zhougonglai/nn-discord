<template lang="pug">
.nn-dropdown
  .nn-dropdown-content
    | {{label}}
  .nn-dropdown-menus(:class="[position]")
    slot
</template>
<script>
export default {
  name: 'NnDropdown',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: [String, Number],
      default: '',
    },
    position: {
      type: String,
      default: 'bottom',
    },
  },
  provide() {
    return {
      dropdown: this,
    }
  },
}
</script>
