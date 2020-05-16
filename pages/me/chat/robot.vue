<style scoped lang="scss">
.page {
  background-color: #36393f;
  padding: 24px;
}
.Avatar {
  @include Circle(40px);
}
.header {
  border-bottom: 1px solid #2f3136;

  .name {
    color: #dcddde;
    font-size: 16px;
    padding: 12px 0 11px 0;
  }
  .info {
    color: #72767d;
    padding: 11px 0 22px 0;
  }
}
// 消息列表
.message {
  padding: 25px 0;
  .item {
    margin: 0 0 24px 0;
    .name {
      color: #fff;
      .time {
        color: #72767d;
        font-size: 12px;
      }
    }
    .msg {
      margin-top: 8px;
      color: #dcddde;
    }
    .at {
      color: #65b2ff;
      background: #424751;
    }
  }
}
</style>
<template>
  <div class="page spacer flex column">
    <div class="header">
      <img alt class="Avatar" src="http://placekitten.com/40/40" />
      <div class="name">你好，我是机器人小N</div>
      <div class="info">我是您的专属助手，最新的平台消息、攻略将在第一时间为您推送</div>
    </div>
    <div class="flex-sub message">
      <div class="item flex aic" v-for="m in 3">
        <img alt class="Avatar mr-1" src="http://placekitten.com/40/40" />
        <div class="body">
          <div class="name">
            机器人小N
            <span class="time">今天12:00</span>
          </div>
          <div class="msg">
            <span class="at">@我</span> 订阅了你的吃播频道
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    //console.log();
  },
  computed: {
    // test() {
    //   return 0;
    // }
  },
  data() {
    return {
//id:1
};
  },
methods:{
    // test() {
    //   return 0;
    // }
}
};
</script>