<template lang="pug">
#sign-up
  h3.v-tac.no-select 用户注册
  small.error(v-if="error.status" v-text="error.msg")
  form.form(novalidate ref="form")
    .form-contrl.with-before.dropdown-link
      label(for="phone")
        Phone
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
          name="code"
          ref="code"
          autocomplete="off"
          placeholder="验证码"
          v-model.trim="sign.smscode")
        el-button.mr-1(type="text" size="mini" @click="sendContrl" :disabled="!!sendCodeContrl.timer")
          | {{ sendCodeContrl.timer ? `(${sendCodeContrl.time})` : '发送验证码' }}
      .verify.pointer(v-else @click="verify")
        .bubble
        | 点击按钮进行验证
      .dropdown-menus.bottom.start(v-if="error.code.status")
        .dropdown-menu.nohover(v-text="error.code.msg")
    template(v-if="verifyed")
      .form-contrl.dropdown-link
        label(for="pwd")
          Lock
        input#pwd.form-input(
          required
          name="pwd"
          type="password"
          ref="password"
          autocomplete="current-password"
          placeholder="密码"
          v-model="sign.password")
        .dropdown-menus.bottom.start(v-if="error.password.status")
          .dropdown-menu.nohover(v-text="error.password.msg")
        i.form-clear.el-icon-error(@click="sign.password = ''")
      .form-contrl
        label(for="refer")
          i.el-icon-s-ticket.form-icon
        input#refer.form-input(
          type="text"
          name="refer_code"
          autocomplete='off'
          placeholder="推荐码(可为空)"
          v-model="sign.refer_code")
  .flex.full-width.mt-3.align-items-center
    el-checkbox(v-model="confirm") 已阅读并同意
    small.inline-flex.pointer.text-primary 《用户服务条款》
  .my-2
    el-button.full-width(type="primary" :disabled="!confirm" @click="register") 注册
  .flex.aic.jcc.mt-2
    small.text-lightgray.mr-1 已有账号
    .pointer.text-primary(@click="$parent.switchSignForm()") 去登录
</template>
<script>
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
        country_code: 86,
        mobile_num: '',
        state: 2,
        password: '',
        server_status: '',
        smscode: '',
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
  async mounted() {},
  async created() {},
  methods: {
    verify() {
      if (this.phoneValidity()) {
      }
    },
    async sendSmscode() {},
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
        this.error.mobile_num.status = false
        return true
      } else {
        this.error.mobile_num.status = true
        this.error.mobile_num.msg =
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
      this.error.mobile_num.status = false
      this.error.code.status = false
      this.error.password.status = false
    },
    register() {
      if (!this.phoneValidity()) return
      if (!this.verifyValidity()) return
      if (!this.codeValidity()) return
      if (!this.pwdValidity()) return
      if (this.$refs.form.checkValidity()) {
      }
    },
  },
}
</script>
<style lang="scss" scoped>
#sign-up {
  height: 100%;
}
</style>
