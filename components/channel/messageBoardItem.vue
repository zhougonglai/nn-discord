<style scoped lang="scss">
.name {
  color: #50adff;
  cursor: pointer;
}
.msg {
  min-height: 100px;
  padding: 15px 0;
  color: #dcddde;
}
.body {
  margin-left: 12px;
  flex: 1;
}
.footer {
  border-bottom: 1px solid #2f3136;
  padding-bottom: 20px;
  margin-bottom: 20px;
  .time {
    color: #72767d;
  }
  .Reply {
    margin-left: 16px;
    color: #50adff;
    cursor: pointer;
  }
}

.one {
  margin-top: 20px;
  .Avatar {
    @include Circle(50px);
  }
}
.two {
  .Avatar {
    @include Circle(34px);
  }
}
.txt-Reply {
  ::v-deep textarea {
    background: #303339;
  }
}
.btns {
  padding: 15px 0;
  margin-bottom: 25px;
  color: #72767d;
  span {
    cursor: pointer;
  }
  .ok {
    color: #50adff;
  }
}
</style>
<template>
  <div :class="[type]" class="flex">
    <img class="Avatar" src="http://placekitten.com/40/40" />
    <div class="body">
      <div class="name">五五开的房间<VIP style="height: 16px;"></VIP></div>
      <div class="msg">
        你这个公告写的很有水平啊~~~~
      </div>
      <div class="footer">
        <span class="time">2020-05-01 19:30</span>
        <span @click="showReply = true" class="Reply">回复</span>
      </div>
      <template v-if="showReply">
        <el-input
          v-model="msg"
          :autosize="{ minRows: 3, maxRows: 6 }"
          type="textarea"
          class="txt-Reply"
          placeholder="留言仅社区创建者及社区管理员可见"
          maxlength="200"
          show-word-limit
          clearable
          resize="none"
          autofocus
        >
        </el-input>
        <div class="btns">
          <span @click="submit" class="ok mr-2">确定</span>
          <span @click="cancel">取消</span>
        </div>
      </template>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { Input } from 'element-ui'
import VIP from '~/assets/icons/VIP.svg'
export default {
  components: { VIP, [Input.name]: Input },
  props: { type: { default: 'one' } },
  data() {
    return {
      msg: '',
      showReply: false,
    }
  },
  computed: {
    // test() {
    //   return 0;
    // }
  },
  mounted() {
    // console.log();
  },
  methods: {
    submit() {
      console.log(this.msg)
      this.cancel()
    },
    cancel() {
      this.msg = ''
      this.showReply = false
    },
  },
}
</script>
