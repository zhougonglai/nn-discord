import Vue from 'vue'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
if (process.browser) {
  // 加一个浏览器端判断，只在浏览器端才渲染就不会报错了
  const VueQuillEditor = require('vue-quill-editor/dist/ssr')
  const Quill = VueQuillEditor.Quill
  const BlockEmbed = Quill.import('blots/block/embed')
  class VideoBlot extends BlockEmbed {
    static create(value) {
      const node = super.create()
      node.setAttribute('src', value.url)
      node.setAttribute('controls', value.controls)
      node.setAttribute('width', value.width)
      node.setAttribute('height', value.height)
      node.setAttribute('webkit-playsinline', true)
      node.setAttribute('playsinline', true)
      node.setAttribute('x5-playsinline', true)
      return node
    }
    static value(node) {
      return {
        url: node.getAttribute('src'),
        controls: node.getAttribute('controls'),
        width: node.getAttribute('width'),
        height: node.getAttribute('height'),
      }
    }
  }
  VideoBlot.blotName = 'simpleVideo'
  VideoBlot.tagName = 'video'
  Quill.register(VideoBlot)
  Vue.use(VueQuillEditor)
}
