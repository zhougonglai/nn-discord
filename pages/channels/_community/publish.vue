<template lang="pug">
.publish
    .publish-left
        CommunityPublicHeader( :to="'/channels/FIFA18'" )
        .publish-body
            .publish-tit 标题文本
            el-input( type="textarea", :rows="3",  placeholder="请输入标题"  v-model="title" )

            .publish-tit 编辑正文
            Editor
            .publish-tit 封面设置
            .publish-uploader
              el-upload( class="publish-uploader-box", action="/pgcapi/pgc/fastdfs/upload", name="multiFile" :show-file-list="false", :on-success="handleSuccess", :before-upload="beforeUpload")
                img( v-if="thumb", :src="thumb", class="publish-upload-img" )
                i( v-if="!thumb" class="iconfont iconUploadpicture" )
              .publish-upload-font
                p 图片比列:16:9 
                p 仅支持png、jpg图片，不大于20Mb
        .publish-footer
          el-button( round ) 预览
          el-button( round @click="saveDarft" ) 保存
          el-button( type="primary" round @click="onNext" ) 下一步
    .publish-right
      .publish-draft-title 草稿箱 (6/30)
      .publish-draft-add + 添加新文章
      .publish-draft-list
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
        .publish-draft-item
          i.iconfont.iconshanchu
          span 这是编辑的草稿箱1
    CommunityDialog( title="转发动态" :visible.sync="forwardsFlag" width="30%" :close-on-click-modal="false" :destroy-on-close="true"  )
      NnEditer( :buttonText="'发布'" :placeholder="'把文章分享给粉丝们吧！'" :inputClass="'content2'" @submit="saveArticle" )
        NewsItemTranspondList( @updata="onTranspondUpdata" )
</template>
<script>
import { Input, Upload } from 'element-ui'
import { mapState } from 'vuex'
import Editor from '~/components/editor/Editor'
import CommunityPublicHeader from '~/components/channel/community/CommunityPublicHeader'
import CommunityDialog from '~/components/channel/community/CommunityDialog'
import NewsItemTranspondList from '~/components/channel/community/NewsItemTranspondList'
import NnEditer from '~/components/nnediter/NnEditer'
export default {
  name: 'Publish',
  components: {
    [Input.name]: Input,
    [Upload.name]: Upload,
    Editor,
    CommunityPublicHeader,
    CommunityDialog,
    NnEditer,
    NewsItemTranspondList,
  },
  data() {
    return {
      title: '',
      thumb: '',
      frontCover: '',
      content: '1111',
      forwardComment: '',
      transpond: [],
      forwardsFlag: false,
    }
  },
  computed: {
    ...mapState('community', ['darft']),
    ...mapState(['user']),
  },
  watch: {
    darftId() {},
  },
  methods: {
    handleSuccess(res, file) {
      if (res.retCode === '100') {
        this.thumb = res.retData.thumbUrl
        this.frontCover = res.retData.url
      }
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        // console.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        // console.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 下一步
    onNext() {
      this.saveDarft().then(() => {
        this.forwardsFlag = true
      })
    },
    onTranspondUpdata(data) {
      this.transpond = data
    },
    buildArticleParams() {
      if (!this.user.userId) {
        return
      }
      return {
        communityId: 1,
        content: this.content,
        draftId: this.darft.id || null,
        forwardComment: this.forwardComment,
        frontCover: this.thumb,
        publishUid: this.user.userId,
        thumb: this.thumb,
        title: this.title,
      }
    },
    // 保存草稿
    saveDarft() {
      const params = this.buildArticleParams()
      return this.$store.dispatch('community/saveDarft', params)
    },
    // 发布文章
    saveArticle(data) {
      this.forwardComment = data
      this.forwardsFlag = false
      const params = this.buildArticleParams()
      this.$store.dispatch('community/articlePublish', params)
    },
  },
}
</script>
<style lang="scss">
.publish {
  display: flex;
  .publish-left {
    flex-grow: 1;
    flex-shrink: 222;
    background: #36393f;
    padding: 0 20px 20px;
    height: calc(100vh - 248px);
    overflow-y: auto;
    .el-textarea__inner {
      background: #303339;
    }
    .publish-tit {
      padding: 20px 0 15px;
      color: rgba(220, 221, 222, 1);
      font-size: 14px;
    }
    .publish-uploader {
      display: flex;
      .publish-uploader-box {
        width: 200px;
        height: 112px;
        line-height: 112px;
        background: rgba(48, 51, 57, 1);
        border: 1px solid rgba(34, 36, 40, 1);
        border-radius: 3px;
        text-align: center;
        i {
          font-size: 34px;
          color: #72767d;
          padding: 36px 80px;
        }
        .publish-upload-img {
          width: 200px;
          height: 112px;
        }
      }
      .publish-upload-font {
        font-size: 14px;
        color: rgba(114, 118, 125, 1);
        line-height: 20px;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        p {
          margin: 0;
        }
      }
    }
    .publish-footer {
      padding-top: 10px;
      margin-top: 20px;
      border-top: 1px solid #2f3136;
      text-align: center;
    }
  }
  .publish-right {
    width: 254px;
    .publish-draft-title {
      font-size: 16px;
      text-align: center;
      color: rgba(220, 221, 222, 1);
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid #2a2c31;
    }
    .publish-draft-add {
      width: 220px;
      height: 46px;
      line-height: 46px;
      text-align: center;
      border: 2px dashed rgba(83, 86, 93, 1);
      opacity: 1;
      border-radius: 4px;
      margin: 20px auto;
      color: rgba(220, 221, 222, 1);
      font-size: 14px;
      cursor: pointer;
    }
    .publish-draft-list {
      padding: 0 20px;
      overflow-y: auto;
      height: calc(100vh - 382px);
      .publish-draft-item {
        height: 40px;
        line-height: 40px;
        color: rgba(114, 118, 125, 1);
        border-radius: 4px;
        padding: 0 10px;
        overflow: hidden;
        i {
          float: right;
          display: none;
          cursor: pointer;
        }
        span {
          cursor: pointer;
        }
        &:hover {
          background: rgba(57, 60, 67, 1);
          i {
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
