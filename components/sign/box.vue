<template lang="pug">
#box
  component(:is="type")
</template>
<script>
import SignIn from './in'
import SignUp from './up'
import SignVerify from './verify'

export default {
  name: 'SignBox',
  props: {
    type: {
      type: String,
      default: 'SignIn',
    },
  },
  components: {
    SignIn,
    SignUp,
    SignVerify,
  },
  methods: {
    closeDialog() {
      this.$parent.close()
    },
    switchSignForm(status) {
      this.$emit('switchSignForm', status)
    },
  },
}
</script>
<style lang="scss" scoped>
#box {
  width: 915px;
  height: 542px;
  background-image: url('../../assets/imgs/sign_bg.png');
  background-position: center;
  background-size: cover;
  padding: 60px 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
</style>
