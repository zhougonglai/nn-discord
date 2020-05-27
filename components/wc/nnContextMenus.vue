<template lang="pug">
.nn-context(
  v-bind="$attrs"
  v-click-outside="outClick"
  @contextmenu.prevent="menusActive")
  slot
  .nn-context-menus(v-if="active" :class="[...position]" ref="menus")
    slot(name="menus")
</template>
<script>
/**
 * 右键菜单
 * @property {enum} horizontal [left, right]
 * @property {enum} vertical [top, bottom]
 */
export default {
  name: 'NnContextMenus',
  props: {
    horizontal: {
      type: String,
      default: '',
    },
    vertical: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      active: false,
      x: 'left',
      y: 'bottom',
    }
  },
  computed: {
    position() {
      return [
        this.horizontal ? this.horizontal : this.x,
        this.vertical ? this.vertical : this.y,
      ]
    },
  },
  methods: {
    outClick() {
      this.active = false
    },
    menusActive(e) {
      const { clientX, clientY } = e
      const { clientWidth, clientHeight } = document.body
      if (clientWidth - clientX < 180) {
        this.x = 'right'
      } else if (clientX < 180) {
        this.x = 'left'
      }

      if (clientHeight - clientY < 180) {
        this.y = 'top'
      } else if (clientY < 180) {
        this.y = 'bottom'
      }
      this.active = true
    },
  },
}
</script>
