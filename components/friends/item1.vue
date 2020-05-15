<style scoped lang="scss">
.friend-item1 {
  margin: 0 20px 30px 20px;
  .Avatar {
    $w: 65px;
    width: $w;
    height: $w;
    border-radius: 50%;
  }
  .name {
    line-height: 20px;
    font-size: 18px;
    color: #b9bbbe;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .text {
    font-size: 12px;
    line-height: 23px;
    color: #72767d;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .right {
    width: 120px;
  }
}
</style>
<template>
  <div class="friend-item1 flex">
    <n-link :to="'/'">
      <img :src="data.avatar" alt class="Avatar mr-1" />
    </n-link>
    <div class="flex column right">
      <div class="name">{{data.name}}</div>
      <div class="text">{{data.age}} | {{data.game}}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    data:Object
    // id:1,
    //  avatar:"http://placekitten.com/65/65",
    //  name:"HEBE00",
    //  age:18,
    //  game:"英雄联盟-韩服"
  },
  name:"item1",
  mounted() {
    //console.log();
  },
  computed: {
    // test() {
    //   return 0;
    // }
  },
  data() {
    return {
//id:1
};
  },
methods:{
    // test() {
    //   return 0;
    // }
}
};
</script>