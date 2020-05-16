<template lang="pug">
  .search
    input(v-model='key',placeholder="搜索频道名称", @keyup.enter = 'search')
    .icon-search
        i.bx.bx-search( @click = 'search' )
</template>
<script>
export default {
  name: 'CommunitySearch',
  data() {
    return {
      key: '',
    }
  },
  methods: {
    search() {
      this.$store.dispatch('community/searchCommunity', this.key)
    },
  },
}
</script>
<style lang="scss" scoped>
.search {
  padding-left: 10px;
  position: relative;
  input {
    width: 220px;
    height: 28px;
    background: #222428;
    border-radius: 14px;
    border: none;
    padding-left: 10px;
    font-size: 14px;
    color: #72767d;
  }
  .icon-search {
    position: absolute;
    right: 20px;
    top: 5px;
    i {
      font-size: 20px;
      color: #72767d;
      cursor: pointer;
    }
  }
}
</style>
