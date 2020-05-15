<template lang="pug">
#box
  transition(name="scale")
    component(:is="type")
</template>
<script>
import SignIn from './in'
import SignUp from './up'

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
  },
  methods: {
    closeDialog() {
      this.$parent.close()
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
