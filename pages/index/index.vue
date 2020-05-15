<template lang="pug">
main#placehold
  CircleLoader
</template>
<script>
export default {
  name: 'Placehold',
}
</script>
<style lang="scss" scoped>
main#placehold::v-deep {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 25vw;
    height: 25vh;
  }
}
</style>
