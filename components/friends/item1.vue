<style scoped lang="scss">
.friend-item1 {
  margin: 0 20px 30px 20px;
  .Avatar {
    @include Circle(65px);
  }
  .name {
    line-height: 20px;
    font-size: 18px;
    color: #b9bbbe;
    @extend .nowrap;
  }
  .text {
    font-size: 12px;
    line-height: 23px;
    color: #72767d;
    @extend .nowrap;
  }
  .right {
    width: 120px;
  }
}
</style>
<template>
  <div class="friend-item1 flex">
    <n-link :to="'/friends/' + data.userId">
      <img :src="data.userUrl" alt class="Avatar mr-1" />
    </n-link>
    <div class="flex column right">
      <n-link :to="'/friends/' + data.userId">
        <div class="name">{{ data.nickName }}</div>
      </n-link>
      <div class="text">{{ data.birthday | age }} | {{ data.game }}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Item1',
  props: {
    data: Object,
  },
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
    // test() {
    //   return 0;
    // }
  },
}
</script>
