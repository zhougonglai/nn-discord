<template lang="pug">
  .community-public-title
    span &lt;&nbsp;更多
    SvgIcon( :iconClass="icon" )
    b {{title}}
</template>
<script>
export default {
  name: 'CommunityPublicTitle',
  props: ['title', 'to', 'icon'],
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.community-public-title {
  color: rgba(220, 221, 222, 1);
  font-size: 12px;
  padding: 15px 0;
  span {
    font-weight: normal;
    float: right;
    color: rgba(114, 118, 125, 1);
    cursor: pointer;
  }
  b {
    font-weight: normal;
    margin-left: 5px;
  }
}
</style>
