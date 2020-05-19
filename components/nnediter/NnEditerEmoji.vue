<template>
  <div
    @keyup.esc="hidePicker"
    ref="container"
    class="emoji-wrapper"
    hidefocus="true"
    v-on="handleMouse()"
  >
    <span class="emoji-button" @click.stop="togglePickerVisibility">
      <i class="iconfont iconemoji"></i>
      <span v-if="buttonTextVisible" class="button-text">表情</span>
    </span>
    <div class="emoji-picker-main" v-if="pickerVisible">
      <div :class="['emoji-picker', pickerPosition]">
        <ul>
          <li v-for="(url, key) in files" :key="key" class="emoji-picker-item">
            <img
              class="emoji-icon"
              @click="handlerSelect"
              width="20"
              height="20"
              :src="url"
              alt
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
const path = require('path')
const requireEmoji = require.context('./emoji')
let files = requireEmoji.keys()
export default {
  data() {
    return {
      pickerVisible: false,
      files: files.map((url) => require(`./emoji/${url.slice(2)}`)),
      words: {
        emoji: {
          title: 'emoji',
          icon: 'iconemoji1',
        },
        animal: {
          title: '动物',
          icon: 'icondongwu',
        },
        archite: {
          title: '建筑',
          icon: 'iconjianzhu',
        },
        food: {
          title: '食物',
          icon: 'iconfood',
        },
        travel: {
          title: '旅行',
          icon: 'iconlvyou',
        },
        goods: {
          title: '物品',
          icon: 'iconwupin',
        },
        tool: {
          title: '工具',
          icon: 'icongongju',
        },
      },
    }
  },
  props: {
    buttonTextVisible: {
      type: Boolean,
      default: true,
    },
    triggerPick: {
      tyep: String,
      default: 'hover',
      validator(value) {
        return ['hover', 'click'].includes(value)
      },
    },
    pickerPosition: {
      type: String,
      default: 'right',
      validator(value) {
        return ['left', 'middle', 'right'].includes(value)
      },
    },
  },
  watch: {
    pickerVisible(newValue) {
      newValue ? this.$emit('activated') : this.$emit('inactivated')
    },
  },
  created() {},
  mounted() {
    const docHandleClick = (this.docHandleClick = (e) => {
      if (!this.$refs.container.contains(e.target)) {
        this.hidePicker()
      }
    })
    const handleKeyup = (this.handleKeyup = (e) => {
      if (e.key === 'Escape') {
        this.hidePicker()
      }
    })
    document.addEventListener('click', docHandleClick)
    document.addEventListener('keyup', handleKeyup)
  },
  destroyed() {
    document.removeEventListener('click', this.docHandleClick)
    document.removeEventListener('click', this.handleKeyup)
  },
  methods: {
    handlerSelect(e) {
      this.$emit('selected', e)
      this.togglePickerVisibility()
    },
    hidePicker() {
      this.pickerVisible = false
    },
    togglePickerVisibility() {
      if (this.triggerPick === 'click') {
        this.pickerVisible = !this.pickerVisible
      }
    },
    handleMouse() {
      const mouseenter = function () {
        this.pickerVisible = true
      }.bind(this)
      const mouseleave = function () {
        this.pickerVisible = false
      }.bind(this)
      if (this.triggerPick === 'hover') {
        return {
          mouseenter,
          mouseleave,
        }
      } else {
        return {}
      }
    },
  },
}
</script>
<style lang="scss" scoped>
ul,
li {
  list-style: none;
  margin: 0;
}
</style>

<style scoped lang="scss">
.emoji-picker-main {
  background: #2b2d31;
  border-radius: 10px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 6px;
    height: 6px;
    display: block;
    background: #2b2d31;
    border-top: 3px transparent dashed;
    border-left: 3px transparent dashed;
    border-bottom: 3px transparent dashed;
    border-right: 3px solid #2b2d31;
    top: -3px;
    left: 20px;
    transform: rotate(45deg);
  }
}
.emoji-picker {
  background: #2b2d31;
  max-height: 240px;
  overflow-y: auto;
  ul {
    width: 440px;
    padding: 0;
    margin: 0;
  }
}
.emoji-picker-item {
  display: inline-block;
  cursor: pointer;
  img {
    user-select: none;
    padding: 5px;
    box-sizing: initial;
  }
}

.emoji-wrapper {
  position: relative;
  display: inline-block;
  z-index: 10000;
}

.emoji-button {
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  // .button-icon {
  //   &.inactive {
  //     filter: grayscale(100%);
  //   }
  // }
  &:hover {
    color: #027fff;
  }
  i {
    color: #ffb406;
    vertical-align: super;
  }
  .button-text {
    vertical-align: super;
    font-size: 12px;
    color: #dcddde;
  }
}

.emoji-picker {
  border-radius: 5px;
  padding: 10px;
  margin: 0;
  display: flex;
  position: absolute;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(29, 30, 30, 1);
  &.left {
    right: 0;
  }

  &.middle {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
