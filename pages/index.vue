<template lang="pug">
main#placehold
  CircleLoader
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Placehold',
  layout: 'loading',
  mounted() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      const user = await this.getUser()
      this.$router.push(
        { name: 'user-id', params: { id: user.id } },
        this.$nuxt.$loading.finish
      )
    })
  },
  methods: {
    ...mapActions(['getUser'])
  }
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
