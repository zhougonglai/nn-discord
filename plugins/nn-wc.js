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
// 获取剪切板粘贴图片
Vue.directive('paste-img', {
  bind: (el, { value }) => {
    el.querySelector('input').addEventListener('paste', (e) => {
      const items = event.clipboardData && event.clipboardData.items
      let file = null
      if (items && items.length) {
        // 检索剪切板items
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.includes('image')) {
            file = items[i].getAsFile()
            value && value(file)
            break
          }
        }
      }
    })
  },
})
// 获取拖放文件
Vue.directive('drop-img', {
  bind: (el, { value }) => {
    el.addEventListener('drop', (e) => {
      e.preventDefault()
      e.stopPropagation()
      const df = e.dataTransfer
      const dropFiles = [] // 存放拖拽的文件对象
      if (df.items !== undefined) {
        // Chrome有items属性，对Chrome的单独处理
        for (let i = 0; i < df.items.length; i++) {
          const item = df.items[i]
          // 用webkitGetAsEntry禁止上传目录
          if (
            item.kind === 'file' &&
            item.webkitGetAsEntry().isFile &&
            item.type.indexOf('image/') === 0
          ) {
            const file = item.getAsFile()
            dropFiles.push(file)
          }
        }
      }
      dropFiles.forEach((img) => {
        value && value(img)
      })
    })
  },
})
