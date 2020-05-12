<template lang="pug">
button.nn-btn(
  ref="button"
  :class=`[
    size ? size : '',
    type ? type : '',
    rund ? 'rund' : '',
    block? 'block': ''
  ]`
  v-bind="$attrs"
  v-on="listeners")
  slot
</template>
<script>
export default {
  name: 'NnBtn',
  props: {
    size: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    rund: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: (event) => this.clickButton(event),
      }
    },
  },
  methods: {
    clickButton(e) {
      this.$emit('click', e)
      const ripples = document.createElement('span')
      ripples.style.left = e.offsetX + 'px'
      ripples.style.top = e.offsetY + 'px'
      ripples.classList.add('wave')
      this.$refs.button.appendChild(ripples)

      setTimeout(() => {
        ripples.remove()
      }, 1000)
    },
  },
}
</script>
