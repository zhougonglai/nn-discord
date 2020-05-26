<template lang="pug">
  PageHead
    MeTabs
      VerticalTabs
        VerticalTabPanel(label="资料" icon="icondata")
          .flex.column
            .full-width
              .flex
                .flex-1.pa-2.asc 头像
                .flex-6.pa-2.flex.aic(v-if="profile")
                  .avatar.large(:style="`background-image: url(${profile.userUrl.src});`")
                  .tap.ml-2
                    i.iconfont.iconreplace
                    | 更换头像
            .full-width
              .flex
                .flex-1.pa-2.asc 社区图
                .flex-6.pa-2.flex.aic(v-if="profile")
                  .cover(:style="`background-image: url(${profile.cover.src});width: 100px;height: 60px;`")
                  .tap.ml-2
                    i.iconfont.iconreplace
                    | 更换社区背景图
            .full-width
              .flex
                .flex-1.pa-2.asc 昵称
                .flex-6.pa-2(v-if="profile")
                  .edit(v-if="profile.nickName.edit")
                    el-input(v-model="profile.nickName.value" @change="nickNameChange")
                  .read(v-else @click="profile.nickName.edit = true")
                    | {{profile.nickName.value}}
            .full-width
              .flex
                .flex-1.pa-2  NN号
                .flex-6.pa-2(v-if="profile")
                  .edit(v-if="profile.nnNumber.edit")
                    el-input(v-model="profile.nnNumber.value" @change="nnNumberChange")
                  .read(v-else)
                    | {{profile.nnNumber.value}}
            .full-width
              .flex
                .flex-1.pa-2 社区介绍
                .flex-6.pa-2(v-if="profile") {{profile.communityInfo.value}}
            .full-width
              .flex
                .flex-1.pa-2 个性签名
                .flex-6.pa-2(v-if="profile") 玩游戏开黑从来都是赢
            .full-width
              .flex
                .flex-1.pa-2 性别
                .flex-6.pa-2(v-if="profile") 男
            .full-width
              .flex
                .flex-1.pa-2 地址
                .flex-6.pa-2(v-if="profile") 湖北省 武汉市 洪山区
            .full-width
              .flex
                .flex-1.pa-2 生日
                .flex-6.pa-2(v-if="profile") 2008年08月15日
        VerticalTabPanel(label="账号安全" icon="iconAccountsecurity") 账号安全
</template>
<script>
import { mapState } from 'vuex'
import PageHead from '~/components/channel/PageHead'
import MeTabs from '~/components/channel/MeTabs'
import VerticalTabs from '~/components/channel/VerticalTabs'
import VerticalTabPanel from '~/components/channel/VerticalTabPanel'

export default {
  name: 'Setup',
  components: {
    [MeTabs.name]: MeTabs,
    [PageHead.name]: PageHead,
    [VerticalTabs.name]: VerticalTabs,
    [VerticalTabPanel.name]: VerticalTabPanel,
  },
  computed: {
    ...mapState(['user']),
  },
  data() {
    return {
      profile: {
        userUrl: {
          src: 'https://api.adorable.io/avatars/285/1.png',
          edit: false,
        },
        cover: {
          src: 'https://api.adorable.io/avatars/285/2.png',
          edit: false,
        },
        nickName: {
          value: '',
          edit: false,
        },
        nnNumber: {
          value: '',
          edit: false,
        },
        communityInfo: {
          value:
            '三反五反范围违反违反违反违反 范围违反违反违反玮分为违反额我佛为未复位得分王的分问我分为违反违反违反违反地方分为枫 我佛为未复位得分王的分问我分为违反违反违反违反地方分为枫',
          edit: false,
        },
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.profile.nickName.value = this.user.nickName
        this.profile.nnNumber.value = this.user.nnNumber
      }, 65)
    })
  },
  methods: {
    nickNameChange(e) {
      this.profile.nickName.value = e
      this.profile.nickName.edit = false
    },
    nnNumberChange(e) {
      this.profile.nnNumber.value = e
      this.profile.nnNumber.edit = false
    },
  },
}
</script>
