<template lang="pug">
#sign-up
  h3.v-tac.no-select 用户注册
  form.form(novalidate ref="form")
    small.error(v-if="error.status" v-text="error.msg")
    .form-contrl.with-before.dropdown-link
      label(for="phone")
        Phone
      .form-contrl__before
        | + {{sign.countryCode}}
      input#phone.form-input(
        tabindex="1"
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
          tabindex="2"
          required
          type="tel"
          name="code"
          ref="code"
          autocomplete="off"
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
    template(v-if="verifyed")
      .form-contrl.dropdown-link
        label(for="pwd")
          Lock
        input#pwd.form-input(
          tabindex="3"
          required
          name="pwd"
          type="password"
          ref="password"
          autocomplete="current-password"
          placeholder="密码"
          v-model="sign.pwdEncry")
        .dropdown-menus.bottom.start(v-if="error.password.status")
          .dropdown-menu.nohover(v-text="error.password.msg")
        i.form-clear.el-icon-error(v-if="sign.pwdEncry" @click="sign.pwdEncry = ''")
      .form-contrl
        label(for="refer")
          i.el-icon-s-ticket.form-icon
        input#refer.form-input(
          tabindex="4"
          type="text"
          name="refer_code"
          autocomplete='off'
          placeholder="推荐码(可为空)"
          v-model="sign.refer_code")
  .flex.full-width.mt-3.align-items-center
    el-checkbox(v-model="confirm") 已阅读并同意
    small.inline-flex.pointer.text-primary 《用户服务条款》
  .my-2
    el-button.full-width(type="primary" :loading="loading" tabindex="5" :disabled="!confirm" @click="regist") 注册
  .flex.aic.jcc.mt-2
    small.text-lightgray.mr-1 已有账号
    .pointer.text-primary(@click="$parent.switchSignForm()") 去登录
</template>
<script>
import { mapActions } from 'vuex'
import md5 from 'js-md5'
import Phone from '~/assets/icons/phone.svg'
import Safe from '~/assets/icons/safe.svg'
import Lock from '~/assets/icons/lock.svg'

export default {
  name: 'SignUp',
  components: {
    Phone,
    Safe,
    Lock,
  },
  data() {
    return {
      confirm: true,
      verifyed: 2,
      loading: false,
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
      sendCodeContrl: {
        sending: false,
        time: 60,
        timer: 0,
      },
      sign: {
        countryCode: 86,
        telNum: '',
        pwdEncry: '',
        server_status: '',
        smsCode: '',
        smscode_key: '',
        package_id: '',
        price_id: '',
        refer_code: '',
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
      if (this.phoneValidity()) {
      }
    },
    sendSmscode() {
      this.sendCode(this.sign)
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
            this.sendCodeContrl.time = 60
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
    async regist() {
      if (!this.phoneValidity()) return
      if (!this.verifyValidity()) return
      if (!this.codeValidity()) return
      if (!this.pwdValidity()) return
      if (this.$refs.form.checkValidity()) {
        this.loading = true
        await this.register({
          ...this.sign,
          pwdEncry: md5(this.sign.pwdEncry),
        }).catch((error) => {
          this.error.msg = error
          this.error.status = true
        })
        this.loading = false
      }
    },
    ...mapActions(['sendCode', 'register']),
  },
}
</script>
<style lang="scss" scoped>
#sign-up {
  height: 100%;
}
</style>
