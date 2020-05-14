<style scoped lang="scss">
.page {
  background-color: #36393f;
}
</style>
<template>
  <div class="page spacer">
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
    <div>
      <el-select placeholder="请选择" v-model="value2">
        <el-option
          :disabled="item.disabled"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          v-for="item in options2"
        ></el-option>
      </el-select>
    </div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker placeholder="选择日期" type="date" v-model="value1"></el-date-picker>
    </div>
    <div>
      <el-input placeholder="请输入内容" v-model="input"></el-input>
    </div>
  </div>
</template>
<script>
import {DatePicker,Input} from 'element-ui';
export default {
  name:"friend-search",
  components:{
    [DatePicker.name]:DatePicker,
    [Input.name]:Input,
  },
  mounted() {
    console.log(this.$route);
  },
  computed: {
    // test() {
    //   return 0;
    // }
  },
  data() {
    return {
options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        input:"内容",
        value1: '',
        value2: ''
};
  },
methods:{
    // test() {
    //   return 0;
    // }
}
};
</script>