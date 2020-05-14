<template lang="pug">
PageHead
  .tabs
    .tab-bars
      n-link.tab-bar(to="/channels/me/" exact) 个人中心
      n-link.tab-bar(to="/channels/me/community") 社区资料
      n-link.tab-bar(to="/channels/me/notice") 公告
      n-link.tab-bar(to="/channels/me/safe") 账户安全
      n-link.tab-bar(to="/channels/me/author") 账号授权
      n-link.tab-bar(to="/channels/me/member") 成员
      .tab-tools
        nn-btn(rund size="small") 充值
    .tab-body 账号安全
</template>
<script>
import PageHead from '~/components/channel/PageHead'

export default {
  name: 'Safe',
  components: {
    [PageHead.name]: PageHead,
  },
}
</script>
