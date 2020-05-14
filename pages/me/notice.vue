<template lang="pug">
PageHead
  .tabs
    .tab-bars
      n-link.tab-bar(to="/channels/me/" exact) 个人中心
      n-link.tab-bar(to="/channels/me/notice") 公告
      n-link.tab-bar(to="/channels/me/community") 社区资料
      n-link.tab-bar(to="/channels/me/safe") 账户安全
      n-link.tab-bar(to="/channels/me/author") 账号授权
      n-link.tab-bar(to="/channels/me/member") 成员
      .tab-tools
        nn-btn(rund size="small") 充值
    .tab-body
      |【公告】社区规定
      | {{str}}
</template>
<script>
import PageHead from '~/components/channel/PageHead'

export default {
  name: 'Notice',
  components: {
    [PageHead.name]: PageHead,
  },
  data() {
    return {
      str: `本论坛规定：
            请文明发言，禁止发送不良信息，禁止刷屏，侮辱性言辞等不良行为。祝大家在彩六玩家的聚集地玩的愉快，高兴！！！

            特许规则：
            文字频道名称后面带*符号的禁止回复

            论坛规则：
            1.请勿挂人，尤其是id指向性极强的挂人
            2.请礼貌他人，友好交流
            3.禁止震惊/色情和政治性质的言论
            4.不恶意破坏
            5.信息发在正确的部分
            6.禁止广告
            7.禁止带节奏的言论
            8.不同意管理员操作请使用私人消息解决

            惩罚违反级别:
            警告--艾特警告，不影响您的访问，但多次警告将导致以下惩罚之一。
            踢出--从服务器踢，不当内容被删除，但有能力加入回来。
            轻度封禁--从服务器踢出，所有内容被删除，但有能力加入回来。
            永久封禁--从服务器踢出，所有的内容被删除，永久被禁止加入

            论坛完整的规则：
            1.你可以描述你所遭遇的情况，表达你的愤怒，发泄出来。但请不要泄露他的详细信息，我们这里不赞同挂人来解决事情的的行为方式
            2.友好交流是一个人的基本素养，也是一个社区能否长久的存在基石，如果喜欢这里的话请友好交流，不喜欢这里的请理性表达你的观点。
            3.请勿发送色情和让人极度不适的内容，禁止出现政治内容。
            4.禁止任何恶意破坏，如果被发现故意干扰他人语音或聊天频道，可能会被永久禁止使用论坛。
            5.发送正确的内容在正确的地方，会节省所有人的时间。多次违反此规则将导致访问限制。
            6.论坛不允许欺骗网站，链接到违反服务条款的区域，以及其他受我们规则限制的其他内容，或与彩虹六号无关的第三方广告。
            7.禁止带节奏的行为，一经发现立即删除警告甚至踢出永久封禁，尤其是树立对立情绪的带节奏行为，会破坏整个社区的氛围。
            8.如果您不同意管理员的操作，请勿安排对此进行公开讨论。所有问题都可以通过私人消息解决`,
    }
  },
}
</script>
