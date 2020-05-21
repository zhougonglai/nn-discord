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
              button.nn-btn.text.small ➕关注
      VerticalTabPanel(label="收到点赞" icon="iconzan")
        .sub-header
          .tap.active 新点赞(99)
        .list.large.border.my-2
          .list-item
            .list-item-pre
              .avatar(style="background-image: url(https://api.adorable.io/avatars/285/1.png);")
            .list-item-content
              .list-item-title
                | 1号粉丝昵称
                .d-block.my-1
                  span.text-gray 你的动态:
                  span.ml-1 竟然有人叫我小兄弟? 那只能证明下自己了！
              .list-item-subtitle
                | 5分钟前
                .tap.ml-2 点赞
          .list-item
            .list-item-pre
              .avatar(style="background-image: url(https://api.adorable.io/avatars/285/1.png);")
            .list-item-content
              .list-item-title
                | 2号粉丝昵称
                .d-block.my-1
                  span.text-gray 你的动态:
                  span.ml-1 为了上热门，只能拼了，拼了老命也要上！~~~
              .list-item-subtitle
                | 昨天19:00
                .tap.ml-2 点赞
          .list-item
            .list-item-pre
              .avatar(style="background-image: url(https://api.adorable.io/avatars/285/1.png);")
            .list-item-content
              .list-item-title
                | 2号粉丝昵称
                .d-block.my-1
                  span.text-gray 你的动态:
                  span.ml-1 为了上热门，只能拼了，拼了老命也要上！~~~
              .list-item-subtitle
                | 4月15号19:00
                .tap.ml-2 点赞
      VerticalTabPanel(label="角色管理" icon="iconcomment")
        .sub-header
          .tap.active 新评论&回复(2)
      VerticalTabPanel(label="定时任务补偿" icon="iconChannelcollection") 定时任务补偿
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
</style>
