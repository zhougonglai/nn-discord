<style scoped lang="scss">
// 居中显示的广告图,高度固定
.nnBanner {
  height: 130px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;
}
</style>
<template>
  <a :href="url" target="_blank">
    <div
      :style="{ 'background-image': 'url(' + img + ')' }"
      class="nnBanner"
    ></div>
  </a>
</template>
<script>
export default {
  name: 'NnBanner',
  props: {
    img: {
      type: String,
      required: true,
    },
    url: String,
  },
}
</script>
