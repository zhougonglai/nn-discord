<template lang="pug">
.nn-dropdown
  .nn-dropdown-content(
    :class="[drop ? 'active' : '']"
    @click="showDropdown"
    @mouseover="showDropdown"
    @mouseleave="hideDropdown"
    v-click-outside="hideDropdownIm"
  )
    | {{label}}
    BxsDownArrow.nn-dropdown-triangle
    .nn-dropdown-menus(:class="[position]" v-if="drop")
      slot
</template>
<script>
import BxsDownArrow from '~/assets/icons/BxsDownArrow.svg'

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
  components: {
    BxsDownArrow,
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
