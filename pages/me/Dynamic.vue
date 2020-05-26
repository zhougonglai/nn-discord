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
      VerticalTabPanel(label="我的收藏" icon="iconChannelcollection")
        .list.space
          .list-item.nohover
            .list-item-pre
              .avatar(style="background-image: url(https://api.adorable.io/avatars/285/3.png);")
            .list-item-content
              .list-item-title
                .d-inline.large 守望先锋
                SvgIcon.mx-1(icon-class="iconofficial")
                small.text-gray 守望先锋官方
              .list-item-subtitle
                | 5分钟前  来自NN客户端编辑
            .list-item-brief
              nn-btn(type="text" size="small") + 关注
            .list-item-actions
              i.el-icon-arrow-down.el-icon--right
            .list-item-child
              | 4月30日，守望先锋V1.0.2.365版本更新介绍
            .list-item-child
              .list.action
                .list-item
                  .list-item-content
                    .list-item-title nn新版本6月1号上线与大家见面
                    .list-item-subtitle 2020年KPL夏季赛选手阵容确定！5月1日晚上20:30，NN平台EDG粉丝社区直播大厅，线上粉丝见面会...
                  .list-item-actions
                    .thumbar
                      img(src="https://api.adorable.io/avatars/285/3.png")
            .list-item-child
              .tap
                i.iconfont.iconzan
                | 999
              .tap
                i.iconfont.iconpinglun
                | 999
              .tap
                i.iconfont.iconsharearticle
                | 999
              .tap
                i.iconfont.iconFavoritetext
                | 999
          .list-item.nohover
            .list-item-pre
              .avatar(style="background-image: url(https://api.adorable.io/avatars/285/3.png);")
            .list-item-content
              .list-item-title
                .d-inline.large 守望先锋
                SvgIcon.mx-1(icon-class="iconofficial")
                small.text-gray 守望先锋官方
              .list-item-subtitle
                | 5分钟前  来自NN客户端编辑
            .list-item-brief
              nn-btn(type="text" size="small") + 关注
            .list-item-actions
              i.el-icon-arrow-down.el-icon--right
            .list-item-child
              | 4月30日，守望先锋V1.0.2.365版本更新介绍
            .list-item-child
              .list.action
                .list-item
                  .list-item-content
                    .list-item-title nn新版本6月1号上线与大家见面
                    .list-item-subtitle 2020年KPL夏季赛选手阵容确定！5月1日晚上20:30，NN平台EDG粉丝社区直播大厅，线上粉丝见面会...
                  .list-item-actions
                    .thumbar
                      img(src="https://api.adorable.io/avatars/285/3.png")
            .list-item-child
              .tap
                i.iconfont.iconzan
                | 999
              .tap
                i.iconfont.iconpinglun
                | 999
              .tap
                i.iconfont.iconsharearticle
                | 999
              .tap
                i.iconfont.iconFavoritetext
                | 999


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
.action {
  height: 78px;
  width: 445px;
  background-color: #44474e;
  border-radius: 4px;
  overflow: hidden;
  .list-item {
    padding: 0;
    &-content {
      padding: 10px;
    }
    &-actions {
      width: 138px;
    }
  }
}

.list {
  &.space {
    .list-item {
      + .list-item {
        margin-top: 20px;
      }
    }
  }
}
</style>
