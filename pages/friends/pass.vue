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
    .status {
      color: #72767d;
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
      <div v-for="item in list" :key="item.dbId" class="item flex aic">
        <n-link :to="'/friends/' + item.applyUserId">
          <img alt class="Avatar" src="http://placekitten.com/42/42" />
        </n-link>
        <n-link :to="'/friends/' + item.applyUserId">
          <div class="name">1号粉丝昵称</div>
        </n-link>
        <img v-if="true" alt src="~/assets/imgs/man.png" />
        <img v-else alt src="~/assets/imgs/woman.png" />

        <div class="info flex-1">申请成为好友</div>
        <!-- 待同意 -->
        <template v-if="item.status == 0">
          <el-button @click="Refuse(item)" round size="mini" type="default"
            >拒绝</el-button
          >
          <el-button @click="accept(item)" round size="mini" type="primary"
            >接受</el-button
          >
        </template>
        <!-- 同意 -->
        <template v-if="item.status == 1">
          <span class="status">{{ item.type == 0 ? '已添加' : '已同意' }}</span>
        </template>
        <!-- 忽略 -->
        <template v-if="item.status == 2">
          <span class="status">已忽略</span>
        </template>
        <!-- 过期 -->
        <template v-if="item.status == 3"
          ><span class="status">已过期</span></template
        >
        <!-- 拒绝 -->
        <template v-if="item.status == 4"
          ><span class="status">已拒绝</span></template
        >
      </div>
      <noData v-if="list.length == 0">暂无好友申请</noData>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import nnBanner from '~/components/wc/nnBanner'
export default {
  name: 'FriendSearch',
  components: {
    [nnBanner.name]: nnBanner,
  },
  computed: {
    ...mapGetters(['USER_ID']),
  },
  data() {
    return {
      list: [
        // {
        //       "dbId": 83,
        //       "applyUserId": 4945, //申请人
        //       "toId": 4889, //自己id
        //       "wid": null, //频道/社区id
        //       "approveId": null,//审批人
        /**
         * 类型
     *  0：好友申请
     *  1：频道申请
     *  2：群申请

         */
        //       "type": 0,//
        /**
         * 状态
         *  0:待确认
         *  1:同意
         *  2:忽略
         *  3:过期
         *  4:拒绝
         */
        //       "status": 0,
        /**
         * 申请内容
         */
        //       "content": null, //
        //       "createTime": "2020-05-20T15:54:19.000+0000"
        //     }
      ],
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    // 查询用户所有申请列表
    async getlist() {
      const { data } = await this.$axios.get(`apply/list/${this.USER_ID}`)
      this.list = data
    },
    // 频道 channel 好友 friend
    // 拒绝
    Refuse({ type, dbId }) {
      let cmdType = ''
      switch (type) {
        case 1: // 频道
          cmdType = 'channel'
          break
        case 2: // 群
          cmdType = 'group'
          break
        case 0: // 好友
        default:
          cmdType = 'friend'
          break
      }
      this.$axios
        .put(`${cmdType}/apply/ignored`, {
          applyId: dbId,
        })
        .then(({ msg }) => {
          this.$message.info(msg)
          this.getlist()
        })
    },
    // 接受
    accept({ type, dbId }) {
      let cmdType = ''
      switch (type) {
        case 1: // 频道
          cmdType = 'channel'
          break
        case 2: // 群
          cmdType = 'group'
          break
        case 0: // 好友
        default:
          cmdType = 'friend'
          break
      }
      this.$axios
        .put(`${cmdType}/apply/agree`, {
          alias: '周公来',
          applyId: dbId,
        })
        .then(({ msg }) => {
          this.$message.success(msg)
          this.getlist()
        })
    },
  },
}
</script>
