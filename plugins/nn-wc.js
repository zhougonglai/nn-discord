import Vue from 'vue'
import vClickOutside from 'v-click-outside'
import NNWC from '~/components/wc/install'

Vue.config.productionTip = false
Vue.use(NNWC)
Vue.use(vClickOutside)
// 生日换算年龄
Vue.filter('age', (date) => {
  if (date === null) return '保密'
  const birthdays = new Date(date.replace(/-/g, '/'))
  const d = new Date()
  return (
    d.getFullYear() -
    birthdays.getFullYear() -
    (d.getMonth() < birthdays.getMonth() ||
    (d.getMonth() === birthdays.getMonth() && d.getDate() < birthdays.getDate())
      ? 1
      : 0)
  )
})
Vue.filter('sex', (sex) => {
  switch (sex) {
    case 'man':
      return '男'
    case 'female':
      return '女'
    default:
      return '保密'
  }
})
