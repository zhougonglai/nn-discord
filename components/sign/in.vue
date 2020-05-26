<template lang="pug">
#sign-in
  h3.v-tac.no-select 用户登录
  form.form.mt-2(novalidate role="form" ref="form")
    small.error(v-if="error.status" v-text="error.msg")
    .form-contrl
      label(for="phone")
        Phone
      .form-contrl__before
        | + {{sign.countryCode}}
      input#phone.form-input(
        required
        ref="phone"
        name="phone"
        type="tel"
        pattern="^[0-9]*$"
        placeholder="手机号"
        autocomplete="tel"
        v-model.number.trim="sign.username"
      )
      i.form-clear.el-icon-error(v-if="sign.username" @click="sign.username = ''")
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
        v-model="sign.pwdEncry")
      .dropdown-menus.bottom.start(v-if="error.password.status")
        .dropdown-menu.nohover(v-text="error.password.msg")
      i.form-clear.el-icon-error(v-if="sign.pwdEncry" @click="sign.pwdEncry = ''")
  .flex.full-width.my-2.space-between
    el-checkbox(v-model="remember") 记住我
    el-checkbox(v-model="autologin") 自动登录
  .my-2
    el-button.full-width(@click="login" type="primary") 登录
  .flex.full-width
    .tap(@click="$parent.switchSignForm(5)") 忘记密码
    .spacer
    .tap(@click="$parent.switchSignForm(4)") 立即注册
  .flex.jcc.mt-5
    small.dropdown-link.text-lightgray(
      @click="showDropdown"
      @mouseover="showDropdown"
      @mouseleave="hideDropdown"
      v-click-outside="hideDropdownIm"
    ) 其他登录方式 >
      .dropdown-menus.bottom(v-if="dropdown")
        .dropdown-menu(@click="$parent.switchSignForm()") 验证码登录
        .dropdown-menu(@click="$parent.switchSignForm(3)") NN号/邮箱号登录
</template>
<script>
import { mapActions } from 'vuex'
import md5 from 'js-md5'
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
        countryCode: 86,
        type: 'phone',
        region_code: '',
        username: '',
        pwdEncry: '',
      },
      dropdown: 0,
      error: {
        status: false,
        msg: '',
        mobile_num: {
          status: false,
          msg: '',
        },
        password: {
          status: false,
          msg: '',
        },
      },
    }
  },
  methods: {
    phoneValidity() {
      if (this.$refs.phone.checkValidity()) {
        this.error.mobile_num.status = false
        return true
      } else {
        this.error.mobile_num.status = true
        this.error.mobile_num.msg =
          this.$refs.phone.validationMessage || '请填写此字段'
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
    clearError() {
      this.error.status = false
    },
    async login() {
      if (!this.phoneValidity()) return
      if (!this.pwdValidity()) return
      if (this.$refs.form.checkValidity()) {
        this.$nuxt.$loading.start()
        await this.loginByPwd({
          ...this.sign,
          pwdEncry: md5(this.sign.pwdEncry),
        })
          .catch((e) => {
            this.error.msg = e
            this.error.status = true
          })
          .then(this.findServerInfoByUserId)
          .catch((e) => {
            this.error.msg = e
            this.error.status = true
          })
        await this.getCommunityGroup()
        await this.getFriendsGroup()
        this.$parent.closeDialog()
        this.$router.push({ path: '/me/' }, this.$nuxt.$loading.finish)
      }
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
    ...mapActions(['loginByPwd', 'getCommunityGroup', 'getFriendsGroup']),
    ...mapActions('channel', ['findServerInfoByUserId']),
  },
}
</script>
