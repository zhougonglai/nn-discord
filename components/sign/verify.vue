<template lang="pug">
#verify
  h3.v-tac.no-select 用户登录
  form.form.mt-3(novalidate role="form" ref="form")
    .form-contrl
      label(for="phone")
        Phone
      .form-contrl__before
        | + 86
      input#phone.form-input(
        required
        type="tel"
        name="phone"
        ref="phone"
        pattern="^[0-9]*$"
        placeholder="手机号"
        autocomplete="tel"
        v-model.number.trim="sign.mobile_num")
      .dropdown-menus.top.start(v-if="error.mobile_num.status")
        .dropdown-menu.nohover(v-text="error.mobile_num.msg")
      i.form-clear.el-icon-error(v-if="sign.mobile_num" @click="sign.mobile_num = ''")
    .form-contrl.with-after.dropdown-link
      label(for="smscode")
        Safe
      template(v-if="verifyed")
        input#smscode.form-input(
          required
          type="tel"
          name="safecode"
          ref="code"
          pattern="^[0-9]*$"
          placeholder="验证码"
          autocomplete="off"
          v-model.trim="sign.smscode")
        el-button.mr-1(type="text" size="mini" @click="sendContrl" :disabled="!!sendCodeContrl.timer")
          | {{ sendCodeContrl.timer ? `(${sendCodeContrl.time})` : '发送验证码' }}
      .verify.pointer(v-else @click="verify")
        .bubble
        | 点击按钮进行验证
      .dropdown-menus.bottom.start.center(v-if="error.code.status")
        .dropdown-menu.nohover(v-text="error.code.msg")
      i.form-clear.el-icon-error(v-if="sign.smscode" @click="sign.smscode = ''")
  .my-2
    el-button.full-width(type="primary" @click="login") 登录
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
        .dropdown-menu(@click="$parent.switchSignForm(2)") 手机号登录
        .dropdown-menu(@click="$parent.switchSignForm(3)") NN号/邮箱号登录
</template>
<script>
import { mapActions } from 'vuex'
import Phone from '~/assets/icons/phone.svg'
import Safe from '~/assets/icons/safe.svg'

export default {
  name: 'SignVerify',
  components: {
    Phone,
    Safe,
  },
  data() {
    return {
      dropdown: 0,
      verifyed: false,
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
      sign: {
        country_code: 86,
        mobile_num: '',
        state: 1,
        server_status: '',
        smscode: '',
        smscode_key: '',
      },
      geetest: {
        geetest_challenge: '',
        geetest_validate: '',
        geetest_seccode: '',
      },
    }
  },
  methods: {
    verify() {
      this.verifyed = true
    },
    sendContrl() {},
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
