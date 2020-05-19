<style scoped lang="scss">
// 留言板
.MessageBoard {
  padding: 34px 25px;
  .title {
    color: #dcddde;
  }
}
</style>
<template>
  <div class="MessageBoard">
    <div class="title">留言板</div>
    <Item v-for="a in 2" :key="a.id">
      <Item v-for="b in 3" :key="b.id" type="two"></Item>
    </Item>
  </div>
</template>
<script>
import Item from './messageBoardItem'

export default {
  name: 'MessageBoard',
  components: { Item },
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
