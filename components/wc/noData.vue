<style scoped lang="scss">
.nodata {
  img {
    width: 200px;
    height: 149.75px;
    margin: 12% auto 10px auto;
  }
  color: #909399;
}
</style>
<template>
  <div class="nodata flex column v-tac jcc">
    <!-- 暂无内容 -->
    <img src="~/assets/imgs/noData.png" />
    <slot>暂无内容</slot>
  </div>
</template>
