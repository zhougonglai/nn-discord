<template lang="pug">
.vertical-tab-panel(v-if="tabs.active === uid")
  slot
</template>
<script>
export default {
  name: 'VerticalTabPanel',
  props: {
    label: {
      type: [String, Number],
      default: '',
    },
    icon: {
      type: String,
      required: true,
    },
  },
  inject: ['tabs'],
  data() {
    return {
      uid: Math.random().toString(16).slice(-10),
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { uid, label, icon } = this
      this.$parent.initTab({
        uid,
        label,
        icon,
      })
    })
  },
}
</script>
<style lang="scss" scoped>
.vertical-tab-panel {
  padding: 32px 28px;
  min-height: 100%;
}
</style>
