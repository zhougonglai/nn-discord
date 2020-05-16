<template lang="pug">
main#placehold
  el-button.sign-in(@click="openSignForm()") 登录
  nn-dialog(:open.sync="dialog.status" clear)
    Box(v-if="dialog.status" :type="dialog.types[dialog.status]" @switchSignForm="openSignForm")
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
      dialog: {
        status: 0,
        types: [
          '',
          'SignVerify',
          'SignIn',
          'SignAccount',
          'SignUp',
          'ForgetPassword',
        ],
      },
    }
  },
  methods: {
    openSignForm(status = 1) {
      this.dialog.status = status
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
