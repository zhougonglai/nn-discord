<style scoped lang="scss">
.page {
  background-color: #36393f;
}
.demo {
  padding: 10px;
  border: 1px solid #ccc;
  margin: 0 20px;
  width: 100px;
}
</style>
<template>
  <div class="page spacer">
    <div
      v-for="a in 10"
      @contextmenu.prevent="$refs.menu.open($event, a)"
      v-click-outside="
        () => {
          $refs.menu && $refs.menu.close()
        }
      "
      class="demo"
    >
      aaaaa
    </div>
    <nnRightMenu ref="menu">
      <li>1111</li>
      <li>1111</li>
      <li>
        1111 <i class="el-icon-arrow-right"></i>
        <ul>
          <li @click="test('sss')">
            2222
          </li>
          <li>
            2222
          </li>
        </ul>
      </li>
      <li>1111</li>
      <li>1111</li>
    </nnRightMenu>
  </div>
</template>
<script>
export default {
  data() {
    return {}
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
    test(name) {
      console.log(name)
    },
  },
}
</script>
