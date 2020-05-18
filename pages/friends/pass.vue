<style scoped lang="scss">
.page {
  background-color: #36393f;
}
.pass-list {
  padding: 22px 28px;
  .item {
    padding: 12px 0;
    border-bottom: 1px solid #2f3136;
    .Avatar {
      @include Circle(42px);
    }
    .name {
      color: #dcddde;
      margin: 0 5px;
    }
    .info {
      margin-left: 38px;
      color: #9fa4ab;
    }
  }
}
</style>
<template>
  <div class="page spacer flex column">
    <NnBanner
      href="//www.baidu.com"
      img="http://placekitten.com/1280/128"
    ></NnBanner>
    <div class="flex-sub pass-list">
      <div v-for="item in 10" class="item flex aic" :key="item">
        <n-link :to="'/friends/' + item.id">
          <img alt class="Avatar" src="http://placekitten.com/42/42" />
        </n-link>
        <n-link :to="'/friends/' + item.id">
          <div class="name">1号粉丝昵称</div>
        </n-link>
        <img v-if="true" alt src="~/assets/imgs/man.png" />
        <img v-else alt src="~/assets/imgs/woman.png" />

        <div class="info flex-1">申请成为好友</div>
        <el-button round size="mini" type="default">拒绝</el-button>
        <el-button round size="mini" type="primary">接受</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import nnBanner from '~/components/wc/nnBanner'
export default {
  name: 'FriendSearch',
  components: {
    [nnBanner.name]: nnBanner,
  },
}
</script>
