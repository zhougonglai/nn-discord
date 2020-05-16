<template lang="pug">
#sign-account
  h3.v-tac.no-select 用户登录
  small.error(v-if="error.status" v-text="error.msg")
  form.form(novalidate role="form" ref="form")
    .form-contrl.dropdown-link
      label(for="username")
        User
      input#username.form-input(
        required
        type="email"
        name="email"
        ref="mail"
        autocomplete="emall"
        placeholder="NN号/邮箱号"
        v-model.trim="sign.mail")
      .dropdown-menus.top.start(v-if="error.mail.status")
        small.dropdown-menu.nohover(v-text="error.mail.msg")
      i.form-clear.el-icon-error(v-if="sign.mail" @click="sign.mail = ''")
    .form-contrl
      label(for="pwd")
        Lock
      input#pwd.form-input(
        type="password"
        name="password"
        ref="password"
        placeholder="密码"
        autocomplete="current-password"
        v-model="sign.password")
      .dropdown-menus.bottom.start(v-if="error.password.status")
        small.dropdown-menu.nohover(v-text="error.password.msg")
      i.form-clear.el-icon-error(v-if="sign.password" @click="sign.password = ''")
  .flex.full-width.my-2
    el-checkbox(v-model="remember") 记住我
    .spacer
    el-checkbox(v-model="autologin") 自动登录
  .my-2
    el-button.full-width(type="primary" @click="login") 立即登录
  .flex.full-width
    .tap(@click="$parent.switchSignForm(5)") 忘记密码
    .spacer
    .tap(@click="$parent.switchSignForm(4)") 立即注册
  .flex.jcc.my-5
    small.dropdown-link.text-lightgray(
      @click="showDropdown"
      @mouseover="showDropdown"
      @mouseleave="hideDropdown"
      v-click-outside="hideDropdownIm"
    ) 其他登录方式 >
      .dropdown-menus.bottom(v-if="dropdown")
        .dropdown-menu(@click="$parent.switchSignForm(1)") 手机号登录
        .dropdown-menu(@click="$parent.switchSignForm()") 短信验证登录
</template>
<script>
import User from '~/assets/icons/user.svg'
import Lock from '~/assets/icons/lock.svg'

export default {
  name: 'SignAccount',
  components: {
    User,
    Lock,
  },
  data() {
    return {
      remember: true,
      autologin: true,
      dropdown: 0,
      error: {
        status: false,
        msg: '',
        mail: {
          status: false,
          msg: '',
        },
        password: {
          status: false,
          msg: '',
        },
      },
      sign: {
        mail: '',
        password: '',
      },
    }
  },
  methods: {
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
    accountValidity() {
      if (this.$refs.mail.checkValidity()) {
        this.error.mail.status = false
        return true
      } else {
        this.error.mail.status = true
        if (this.$refs.mail.validity.valueMissing) {
          this.error.mail.msg = '请填写此字段'
          return false
        }
        if (this.$refs.mail.validity.typeMismatch) {
          this.error.mail.msg = '请填写正确的邮箱'
          return false
        }
        this.error.mail.msg = '请填写此字段'
        return false
      }
    },
    pwdValidity() {
      if (this.$refs.password.checkValidity()) {
        this.error.password.status = false
        return true
      } else {
        this.error.password.status = true
        this.error.password.msg =
          this.$refs.password.validationMessage || '请填写此字段'
        return false
      }
    },
    async login() {
      if (!this.accountValidity()) return
      if (!this.pwdValidity()) return
      if (this.$refs.form.checkValidity()) {
      }
    },
  },
}
</script>
<style lang="scss" scoped>
#sign-account {
  height: 100%;
}
</style>
