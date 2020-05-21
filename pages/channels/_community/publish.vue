<template lang="pug">
.publish
    .publish-left
        .publish-header
            .publish-header-title 编辑文章
              n-link( :to="'/channels/FIFA18'" )
                .publish-header-title-back 返回首页
                  .publish-header-title-back-icon1
                  .publish-header-title-back-icon2
        .publish-body
            .publish-tit 标题文本
            el-input( type="textarea", :rows="3",  placeholder="请输入标题"  v-model="textarea" )

            .publish-tit 编辑正文
            Editor
            .publish-tit 封面设置
            .publish-uploader
              el-upload( class="publish-uploader-box", action="https://jsonplaceholder.typicode.com/posts/", :show-file-list="false", :on-success="handleSuccess", :before-upload="beforeUpload")
                img( v-if="imageUrl", :src="imageUrl", class="publish-upload-img" )
                i( v-if="!imageUrl" class="iconfont iconUploadpicture" )
              .publish-upload-font
                p 图片比列:16:9 
                p 仅支持png、jpg图片，不大于20Mb
        .publish-footer
          el-button( round ) 预览
          el-button( round ) 保存
          el-button( type="primary" round ) 下一步
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
    
</template>
<script>
import { Input, Upload } from 'element-ui'
import Editor from '~/components/editor/Editor'
export default {
  name: 'publish',
  data() {
    return {
      textarea: '',
      imageUrl: '',
      content: '1111',
    }
  },
  components: {
    [Input.name]: Input,
    [Upload.name]: Upload,
    Editor,
  },
  methods: {
    handleSuccess(res, file) {
      console.log(res, file, '11111111')
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        console.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        console.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
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
    .publish-header-title {
      text-align: center;
      position: relative;
      font-size: 16px;
      height: 48px;
      line-height: 48px;
      color: rgba(220, 221, 222, 1);
      border-bottom: 1px solid #2f3136;
      .publish-header-title-back {
        position: absolute;
        cursor: pointer;
        width: 66px;
        height: 24px;
        line-height: 24px;
        top: 12px;
        left: 12px;
        text-align: right;
        padding-right: 8px;
        font-size: 10px;
        color: rgba(220, 221, 222, 1);
        background: rgba(72, 75, 83, 1);
        .publish-header-title-back-icon1 {
          position: absolute;
          width: 0;
          height: 0;
          border: 12px solid transparent;
          border-right-color: rgba(72, 75, 83, 1);
          top: 0;
          left: -24px;
        }
        .publish-header-title-back-icon2 {
          position: absolute;
          width: 0;
          height: 0;
          border: 4px solid transparent;
          border-right-color: #7a7d84;
          top: 8px;
          left: -2px;
        }
      }
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
