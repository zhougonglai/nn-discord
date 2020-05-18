import Vue from 'vue'
import SvgIcon from '~/components/svg/SvgIcon' // svg component
import '~/assets/iconfont'
// register globally
Vue.component('SvgIcon', SvgIcon)

// const req = require.context('../assets/icons', false, /\.svg$/)
// const requireAll = (requireContext) => requireContext.keys().map(requireContext)
// requireAll(req)
