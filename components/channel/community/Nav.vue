<template lang="pug">
  .community-nav-item
    n-link( :to="nav.to" :class="{ 'community-cur': isCur }" )
        i( :class="nav.icon" )
        span {{ nav.title }}
</template>
<script>
export default {
  name: 'CommunityNav',
  props: ['nav'],
  data() {
    return {}
  },
  created() {
    console.log(this.$route)
  },
  computed: {
    isCur() {
      return this.$route.fullPath === this.nav.to
    },
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.community-nav-item {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  margin-bottom: 2px;
  a {
    display: block;
    color: #72767d;
    border-radius: 10px;
    padding-left: 20px;
    i {
      margin-right: 10px;
      font-size: 14px;
    }
    &:hover {
      background: #393c43;
      color: #fff;
      cursor: pointer;
    }
  }
  .community-cur {
    background: #393c43;
    color: #fff;
  }
}
</style>
