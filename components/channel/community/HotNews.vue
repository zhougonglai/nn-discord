<template lang="pug">
ul.community-hot
    li( v-for=" (item, index) in hotNews" )
        i.bx.bx-search
        n-link( :to="item.to" ) {{ item.title }}
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'CommunityHotNews',
  computed: {
    ...mapState('community', ['hotNews']),
  },
}
</script>
<style lang="scss" scoped>
ul {
  height: 90px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    i {
      font-size: 14px;
      vertical-align: middle;
    }
    a {
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
