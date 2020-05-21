<style scoped lang="scss">
.Rechargemask {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  right: 0;
  bottom: 0;
  z-index: 1;
}
.dialog-Recharge {
  position: relative;
  z-index: 99;
  iframe {
    width: 1056px;
    height: 660px;
  }
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  clip: rect(29px 1052px 658px 14px);

  .close {
    width: 50px;
    height: 50px;
    right: 8px;
    top: 30px;
    position: absolute;
    cursor: pointer;
  }
}
</style>
<template>
  <div class="Rechargemask">
    <div class="dialog-Recharge">
      <iframe :src="src" frameborder="0"></iframe>
      <div @click="$emit('close')" class="close"></div>
    </div>
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
