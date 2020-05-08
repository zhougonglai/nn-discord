<template lang="pug">
#sign
  #parallax(:style="{transform: `translateX(${parallax.translateX}) translateY(${parallax.translateY})`}")
  #box
    nuxt
</template>
<script>
import { debounce } from 'lodash'

export default {
  name: 'SignLayout',
  head() {
    return {
      bodyAttrs: !this.theme.auto && {
        'vs-theme': this.theme.type
      }
    }
  },
  data() {
    return {
      theme: {
        auto: false,
        type: 'dark' // dark light, system
      },
      parallax: {
        translateX: '50%',
        translateY: '50%'
      }
    }
  },
  mounted() {
    const x = this.$el.clientWidth
    const y = this.$el.clientHeight
    this.$el.addEventListener('mousemove', (e) => {
      this.$nextTick(
        debounce(() => {
          this.parallax.translateX = `${((e.clientX + x * 2) / (x * 5)) * 100}%`
          this.parallax.translateY = `${((e.clientY + y * 2) / (y * 5)) * 100}%`
        }, 60)
      )
    })
  }
}
</script>
<style lang="scss" scoped>
#sign {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('../assets/imgs/bg.png');
  background-position: center;
  background-size: cover;
  overflow: hidden;
  #parallax {
    width: 1516px;
    height: 643px;
    position: absolute;
    right: 50%;
    bottom: 50%;
    background-image: url('../assets/imgs/bg_1.png');
    transition-property: transform;
    transition-timing-function: linear;
    background-position: center;
    background-size: cover;
  }
  #box {
    width: 1000px;
    height: 474px;
    background-image: url('../assets/imgs/sign_bg.png');
    background-position: center;
    background-size: cover;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 64px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
}
@media (resolution: 2dppx) {
  #sign {
    background-image: url('../assets/imgs/bg@2x.png');
  }
  #parallax {
    background-image: url('../assets/imgs/bg_1.png');
  }
  #box {
    background-image: url('../assets/imgs/sign_bg@2x.png');
  }
}
</style>
