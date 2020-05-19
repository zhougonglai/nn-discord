<style lang="scss" scoped>
.announcement {
  color: #dcddde;
  padding: 34px 28px 0 28px;
  line-height: 20px;
  border-bottom: 1px solid #2f3136;
}
</style>
<template>
  <PageHead>
    <MeTabs>
      <div class="v-ofa full-width">
        <div class="announcement">
          <div class="title">【公告】社区规定</div>
          <pre
            >{{ str }}
    </pre
          >
        </div>
        <messageBoard></messageBoard>
      </div>
    </MeTabs>
  </PageHead>
</template>
<script>
import PageHead from '~/components/channel/PageHead'
import MeTabs from '~/components/channel/MeTabs'
import messageBoard from '~/components/channel/messageBoard'

export default {
  name: 'Notice',
  components: {
    [PageHead.name]: PageHead,
    [MeTabs.name]: MeTabs,
    [messageBoard.name]: messageBoard,
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
8.不同意管理员操作请使用私人消息解决`,
    }
  },
}
</script>
