<template lang="pug">
PageHead
  MeTabs 游戏授权
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
