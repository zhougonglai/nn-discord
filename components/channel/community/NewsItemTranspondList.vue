<template lang="pug">
.news-item-transpond-list
    span( @click="onShow" ) 同时转发到&nbsp;&gt;
    .news-item-transpond-list-mian( v-if="show" )
        el-input( placeholder="输入频道名检索" v-model="input" size="small" class="news-item-transpond-list-mian-input" clearable )
        el-checkbox-group( v-model="checkedCities" class="news-item-transpond-list-mian-group" )
            el-checkbox( v-for="city in cities" :label="city" :key="city" class="news-item-transpond-list-mian-item" ) {{city}}
    
</template>
<script>
import { CheckboxGroup } from 'element-ui'
import NewsItemBox from '~/components/channel/community/NewsItemBox'
export default {
  name: 'NewsItemTranspondList',
  components: {
    NewsItemBox,
    [CheckboxGroup.name]: CheckboxGroup,
  },
  props: ['item'],
  data() {
    return {
      show: false,
      input: '',
      checkedCities: [],
      cities: [
        '创建的频道1',
        '创建的频道2',
        '创建的频道3',
        '创建的频道4',
        '创建的频道5',
        '创建的频道6',
        '创建的频道7',
        '创建的频道8',
        '创建的频道9',
        '创建的频道10',
      ],
    }
  },
  methods: {
    onShow() {
      this.show = !this.show
    },
  },
}
</script>
<style lang="scss" scoped>
.news-item-transpond-list {
  display: inline-block;
  position: relative;
  span {
    display: block;
    height: 30px;
    line-height: 30px;
    color: rgba(159, 164, 171, 1);
    font-size: 14px;
    cursor: pointer;
  }
  .news-item-transpond-list-mian {
    width: 186px;
    height: 244px;
    background: rgba(24, 25, 28, 1);
    border: 1px solid rgba(0, 0, 0, 1);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    position: absolute;
    right: 0;
    top: 35px;
    .news-item-transpond-list-mian-input {
      padding: 10px 10px 5px;
    }
    .news-item-transpond-list-mian-group {
      padding-top: 5px;
      display: block;
      height: 190px;
      overflow-y: auto;
    }
    .news-item-transpond-list-mian-item {
      display: block;
      margin-right: 0;
      padding-top: 5px;
      padding-right: 5px;
    }
  }
}
</style>
<style>
.news-item-transpond-list-mian-item .el-checkbox__input {
  float: right;
}
.news-item-transpond-list-mian-item
  .el-checkbox__input.is-checked
  .el-checkbox__inner {
  background: #36393f;
  border: none;
}
.news-item-transpond-list-mian-item
  .el-checkbox__input.is-checked
  .el-checkbox__inner::after {
  border-color: #dcddde;
  top: 2px;
  left: 5px;
}
</style>
