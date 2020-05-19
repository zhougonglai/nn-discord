<template lang="pug">
PageHead
  MeTabs 动态
</template>
<script>
import PageHead from '~/components/channel/PageHead'
import MeTabs from '~/components/channel/MeTabs'

export default {
  name: 'Dynamic',
  components: {
    [PageHead.name]: PageHead,
    [MeTabs.name]: MeTabs,
  },
}
</script>
