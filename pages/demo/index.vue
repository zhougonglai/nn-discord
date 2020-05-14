<style scoped lang="scss">
.page {
  background-color: #36393f;
  padding: 100px 50px;
}
.demonstration {
  color: #dcddde;
}
</style>
<template>
  <div class="page spacer">
    <div style="margin: 20px 0">
      <el-button plain>朴素按钮</el-button>
      <el-button plain type="primary">主要按钮</el-button>
    </div>
    <div style="margin: 20px 0">
      <el-button>朴素按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button round size="mini" type="primary">同意</el-button>
      <el-button round size="mini" type="default">拒绝</el-button>
    </div>

    <div>
      <el-button round>圆形按钮</el-button>
      <el-button round type="primary">主要按钮</el-button>
      <el-button plain round>圆形按钮</el-button>
      <el-button plain round type="primary">主要按钮</el-button>
    </div>

    <div></div>
    <div>
      <el-select placeholder="请选择" v-model="value2">
        <el-option
          :disabled="item.disabled"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          v-for="item in options"
        ></el-option>
      </el-select>
    </div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker placeholder="选择日期" type="date" v-model="value1"></el-date-picker>
    </div>
    <div>
      <el-input placeholder="请输入内容" v-model="input"></el-input>
      <el-input placeholder="请输入内容" v-model="input2"></el-input>
    </div>
    <div>
      <el-radio label="1" v-model="radio">备选项</el-radio>
      <el-radio label="2" v-model="radio">备选项</el-radio>
    </div>
    <div>
      <el-checkbox v-model="checked">备选项</el-checkbox>
      <el-checkbox v-model="checked2">备选项</el-checkbox>
    </div>
  </div>
</template>
<script>
import { DatePicker, Input, Radio, Checkbox } from 'element-ui'
export default {
  name: 'FriendSearch',
  components: {
    [DatePicker.name]: DatePicker,
    [Input.name]: Input,
    [Radio.name]: Radio,
    [Checkbox.name]: Checkbox,
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      input: '',
      input2: '内容内容内容内容内容内容内容内容内容',
      value: '',
      value1: '',
      value2: '',
      radio: '1',
      checked: true,
      checked2: false,
    }
  },
}
</script>
