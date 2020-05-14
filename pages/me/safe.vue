<template lang="pug">
PageHead
  MeTabs 账号安全
</template>
<script>
import PageHead from '~/components/channel/PageHead'
import MeTabs from '~/components/channel/MeTabs'

export default {
  name: 'Safe',
  components: {
    [PageHead.name]: PageHead,
    [MeTabs.name]: MeTabs,
  },
}
</script>
