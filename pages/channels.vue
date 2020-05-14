<template lang="pug">
nuxt-child
</template>
<script>
export default {
  name: 'Community',
  key(route) {
    return route.fullPath
  },
}
</script>
