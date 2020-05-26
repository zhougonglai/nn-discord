<template lang="pug">
PageHead
  MeTabs
    #author
      .block
        nn-btn(type="text" rund size="small") + 添加账号
</template>
<script>
import PageHead from '~/components/channel/PageHead'
import MeTabs from '~/components/channel/MeTabs'

export default {
  name: 'Author',
  components: {
    [PageHead.name]: PageHead,
    [MeTabs.name]: MeTabs,
  },
}
</script>
<style lang="scss" scoped>
#author {
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>
