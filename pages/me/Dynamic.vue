<template lang="pug">
PageHead
  MeTabs
    VerticalTabs
      VerticalTabPanel(label="我的粉丝" icon="iconfans")
        .sub-header
          .tap.active 新粉丝 (9)
          .tap 粉丝总数 (960万)
        .list.large.border.my-2
          .list-item(v-for="n in 10" :key="n")
            .list-item-pre
              .avatar(:style="`background-image: url(https://api.adorable.io/avatars/285/${n}.png);`")
            .list-item-content
              .list-item-title 1号粉丝昵称
              .list-item-subtitle 5分钟前  关注了你
            .list-item-brief
              .tap TA的社区
            .list-item-actions
              button.nn-btn.text.small + 关注
      VerticalTabPanel(label="收到点赞" icon="iconzan")
        .sub-header
          .tap.active 新点赞(99)
        .list.large.border.my-2
          .list-item.nohover
            .list-item-pre
              .avatar(style="background-image: url(https://api.adorable.io/avatars/285/1.png);")
            .list-item-content
              .list-item-title
                | 1号粉丝昵称
                .d-block.my-1
                  span.text-gray 你的动态:
                  span.ml-1 竟然有人叫我小兄弟? 那只能证明下自己了！
            .list-item-child
              span.text-gray 5分钟前
              .tap.ml-2 点赞
          .list-item.nohover
            .list-item-pre
              .avatar(style="background-image: url(https://api.adorable.io/avatars/285/1.png);")
            .list-item-content
              .list-item-title
                | 2号粉丝昵称
                .d-block.my-1
                  span.text-gray 你的动态:
                  span.ml-1 为了上热门，只能拼了，拼了老命也要上！~~~
            .list-item-child
              span.text-gray 昨天19:00
              .tap.ml-2 点赞
          .list-item.nohover
            .list-item-pre
              .avatar(style="background-image: url(https://api.adorable.io/avatars/285/1.png);")
            .list-item-content
              .list-item-title
                | 2号粉丝昵称
                .d-block.my-1
                  span.text-gray 你的动态:
                  span.ml-1 为了上热门，只能拼了，拼了老命也要上！~~~
            .list-item-child
              span.text-gray 4月15号19:00
              .tap.ml-2 点赞
      VerticalTabPanel(label="角色管理" icon="iconcomment")
        .sub-header
          .tap.active 新评论&回复(2)
        .list.large.border.my-2
          .list-item.normore
            .list-item-pre
              .avatar(style="background-image: url(https://api.adorable.io/avatars/285/2.png);")
            .list-item-content
              .paragraph
                .d-inline.mr-2
                  span.text-gray AtlasPrime
                  span.mx-1 回复
                  span.text-gray BBtlasPri
                | 有点相像让你点，大部分都是见后范的额额的二分违法违法查看看就知道了，不会很难。
            .list-item-child
              span.text-gray 5分钟
              .spacer
              .tools
                .tap 回复
                .tap.ml-2 👍(12)
          .list-item.normore
            .list-item-pre
              .avatar(style="background-image: url(https://api.adorable.io/avatars/285/2.png);")
            .list-item-content
              .paragraph
                .d-inline.mr-2
                  span.text-gray Leisefw
                  span.mx-1 回复
                  span.text-gray BBtlasPri
                | 有点相像让你点，大部分都是见后视儿否武威我ew而乏味违法eee看看就知道了，不会很难。
            .list-item-child
              span.text-gray 1小时
              .spacer
              .tools
                .tap 回复
                .tap.ml-2 👍(12)
              .input-board.full-width
                .list
                  .list-item.nohover
                    .list-item-pre
                      .avatar(style="background-image: url(https://api.adorable.io/avatars/285/3.png);")
                    .list-item-content
                      nn-input(placeholder="回复BBtlasPri")
                    .list-item-child
                      | 😊
                      .spacer
                      nn-btn(rund size="small") 回复
      VerticalTabPanel(label="定时任务补偿" icon="iconChannelcollection")
        .list
          .list-item.nohover
            .list-item-pre
              .avatar(style="background-image: url(https://api.adorable.io/avatars/285/3.png);")
            .list-item-content
              .list-item-title
                .d-inline.large 守望先锋
                SvgIcon(icon-class="iconofficial")
                small.text-gray 守望先锋官方
              .list-item-subtitle
                | 5分钟前  来自NN客户端编辑
            .list-item-brief
              nn-btn(type="text" size="small") + 关注
            .list-item-actions
              i.el-icon-arrow-down.el-icon--right
</template>
<script>
import PageHead from '~/components/channel/PageHead'
import MeTabs from '~/components/channel/MeTabs'
import VerticalTabs from '~/components/channel/VerticalTabs'
import VerticalTabPanel from '~/components/channel/VerticalTabPanel'

export default {
  name: 'Dynamic',
  components: {
    [PageHead.name]: PageHead,
    [MeTabs.name]: MeTabs,
    [VerticalTabs.name]: VerticalTabs,
    [VerticalTabPanel.name]: VerticalTabPanel,
  },
}
</script>
<style lang="scss" scoped>
.sub-header {
  .tap {
    & + .tap {
      margin-left: 10px;
    }
  }
}
.input-board {
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: #26272b;
  position: relative;
  &::after {
    content: '';
    border-left: 8px transparent dashed;
    border-right: 8px transparent dashed;
    border-top: 8px transparent dashed;
    border-bottom: 8px #26272b solid;
    position: absolute;
    right: 62px;
    top: -15px;
  }
}
</style>
