import RTC from './agora-rtc'

export default {
  install(Vue) {
    Vue.prototype.$RTC = RTC.getInstance()
  },
}
