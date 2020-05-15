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
}
</script>
<style lang="scss" scoped>
#box {
  width: 1000px;
  height: 474px;
  background-image: url('../../assets/imgs/sign_bg.png');
  background-position: center;
  background-size: cover;
  padding: 64px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
</style>
