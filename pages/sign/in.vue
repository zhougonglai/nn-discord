<template lang="pug">
#sign-in
  h2.title NN运营中心
  form.form.mt-2(novalidate role="form" ref="form")
    .form-contrl
      label(for="phone")
        Phone
      input#phone.form-input(
        required
        ref="phone"
        name="phone"
        type="tel"
        pattern="^[0-9]*$"
        placeholder="手机号"
        autocomplete="tel"
        v-model.number.trim="sign.mobile_num"
      )
    .form-contrl
      label(for="pwd")
        Lock
      input#pwd.form-input(
        required
        ref="password"
        name="password"
        type="password"
        placeholder="密码"
        autocomplete="current-password"
        v-model="sign.password")
  .flex.full-width.my-2.space-between
    nn-checkbox(v-model="remember") 记住我
    nn-checkbox(v-model="autologin") 自动登录
  nn-btn.block(@click="login") 登录
</template>
<script>
import Phone from '~/assets/icons/phone.svg'
import Lock from '~/assets/icons/lock.svg'
import nnCheckbox from '~/components/nnCheckbox'
import nnBtn from '~/components/nnButton'

export default {
  name: 'SignIn',
  layout: 'sign',
  components: {
    Phone,
    Lock,
    [nnCheckbox.name]: nnCheckbox,
    [nnBtn.name]: nnBtn
  },
  data() {
    return {
      remember: false,
      autologin: false,
      sign: {
        country_code: 86,
        user_type: 0,
        region_code: '',
        mobile_num: '',
        password: ''
      }
    }
  },
  methods: {
    login() {}
  }
}
</script>
<style lang="scss" scoped>
#sign-in {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    user-select: none;
  }
}
</style>
