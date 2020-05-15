<template lang="pug">
main#placehold
  el-button.sign-in(@click="openSignForm") 登录
  nn-dialog(:open.sync="sign.status" clear)
    Box(v-if="sign.status" :type="sign.types[sign.status]")
  iframe(src="https://www.nn.com/")
  //- CircleLoader
</template>
<script>
import Box from '~/components/sign/box'

export default {
  name: 'Placehold',
  components: {
    Box,
  },
  data() {
    return {
      sign: {
        status: 0,
        types: ['', 'SignIn', 'SignUp'],
      },
    }
  },
  methods: {
    openSignForm() {
      this.sign.status = 1
    },
  },
}
</script>
<style lang="scss" scoped>
main#placehold::v-deep {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  svg {
    width: 25vw;
    height: 25vh;
  }
}
.sign-in {
  position: absolute;
  top: 15px;
  right: 15px;
}

iframe {
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
