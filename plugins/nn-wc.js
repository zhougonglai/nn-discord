import Vue from 'vue'
// import 'web-animations-js'
import vClickOutside from 'v-click-outside'
import CircleLoader from '~/components/wc/install'

Vue.config.productionTip = false
Vue.use(CircleLoader)
Vue.use(vClickOutside)
