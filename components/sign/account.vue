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
        type="text"
        name="text"
        ref="username"
        autocomplete="emall"
        placeholder="NN号/邮箱号"
        v-model.trim="sign.username")
      .dropdown-menus.top.start(v-if="error.username.status")
        small.dropdown-menu.nohover(v-text="error.username.msg")
      i.form-clear.el-icon-error(v-if="sign.username" @click="sign.username = ''")
    .form-contrl
      label(for="pwd")
        Lock
      input#pwd.form-input(
        type="pwdEncry"
        name="pwdEncry"
        ref="pwdEncry"
        placeholder="密码"
        autocomplete="current-password"
        v-model="sign.pwdEncry")
      .dropdown-menus.bottom.start(v-if="error.pwdEncry.status")
        small.dropdown-menu.nohover(v-text="error.pwdEncry.msg")
      i.form-clear.el-icon-error(v-if="sign.pwdEncry" @click="sign.pwdEncry = ''")
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
import { mapActions } from 'vuex'
import md5 from 'js-md5'
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
        username: {
          status: false,
          msg: '',
        },
        pwdEncry: {
          status: false,
          msg: '',
        },
      },
      sign: {
        type: 'nn',
        username: '',
        pwdEncry: '',
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
      if (this.$refs.username.checkValidity()) {
        this.error.username.status = false
        return true
      } else {
        this.error.username.status = true
        if (this.$refs.username.validity.valueMissing) {
          this.error.username.msg = '请填写此字段'
          return false
        }
        if (this.$refs.username.validity.typeMismatch) {
          this.error.username.msg = '请填写正确的邮箱'
          return false
        }
        this.error.username.msg = '请填写此字段'
        return false
      }
    },
    pwdValidity() {
      if (this.$refs.pwdEncry.checkValidity()) {
        this.error.pwdEncry.status = false
        return true
      } else {
        this.error.pwdEncry.status = true
        this.error.pwdEncry.msg =
          this.$refs.pwdEncry.validationMessage || '请填写此字段'
        return false
      }
    },
    async login() {
      if (!this.accountValidity()) return
      if (!this.pwdValidity()) return
      if (this.$refs.form.checkValidity()) {
        this.$nuxt.$loading.start()
        await this.loginByPwd({
          ...this.sign,
          pwdEncry: md5(this.sign.pwdEncry),
        }).catch((e) => {
          this.error.msg = e
          this.error.status = true
        })
        // await this.findServerInfoByUserId(user)
        await this.getCommunityGroup()
        await this.getFriendsGroup()
        this.$parent.closeDialog()
        this.$router.push({ path: '/me/' }, this.$nuxt.$loading.finish)
      }
    },
    ...mapActions(['loginByPwd', 'getCommunityGroup', 'getFriendsGroup']),
    ...mapActions('channel', ['findServerInfoByUserId']),
  },
}
</script>
<style lang="scss" scoped>
#sign-account {
  height: 100%;
}
</style>
