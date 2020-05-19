<style scoped lang="scss">
.item {
  height: 40px;
  color: #dcddde;
  padding: 0 20px;
  margin: 8px 0 0 0;
  .Avatar {
    @include Circle(32px);
  }
}
</style>
<template>
  <div class="item flex aic">
    <img src="http://placekitten.com/40/40" class="Avatar mr-1" />
    佛文峰我佛为
  </div>
</template>
<script>
export default {
  name: 'MembersItem',
  data() {
    return {
      // id:1
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
    test() {
      console.log('test')
    },
  },
}
</script>
