<style scoped lang="scss">
.dialog-Recharge {
  z-index: 99;
  iframe {
    width: 1056px;
    height: 660px;
  }
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  // border: 1px solid #222428;
  clip: rect(29px 1049px 654px 15px);
}
</style>
<template>
  <div class="dialog-Recharge">
    <iframe :src="src" frameborder="0"></iframe>
  </div>
</template>
<script>
export default {
  name: 'Recharge',
  data() {
    return {
      src: '',
    }
  },
  computed: {
    // test() {
    //   return 0;
    // }
  },
  mounted() {
    const token = ''
    // TODO 需要获取sso token
    this.src = `${process.env.Recharge_URL}recharge?account_token=${token}`
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      window.RechargeClose = () => {
        this.$emit('close')
        window.RechargeClose = undefined
      }
    }
  },
  methods: {
    // test() {
    //   return 0;
    // }
  },
}
</script>
