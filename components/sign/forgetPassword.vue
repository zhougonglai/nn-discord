<template lang="pug">
#forget-password
  h3.v-tac.no-select 忘记密码
  small.error(v-if="error.status" v-text="error.msg")
  form.form(novalidate role="form" ref="form")
    .form-contrl.with-before.dropdown-link
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
          autocomplete="off"
          name="safecode"
          ref="code"
          placeholder="验证码"
          v-model.trim="sign.smsCode")
        el-button.mr-1(type="text" size="mini" @click="sendContrl" :disabled="!!sendCodeContrl.timer")
          | {{ sendCodeContrl.timer ? `(${sendCodeContrl.time})` : '发送验证码' }}
      .verify.pointer(v-else @click="verify")
        .bubble
        | 点击按钮进行验证
      .dropdown-menus.bottom.start(v-if="error.code.status")
        .dropdown-menu.nohover(v-text="error.code.msg")
      i.form-clear.el-icon-error(v-if="sign.smsCode" @click="sign.smsCode = ''")
    .form-contrl.dropdown-link(v-if="verifyed")
      label(for="pwd")
        Lock
      input#pwd.form-input(
        required
        type="password"
        name="password"
        ref="password"
        placeholder="密码"
        autocomplete="current-password"
        v-model.trim="sign.pwdEncry")
      .dropdown-menus.bottom.start(v-if="error.password.status")
        .dropdown-menu.nohover(v-text="error.password.msg")
      i.form-clear.el-icon-error(v-if="sign.pwdEncry" @click="sign.pwdEncry = ''")
  .mt-5
    el-button.full-width(type="primary" @click="reset") 重置密码
  .full-width.v-tac.mt-2
    .tap(@click="$parent.switchSignForm()") 返回登录
</template>
<script>
import { mapActions } from 'vuex'
import md5 from 'js-md5'
import Phone from '~/assets/icons/phone.svg'
import Safe from '~/assets/icons/safe.svg'
import Lock from '~/assets/icons/lock.svg'

export default {
  name: 'ForgetPassword',
  components: {
    Phone,
    Safe,
    Lock,
  },
  data() {
    return {
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
        password: {
          status: false,
          msg: '',
        },
      },
      sign: {
        countryCode: 86,
        telNum: '',
        state: 1,
        smsCode: '',
        smsCodeKey: '',
        pwdEncry: '',
      },
      sendCodeContrl: {
        sending: false,
        time: 60,
        timer: 0,
      },
      geetest: {
        geetest_challenge: '',
        geetest_validate: '',
        geetest_seccode: '',
      },
    }
  },
  async mounted() {},
  created() {},
  methods: {
    verify() {
      if (this.phoneValidity()) {
        // this.captcha.verify();
      }
    },
    sendSmscode() {
      this.sendSms(this.sign)
      this.verifyed -= 1
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
          }
        }, 1000)
        this.sendSmscode()
      }
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
    clearVerify() {
      this.error.status = false
      this.error.telNum.status = false
      this.error.code.status = false
      this.error.password.status = false
    },
    async reset() {
      if (!this.phoneValidity()) return
      if (!this.verifyValidity()) return
      if (!this.codeValidity()) return
      if (!this.pwdValidity()) return
      if (this.$refs.form.checkValidity()) {
        await this.forgetPwd({
          ...this.sign,
          pwdEncry: md5(this.sign.pwdEncry),
        }).catch((e) => {
          this.error.msg = e
          this.error.status = true
        })
        this.$parent.switchSignForm()
      }
    },
    ...mapActions(['forgetPwd', 'sendSms']),
  },
}
</script>
<style lang="scss" scoped>
#forget-password {
  height: 100%;
}
</style>
