<template lang="pug">
#more more
</template>
<script>
export default {
  name: 'More',
  key(route) {
    return route.fullPath
  },
}
</script>
<style lang="scss" scoped>
#more {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
