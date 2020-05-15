/**
 * 公用触底事件
 */

export default {
  data() {
    return {
      _scrollingElement: null,
      _isReachBottom: false,
      reachBottomDistance: 80, // 距离底部多远触发
    }
  },
  mounted() {
    if (process.client) {
      this._scrollingElement = document.scrollingElement
      window.addEventListener('scroll', this._windowScrollHandler)
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('scroll', this._windowScrollHandler)
    }
  },
  methods: {
    _windowScrollHandler() {
      let scrollHeight = this._scrollingElement.scrollHeight
      let currentHeight =
        this._scrollingElement.scrollTop +
        this._scrollingElement.clientHeight +
        this.reachBottomDistance
      if (currentHeight < scrollHeight && this._isReachBottom) {
        this._isReachBottom = false
      }
      if (this._isReachBottom) {
        return
      }
      if (currentHeight >= scrollHeight) {
        this._isReachBottom = true
        typeof this.reachBottom === 'function' && this.reachBottom()
      }
    },
  },
}
