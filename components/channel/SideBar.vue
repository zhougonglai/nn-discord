<template lang="pug">
.sidebar-header(v-bind="$attrs")
  .panel.left
    .text {{user.nickName}}的社区
    .subtext 153.2W 成员
  .panel.right
    .subtext NN号 {{user.nnNumber}}
    .subtext 153.2W 关注
  .panel.bottom
    nn-btn(rund size="small") +加入
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'SideBar',
  computed: {
    ...mapState(['user']),
  },
}
</script>
<style lang="scss" scoped>
.sidebar {
  width: 240px;
  background: var(--background-secondary);
  display: flex;
  flex-direction: column;
  &-header {
    height: 136px;
    display: grid;
    background-image: url('http://placekitten.com/240/136');
    background-color: #00000080;
    background-blend-mode: color-dodge;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    color: #fff;
    .panel {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      .subtext {
        font-size: 12px;
      }
    }
    .left {
      grid-area: 1 / 1 / 2 / 2;
      .subtext {
        margin-top: 10px;
      }
    }
    .right {
      grid-area: 1 / 2 / 2 / 3;
      .subtext:last-of-type {
        margin-top: 10px;
      }
    }
    .bottom {
      grid-area: 2 / 1 / 3 / 3;
    }
  }
}
</style>
