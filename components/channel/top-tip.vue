<style scoped lang="scss">
.top-tip {
  $color-warn: #ef6643;
  $color: #fff;
  background-color: $color-warn;
  color: $color;
  padding: 7px;
  .el-button {
    margin-left: 15px;
    color: $color-warn;
    background: $color;
  }
}
</style>
<template>
  <div class="top-tip flex jcc aic">
    {{ msg }}
    <el-button @click="$emit('click')" round size="medium" type="primary">{{
      btntext
    }}</el-button>
  </div>
</template>
<script>
export default {
  name: 'TopTip',
  props: ['msg', 'btntext'],
}
</script>
