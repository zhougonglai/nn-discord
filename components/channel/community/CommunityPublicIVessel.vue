<template lang="pug">
  .community-public-vessel
    dl 
        dt
            img(src="~/assets/imgs/xbox@2x.jpg", alt="alt")
        dd
            h6 
                span 收房先锋官方俱乐部
                SvgIcon( :iconClass="'iconofficial'" )
            p
                span 1200万成员 
                span 1548万热度
</template>
<script>
export default {
  name: 'CommunityPublicVessel',
  props: ['item'],
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.community-public-vessel {
  padding: 10px 0;
  dl {
    margin: 0;
    dt {
      float: left;
      width: 34px;
      height: 34px;
      img {
        width: 34px;
        height: 34px;
        border-radius: 50%;
      }
    }
    dd {
      h6 {
        font-weight: normal;
        font-size: 14px;
        color: rgba(220, 221, 222, 1);
        margin: 0;
        height: 20px;
        line-height: 20px;
        span {
          margin-right: 5px;
        }
      }
      p {
        margin: 0;
        color: rgba(114, 118, 125, 1);
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
      }
    }
  }
}
</style>
