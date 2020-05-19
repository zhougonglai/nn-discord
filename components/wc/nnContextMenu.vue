<template lang="pug">
.nn-context-menu(v-bind="$attrs" @click.prevent="menuClick")
  slot
</template>
<script>
export default {
  name: 'NnContextMenu',
  props: {
    name: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    menuClick() {
      this.$parent.$emit('menuClick', this.name)
      this.$parent.outClick()
    },
  },
}
</script>
