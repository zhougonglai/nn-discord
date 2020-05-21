<template>
  <div class="editor">
    <section
      v-loading="isLoading"
      :element-loading-text="'上传进度' + progress"
      class="editor-container"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <input
        id="file"
        ref="input"
        @change="doUpload"
        style="display: none;"
        class="file"
        type="file"
      />
      <div
        :content="content"
        @change="onEditorChange($event)"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
        v-quill:myQuillEditor="editorOption"
        class="quill-editor"
      ></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    const self = this
    return {
      editorOption: {
        // some quill options
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'], // toggled buttons
              // ['blockquote', 'code-block'],
              ['link', 'image', 'video'],

              [{ header: 1 }, { header: 2 }], // custom button values
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
              [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
              [{ direction: 'rtl' }], // text direction

              [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
              // [{ header: [1, 2, 3, 4, 5, 6, false] }],

              [{ color: [] }, { background: [] }], // dropdown with defaults from theme
              // [{ font: [] }],
              [{ align: [] }],

              ['clean'], // remove formatting button
            ],
            handlers: {
              image() {
                this.quill.format('image', false) // 禁用quill内部上传图片方法
                self.imgHandler(this)
              },
            },
          },
        },
      },
      content: '',
      isLoading: '',
      progress: '',
    }
  },
  mounted() {
    this.event_id = this.$route.query.event_id
    // const params = {
    //   event_id: this.$route.query.event_id,
    // }
    // let res = await axios.get('/api/getEvemtDetail', { params: params })
    // let event = res.data.data
    // this.form.title = event.title
    // this.form.publish_time = event.publish_time
    // this.content = event.content
  },
  methods: {
    handleRemove(file, fileList) {
      // console.log(file, fileList)
    },
    handlePreview(file) {
      // console.log(file)
    },
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    },
    onEditorChange({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      this.content = html
    },
    imgHandler(handle) {
      this.quill = handle.quill
      const inputfile = document.getElementById('file')
      inputfile.click()
    },
    doUpload() {
      const file = document.getElementById('file').files[0]
      const formdata = new FormData() // 创建form对象
      formdata.append('file', file, file.name)
      // let config = {
      //   headers: { 'Content-Type': 'multipart/form-data' },
      //   onUploadProgress: (progressEvent) => {
      //     let complete =
      //       (((progressEvent.loaded / progressEvent.total) * 100) | 0) + '%'
      //     this.progress = complete
      //   },
      // } // 添加请求头
      // this.isLoading = true
      // let res = await axios.post('http://10.96.153.89:5000/', formdata, config)
      // this.isLoading = false
      // console.log(res)
      // this.quill.insertEmbed(
      //   length,
      //   'image',
      //   'http://10.96.153.89:5000' + res.data
      // )
    },
    update() {
      // const params = {
      //   title: this.form.title,
      //   publish_time: this.form.publish_time,
      //   content: this.content,
      //   event_id: this.event_id,
      // }
      // console.log(params)
      // let res = await axios.post('/api/createEvent', params)
      // if (res.data.ret) {
      //   this.$notify.error({
      //     message: res.data.errorMsg,
      //     title: '错误',
      //   })
      // } else {
      //   this.$notify({
      //     message: res.data.errorMsg,
      //     title: '成功',
      //     type: 'success',
      //   })
      // }
    },
  },
}
</script>
<style lang="scss">
.editor {
  .ql-toolbar {
    border: none;
    span {
      color: #72767d;
    }
  }
  .ql-container {
    background: #303339;
    border-radius: 3px;
    border: 1px solid rgba(34, 36, 40, 1) !important;
    font-size: 14px;
    color: #72767d;
    height: 315px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .ql-editor.ql-blank::before {
    color: #72767d;
    content: '请输入';
    font-style: normal;
  }
  .ql-snow .ql-stroke {
    stroke: #72767d;
  }
  .ql-snow .ql-fill,
  .ql-snow .ql-stroke.ql-fill {
    fill: #72767d;
  }
  .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: #36393f;
    color: #72767d;
    border: 1px solid #222428;
  }
}
</style>
