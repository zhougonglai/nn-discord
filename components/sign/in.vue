<template lang="pug">
#sign-in
  h3.v-tac.no-select 用户登录
  form.form.mt-2(novalidate role="form" ref="form")
    .form-contrl
      label(for="phone")
        Phone
      .form-contrl__before
        | + 86
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
  .my-2
    el-button.full-width(@click="login" type="primary") 登录
  .flex.full-width
    .tap 忘记密码
    .spacer
    .tap 立即注册
  .flex.jcc.my-2
    small.dropdown-link.text-lightgray(
      @click="showDropdown"
      @mouseover="showDropdown"
      @mouseleave="hideDropdown"
      v-click-outside="hideDropdownIm"
    ) 其他登录方式 >
      .dropdown-menus.bottom(v-if="dropdown")
        .dropdown-menu(@click="$parent.switchSignForm()") 验证码登录
        .dropdown-menu NN号/邮箱号登录
</template>
<script>
import { mapActions } from 'vuex'
import Phone from '~/assets/icons/phone.svg'
import Lock from '~/assets/icons/lock.svg'

export default {
  name: 'SignIn',
  components: {
    Phone,
    Lock,
  },
  data() {
    return {
      remember: true,
      autologin: true,
      sign: {
        country_code: 86,
        user_type: 0,
        region_code: '',
        mobile_num: '',
        password: '',
      },
      dropdown: 0,
      error: {
        status: false,
        msg: '',
        mobile_num: {
          status: false,
          msg: '',
        },
        code: {
          status: false,
          msg: '',
        },
      },
      sendCodeContrl: {
        sending: false,
        time: 60,
        timer: 0,
      },
    }
  },
  methods: {
    async login() {
      this.$nuxt.$loading.start()
      await this.getUser()
      await this.getCommunityGroup()
      await this.getFriendsGroup()
      this.$parent.closeDialog()
      this.$router.push({ name: 'me' }, this.$nuxt.$loading.finish)
    },
    showDropdown() {
      if (!this.dropdown) {
        this.dropdown = 1
      } else {
        clearTimeout(this.dropdown)
      }
    },
    hideDropdown() {
      this.dropdown = setTimeout(this.hideDropdownIm, 650)
    },
    hideDropdownIm() {
      this.dropdown = 0
    },
    ...mapActions(['getUser', 'getCommunityGroup', 'getFriendsGroup']),
  },
}
</script>
<style lang="scss" scoped>
#sign-in {
}
</style>
