<template lang="pug">
#verify
  h3.v-tac.no-select 用户登录
  form.form.mt-3(novalidate role="form" ref="form")
    small.error(v-if="error.status" v-text="error.msg")
    .form-contrl
      label(for="phone")
        Phone
      .form-contrl__before
        | + {{sign.countryCode}}
      input#phone.form-input(
        required
        type="tel"
        name="phone"
        ref="phone"
        pattern="^[0-9]*$"
        placeholder="手机号"
        autocomplete="tel"
        v-model.number.trim="sign.telNum")
      .dropdown-menus.top.start(v-if="error.telNum.status")
        .dropdown-menu.nohover(v-text="error.telNum.msg")
      i.form-clear.el-icon-error(v-if="sign.telNum" @click="sign.telNum = ''")
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
          v-model.trim="sign.smsCode")
        el-button.mr-1(type="text" size="mini" @click="sendContrl" :disabled="!!sendCodeContrl.timer")
          | {{ sendCodeContrl.timer ? `(${sendCodeContrl.time})` : '发送验证码' }}
      .verify.pointer(v-else @click="verify")
        .bubble
        | 点击按钮进行验证
      .dropdown-menus.bottom.start.center(v-if="error.code.status")
        .dropdown-menu.nohover(v-text="error.code.msg")
      i.form-clear.el-icon-error(v-if="sign.smsCode" @click="sign.smsCode = ''")
  .my-2
    el-button.full-width(type="primary" :loading="loading" @click="login") 登录
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
      loading: false,
      verifyed: 2,
      error: {
        status: false,
        msg: '',
        telNum: {
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
        countryCode: 86,
        telNum: '',
        state: 1,
        smsCode: '',
        smsCodeKey: '',
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
    sendContrl() {
      if (!this.sendCodeContrl.timer) {
        this.clearVerify()
        this.sendCodeContrl.timer = setInterval(() => {
          if (this.sendCodeContrl.time > 0) {
            this.sendCodeContrl.time -= 1
          } else {
            clearInterval(this.sendCodeContrl.timer)
            this.sendCodeContrl.timer = 0
            this.sendCodeContrl.time = 60
          }
        }, 1000)
        this.sendSmscode()
      }
    },
    sendSmscode() {
      this.sendSms(this.sign)
      this.verifyed -= 1
    },
    phoneValidity() {
      if (this.$refs.phone.checkValidity()) {
        this.error.telNum.status = false
        return true
      } else {
        this.error.telNum.status = true
        this.error.telNum.msg =
          this.$refs.phone.validationMessage || '请填写此字段'
        return false
      }
    },
    verifyValidity() {
      if (this.verifyed) {
        this.error.code.status = false
        return true
      } else {
        this.error.code.status = true
        this.error.code.msg = '请进行人机验证'
        return false
      }
    },
    codeValidity() {
      if (this.$refs.code.checkValidity()) {
        this.error.code.status = false
        return true
      } else {
        this.error.code.status = true
        this.error.code.msg =
          this.$refs.password.validationMessage || '请填写此字段'
        return false
      }
    },
    clearVerify() {
      this.error.status = false
      this.error.telNum.status = false
      this.error.code.status = false
    },
    async login() {
      this.clearVerify()
      if (!this.phoneValidity()) return
      if (!this.verifyValidity()) return
      if (!this.codeValidity()) return
      this.$nuxt.$loading.start()
      const res = await this.loginByPhoneSms(this.sign).catch((err) => {
        this.error.msg = err
        this.error.status = true
        return false
      })
      if (res) {
        await this.getCommunityGroup()
        await this.getFriendsGroup()
        this.$parent.closeDialog()
        this.$router.push({ name: 'me' }, this.$nuxt.$loading.finish)
      }
      this.$nuxt.$loading.finish()
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
    ...mapActions([
      'loginByPhoneSms',
      'sendSms',
      'getCommunityGroup',
      'getFriendsGroup',
    ]),
  },
}
</script>
