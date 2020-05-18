<template lang="pug">
.news-item-transpond
    .news-item-transpond-title
        span EDG王者荣耀 
        SvgIcon( icon-class="iconofficial" )
        span @EDG电子俱乐部官方
    NewsItemFront( :num="20" :content="item.forwardComment" )
    NewsItemBox( :item="{ title: item.title, content: item.content, thumb: item.thumb }" )
    
</template>
<script>
import NewsItemFront from '~/components/channel/community/NewsItemFront'
import NewsItemBox from '~/components/channel/community/NewsItemBox'
export default {
  name: 'NewsItemTranspond',
  props: ['item'],
  data() {
    return {}
  },
  components: {
    NewsItemBox,
    NewsItemFront,
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.news-item-transpond {
  border-radius: 4px;
  background: rgba(48, 51, 58, 1);
  padding: 10px;
  margin-top: 15px;
  .news-item-transpond-title {
    color: rgba(220, 221, 222, 1);
    padding: 10px 0;
    .icon {
      margin-right: 15px;
    }
  }
}
</style>
