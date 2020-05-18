<style scoped lang="scss">
// 消息列表
.item {
  margin: 0 0 24px 0;
  .Avatar {
    @include Circle(40px);
    display: block;
  }
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
    line-height: 20px;
    position: relative;
  }
  .at {
    color: #65b2ff;
    background: #424751;
  }
  .item-img ::v-deep img {
    max-width: 100%;
    max-height: 300px;
    height: auto;
    width: auto;
  }
}
div.video-btn {
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  position: absolute;
  font-size: 48px;
  color: #dcddde;
}
</style>
<template>
  <div class="item flex">
    <img alt class="Avatar" src="http://placekitten.com/40/40" />
    <div class="body ml-1">
      <div class="name">
        机器人小N
        <span class="time">今天12:00</span>
      </div>
      <div class="msg" v-if="data.type == 'TEXT'">
        <span class="at">@我</span>
        {{ data.src }}
      </div>
      <div class="msg" v-if="data.type == 'IMG'">
        <el-image
          :preview-src-list="[data.src]"
          :src="data.src"
          class="item-img"
        ></el-image>
      </div>
      <div @click="handleEvent" class="msg" v-if="data.type == 'AUDIO'">
        <audio :src="data.src" class="item-audio" controls></audio>
      </div>
      <div @click.prevent="handleEvent" class="msg" v-if="data.type == 'VIDEO'">
        <video :src="data.src" class="item-video"></video>
        <div class="video-btn">
          <i class="el-icon-video-play"></i>
        </div>
      </div>
    </div>
    <el-dialog
      :before-close="handleClose"
      :visible.sync="show"
      append-to-body
      class="web__dialog"
      width="40%"
    >
      <video
        :src="videoSrc"
        autoplay="autoplay"
        controls="controls"
        style="width: 100%; object-fit: cover;"
        v-if="videoSrc"
      ></video>
      <audio
        :src="audioSrc"
        controls="controls"
        style="width: 100%; object-fit: cover;"
        v-if="audioSrc"
      ></audio>
    </el-dialog>
  </div>
</template>
<script>
import { Dialog, Image } from 'element-ui'
export default {
  name: 'chat-item',
  components: { [Dialog.name]: Dialog, [Image.name]: Image },
  props: {
    data: Object,
    beforeOpen: Function, //点击事件
  },
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
      show: false,
      imgSrc: '',
      videoSrc: '',
      audioSrc: '',
    }
  },
  methods: {
    //处理事件
    handleEvent() {
      let params = this.data
      const callback = () => {
        if (params.type === 'IMG') {
          this.imgSrc = params.src
          this.show = true
        } else if (params.type === 'VIDEO') {
          this.videoSrc = params.src
          this.show = true
        } else if (params.type === 'AUDIO') {
          this.audioSrc = params.src
          this.show = true
        } else if (params.type === 'FILE') {
          window.open(params.src)
        }
      }
      if (typeof this.beforeOpen === 'function') {
        this.beforeOpen(params, callback)
      } else {
        callback()
      }
    },
    handleClose(done) {
      this.imgSrc = undefined
      this.videoSrc = undefined
      this.audioSrc = undefined
      done()
    },
  },
}
</script>
