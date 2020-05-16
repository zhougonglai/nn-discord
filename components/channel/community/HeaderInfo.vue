<template lang="pug">
  .header-info(:style="{'background-image':`url(${headerInfo.image})`}")
    .hade
    .main
      ul
        li.name {{ headerInfo.name }}
        li
          i NN号 
          | {{ headerInfo.code }}
        li {{ formatW(headerInfo.member) }} 成员
        li {{ formatW(headerInfo.attention) }} 关注
      .clear
      .join 
        button +加入
      .online 
        i  
        span {{ formatW(headerInfo.online) }}
</template>
<script>
import { mapState } from 'vuex'
import toolboxMixin from '~/mixins/toolboxMixin'
export default {
  name: 'HeaderInfo',
  mixins: [toolboxMixin],
  computed: {
    ...mapState('community', ['headerInfo']),
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.header-info {
  height: 136px;
  background-size: 100% 100%;
  position: relative;
  font-size: 12px;
  .hade {
    background: rgb(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
  .main {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 11;
  }
  .clear {
    clear: both;
  }
  ul {
    padding: 15px 0 0;
    margin: 0;
  }
  li {
    list-style: none;
    width: 50%;
    float: left;
    box-sizing: border-box;
    padding: 0 0px 0 20px;
    height: 30px;
    line-height: 40px;
    i {
      border: 1px solid rgb(255, 255, 255, 0.5);
      background: rgb(255, 255, 255, 0.1);
      margin-right: 5px;
    }
  }
  .name {
    font-size: 18px;
  }
  .join {
    width: 50%;
    float: left;
    padding-left: 20px;
    padding-top: 15px;
    button {
      background: #fff;
      width: 68px;
      height: 28px;
      line-height: 28px;
      border: none;
      border-radius: 14px;
      font-size: 14px;
    }
  }
  .online {
    width: 50%;
    float: left;
    text-align: right;
    padding-right: 20px;
    padding-top: 22px;
    span {
      opacity: 0.8;
    }
    i {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background: #43b581;
      margin-right: 5px;
    }
  }
}
</style>
