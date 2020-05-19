<template>
  <PageHead>
    <MeTabs>
      <div class="nav-left">
        ddd
      </div>
      <div class="right flex-sub">
        ddd
      </div>
    </MeTabs>
  </PageHead>
</template>
<script>
import PageHead from '~/components/channel/PageHead'
import MeTabs from '~/components/channel/MeTabs'
export default {
  name: 'Setup',
  components: {
    [PageHead.name]: PageHead,
    [MeTabs.name]: MeTabs,
  },
}
</script>
