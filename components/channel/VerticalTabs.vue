<template lang="pug">
.vertical-tabs
  .vertical-tabs__navs
    template(v-if="panels.length")
      .vertical-tabs__item(
        v-for="item in panels"
        :key="item.uid"
        :class="[active === item.uid ? 'active': '']"
        @click="activeTab(item)")
        i.icon.iconfont(:class="item.icon")
        .label {{item.label}}
  .vertical-tabs__content
    slot
</template>
<script>
export default {
  name: 'VerticalTabs',
  data() {
    return {
      panels: [],
      active: '',
    }
  },
  provide() {
    return {
      tabs: this,
    }
  },
  methods: {
    initTab(item) {
      if (!this.active) {
        this.activeTab(item)
      }
      this.panels.push(item)
    },
    activeTab({ uid }) {
      this.active = uid
    },
  },
}
</script>
<style lang="scss" scoped>
.vertical {
  &-tabs {
    width: 100%;
    display: flex;
    &__navs {
      flex: 1;
      max-width: 220px;
      position: relative;
      &::after {
        content: '';
        background-color: #2f3136;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 1px;
      }
    }
    &__item {
      height: 60px;
      color: #72767d;
      height: 60px;
      color: #72767d;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      position: relative;
      background-color: #36393f;
      cursor: pointer;
      &:first-of-type {
        margin-top: 48px;
      }
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 0;
        border-radius: 0 4px 4px 0;
        margin-left: -4px;
        background: white;
        contain: layout size;
        transition: height 0.2s linear, background 325ms linear;
      }
      &.active {
        border-color: #2f3136;
        color: white;
        z-index: 1;
        &::before {
          height: 100%;
        }
      }
      .icon {
        width: 60px;
        text-align: center;
      }
      .label {
        flex: 1;
      }
    }
    &__content {
      flex: 5;
      overflow-y: auto;
    }
  }
}
</style>
