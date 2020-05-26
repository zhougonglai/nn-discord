<style scoped lang="scss">
ul {
  background: #18191c;
  position: absolute;
  margin: 0;
  width: 165px;
  border: 1px solid #000;
  padding: 10px 0;
  border-radius: 4px;
  cursor: pointer;
}
li {
  cursor: pointer;
  list-style: none;
  padding: 9px;
  color: #9fa4ab;
  &:hover {
    background: #2a2c30;
    color: #dcddde;
  }
  display: flex;
  justify-content: space-between;
}
.RightMenu {
  position: fixed;
  li {
    position: relative;
    ul {
      display: none;
      position: absolute;
      left: 164px;
      top: -10px;
      li {
        color: #fff;
      }
    }
    &:hover ul {
      display: block;
    }
  }
}
</style>
<template>
  <ul
    v-if="show"
    :style="{ left: x + 'px', top: y + 'px' }"
    @contextmenu.prevent
    class="RightMenu"
  >
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: 'NnRightMenu',
  data() {
    return {
      show: false,
      x: 0,
      y: 0,
      data: null,
    }
  },
  computed: {
    // test() {
    //   return 0;
    // }
  },
  mounted() {
    // console.log();
  },
  methods: {
    open(e, data) {
      this.data = data
      this.x = e.x
      this.y = e.y
      this.show = true
    },
    close() {
      this.show = false
    },
  },
}
</script>
