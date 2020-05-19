import CircleLoader from './CircleLoader.vue'
import nnButton from './nnButton.vue'
import nnCheckbox from './nnCheckbox.vue'
import nnDialog from './nnDialog.vue'
import nnInput from './nnInput.vue'
import nnOption from './nnOption.vue'
import nnRadio from './nnRadio.vue'
import nnSelect from './nnSelect.vue'
import nnDropdown from './nnDropdown.vue'
import nnDropitem from './nnDropitem.vue'

export default {
  install(vue) {
    vue.component('CircleLoader', CircleLoader)
    vue.component(nnButton.name, nnButton)
    vue.component(nnCheckbox.name, nnCheckbox)
    vue.component(nnDialog.name, nnDialog)
    vue.component(nnInput.name, nnInput)
    vue.component(nnOption.name, nnOption)
    vue.component(nnRadio.name, nnRadio)
    vue.component(nnSelect.name, nnSelect)
    vue.component(nnDropdown.name, nnDropdown)
    vue.component(nnDropitem.name, nnDropitem)
  },
}
