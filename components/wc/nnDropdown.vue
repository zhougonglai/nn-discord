<template lang="pug">
.nn-dropdown
  .nn-dropdown-content(
    @click="showDropdown"
    @mouseover="showDropdown"
    @mouseleave="hideDropdown"
    v-click-outside="hideDropdownIm"
  )
    | {{label}}
  .nn-dropdown-menus(:class="[position]" v-if="drop")
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
  data() {
    return {
      drop: 0,
    }
  },
  methods: {
    showDropdown() {
      if (!this.drop) {
        this.drop = 1
      } else {
        clearTimeout(this.drop)
      }
    },
    hideDropdown() {
      this.drop = setTimeout(this.hideDropdownIm, 650)
    },
    hideDropdownIm() {
      this.drop = 0
    },
  },
}
</script>
