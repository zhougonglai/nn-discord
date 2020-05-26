<style scoped lang="scss">
.page {
  background-color: #36393f;
}
.nav2 {
  width: 218px;
  padding: 28px;
  border-right: 1px solid #2f3136;
  height: 100%;
  .Avatar {
    @include Circle(48px);
  }
  .nickname {
    color: #dcddde;
    font-size: 18px;
  }
  .label {
    color: #72767d;
    font-size: 12px;
    line-height: 2;
  }
  .info {
    color: #dcddde;
    padding-bottom: 15px;
  }
  .btns {
    padding: 10px 0;
  }
  .ccc {
    color: #9fa4ab;
  }
}
//右边
.box-right {
  padding: 5px 24px;
  font-size: 12px;
  .title {
    color: #dcddde;
    margin-top: 30px;
    padding-bottom: 12px;
  }
  .info {
    line-height: 20px;
    color: #72767d;
  }
  .admin-list {
    .item {
      @include Circle(32px);
      margin: 0 12px 12px 0;
    }
  }
  .situation {
    margin-right: 30px;
    text-align: center;
    .name {
      color: #72767d;
      line-height: 3;
      font-size: 12px;
    }
  }
  .community-list .item {
    width: 165px;
    border-radius: 5px;
    overflow: hidden;
    margin: 0 10px 10px 0;
    .img {
      width: 100%;
      height: 94px;
    }
    .footer {
      background: #292b2f;
      padding: 8px;
      img {
        @include Circle(38px);
        margin-right: 8px;
      }
      span {
        color: #dcddde;
        font-size: 14px;
      }
    }
  }
}
</style>
<template>
  <div class="page spacer flex column">
    <NnBanner
      href="//www.baidu.com"
      img="http://placekitten.com/1280/136"
    ></NnBanner>
    <div class="flex-sub flex">
      <!-- 左侧 -->
      <div class="nav2">
        <div class="flex aic mb-2 mt-1">
          <img class="Avatar mr-1" src="http://placekitten.com/48/48" />
          <div class="nickname">我是好友2</div>
        </div>
        <div class="label">社区号</div>
        <div class="info">3232332</div>
        <div class="label">社区地址</div>
        <div class="info">www.3232332.nn.com</div>
        <div class="label">创建者</div>
        <div class="info ccc">王远方</div>
        <div class="label">创建时间</div>
        <div class="info ccc">2020-04-29 17:00</div>
        <div class="btns">
          <el-button @click="send_message" round type="primary"
            >发消息</el-button
          >
        </div>
      </div>
      <!-- 右侧 -->
      <div class="flex-sub box-right">
        <div class="title">社区介绍</div>
        <div class="info">
          范围生栋覆屋威风威风佛文峰从威风威风
          沃尔芬佛违反为我佛文峰沃尔芬我发我发
          我发玮佛文峰玮佛文峰我发我发范围生栋覆屋威风威风佛文峰从威风威风
          沃尔芬佛 违反为我佛文峰沃尔芬我发我发我发玮佛文峰玮佛文峰我发我发
        </div>
        <div class="title">个性签名</div>
        <div class="info">社区区长很懒，什么都没有留下</div>
        <div class="title">管理员</div>
        <div class="admin-list">
          <img
            v-for="a in 15"
            :key="a"
            @click="click_admin(a)"
            class="item"
            src="http://placekitten.com/32/32"
            title="姓名2"
          />
        </div>
        <div class="title">成员状况</div>
        <div class="flex">
          <div class="situation">
            <el-progress
              :percentage="25"
              :stroke-width="4"
              :width="60"
              type="circle"
            ></el-progress>
            <div class="name">男-1527人</div>
          </div>
          <div class="situation">
            <el-progress
              :percentage="25"
              :stroke-width="4"
              :width="60"
              type="circle"
            ></el-progress>
            <div class="name">男-1527人</div>
          </div>
          <div class="situation">
            <el-progress
              :percentage="25"
              :stroke-width="4"
              :width="60"
              type="circle"
            ></el-progress>
            <div class="name">男-1527人</div>
          </div>
        </div>
        <div class="title">加入的社区</div>
        <div class="community-list flex wrap">
          <n-link v-for="c in 6" :key="c" :to="'/channels/FIFA18'" class="item">
            <img class="img" src="http://placekitten.com/165/94" />
            <div class="footer flex aic">
              <img src="http://placekitten.com/38/38" />
              <span>炉石传说</span>
            </div>
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Progress } from 'element-ui'
import nnBanner from '~/components/wc/nnBanner'
export default {
  name: 'FriendSearch',
  components: {
    [nnBanner.name]: nnBanner,
    [Progress.name]: Progress,
  },
  methods: {
    send_message() {
      this.$router.push('/me/chat/' + this.$route.params.id)
    },
    click_admin(db) {
      // this.$router.push('/friends/2')
      // 查看好友状态
      // this.$axios.get('friend/status/4889/4945', {}).then(({ data }) => {
      //   console.log(data)
      //   // this.data = data;
      // })
    },
  },
}
</script>
