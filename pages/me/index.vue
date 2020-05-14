<template lang="pug">
PageHead
  MeTabs 个人中心
</template>
<script>
import PageHead from '~/components/channel/PageHead'
import MeTabs from '~/components/channel/MeTabs'

export default {
  name: 'Profile',
  components: {
    [PageHead.name]: PageHead,
    [MeTabs.name]: MeTabs,
  },
}
</script>
