<template lang="pug">
.nn-select(v-click-outside="closeOptions" :class="{active}")
  input.nn-select--input(
    v-bind="$attrs"
    :value="value"
    :readonly="!autocomplete"
    type="text"
    @click.stop="toggleActive"
    @keydown.esc.stop.prevent="closeOptions")
  .nn-select--icon(@click="toggleActive")
    i.bx.bxs-down-arrow
  .nn-select--content(v-if="active")
    slot
</template>
<script>
export default {
  name: 'NnSelect',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number, Boolean, Array],
      default: '',
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      selector: this,
    }
  },
  data() {
    return {
      active: false,
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (e) => {
          if (this.autocomplete) {
            this.$emit('input-change', event)
          }
        },
      }
    },
  },
  methods: {
    closeOptions() {
      this.active = false
    },
    selector(option) {
      this.$emit('input', option)
    },
    toggleActive() {
      if (this.active) {
        this.closeOptions()
      } else {
        this.active = true
      }
    },
  },
}
</script>
