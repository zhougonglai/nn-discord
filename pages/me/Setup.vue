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
                .flex-1.pa-2.asc NN号
                .flex-6.pa-2(v-if="profile")
                  .edit(v-if="profile.nnNumber.edit")
                    el-input(v-model="profile.nnNumber.value" @change="nnNumberChange")
                  .read(v-else @click="profile.nnNumber.edit = true")
                    | {{profile.nnNumber.value}}
            .full-width
              .flex
                .flex-1.pa-2.asc 社区介绍
                .flex-6.pa-2(v-if="profile")
                  .edit(v-if="profile.communityInfo.edit")
                    el-input(
                      type="textarea"
                      v-model="profile.communityInfo.value"
                      :autosize="{ minRows: 2, maxRows: 4}")
                    .tap(@click="communityInfoChange(profile.communityInfo.value)") 确定
                  .read(v-else @click="profile.communityInfo.edit = true") {{profile.communityInfo.value}}
            .full-width
              .flex
                .flex-1.pa-2.asc 个性签名
                .flex-6.pa-2(v-if="profile")
                  .edit(v-if="profile.signature.edit")
                    el-input(v-model="profile.signature.value" @change="signatureChange")
                  .read(v-else @click="profile.signature.edit = true") {{profile.signature.value}}
            .full-width
              .flex
                .flex-1.pa-2.asc 性别
                .flex-6.pa-2(v-if="profile")
                  .edit(v-if="profile.gender.edit")
                    el-radio-group(v-model="profile.gender.value" @change="genderChange")
                      el-radio(:label="1") 男
                      el-radio(:label="0") 女
                  .read(v-else @click="profile.gender.edit = true") {{profile.gender.value ? '男' : '女'}}
            .full-width
              .flex
                .flex-1.pa-2.asc 地址
                .flex-6.pa-2(v-if="profile")
                  .edit(v-if="profile.address.edit")
                    el-cascader(
                      v-model="address.value"
                      :options="address.options"
                      @change="addressChange")
                  .read(v-else @click="profile.address.edit = true") {{profile.address.province.label}} {{profile.address.city.label}}
            .full-width
              .flex
                .flex-1.pa-2.asc 生日
                .flex-6.pa-2(v-if="profile")
                  .edit(v-if="profile.birthday.edit")
                    el-date-picker(
                      type="date"
                      value-format="yyyy-MM-dd"
                      v-model="profile.birthday.value"
                      @change="birthdayChange")
                  .read(v-else @click="profile.birthday.edit = true") {{profile.birthday.value}}
        VerticalTabPanel(label="账号安全" icon="iconAccountsecurity") 账号安全
</template>
<script>
import { mapState } from 'vuex'
import { Radio, RadioGroup, DatePicker, Cascader } from 'element-ui'
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
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [DatePicker.name]: DatePicker,
    [Cascader.name]: Cascader,
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
        signature: {
          value: '玩游戏开黑从来都是赢',
          edit: false,
        },
        gender: {
          value: 1,
          edit: false,
        },
        address: {
          province: {
            value: 24,
            label: '湖北省',
          },
          city: {
            value: 24124,
            label: '武汉市',
          },
          edit: false,
        },
        birthday: {
          value: '2008-08-15',
          edit: false,
        },
      },
      address: {
        value: [],
        options: [
          {
            value: 24,
            label: '湖北省',
            children: [
              {
                value: 2412,
                label: '武汉市',
              },
              {
                value: 2414,
                label: '金门',
              },
              {
                value: 2413,
                label: '黄石',
              },
            ],
          },
        ],
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
    communityInfoChange(e) {
      this.profile.communityInfo.value = e
      this.profile.communityInfo.edit = false
    },
    signatureChange(e) {
      this.profile.signature.value = e
      this.profile.signature.edit = false
    },
    genderChange(e) {
      this.profile.gender.value = e
      this.profile.gender.edit = false
    },
    birthdayChange(e) {
      this.profile.birthday.edit = false
    },
    addressChange(e) {
      this.profile.address.edit = false
    },
  },
}
</script>
