<style scoped lang="scss">
.Record-query {
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
<template>
  <div class="Record-query">
    <iframe :src="src" v-if="src" frameborder="0"></iframe>
    <noData v-else>
      当前游戏的战绩只支持在客户端中查看
    </noData>
  </div>
</template>
<script>
const links = [
  '/CSGO/performance',
  '/CallOfDuty/performance',
  '/DOTA2/performance',
  '/DOTA2/performance/HistoryView',
  '/DOTA2/performance/OverView',
  '/DOTA2/performance/SearchUserView',
  '/Destiny2/performance',
  '/Destiny2/performance/history',
  '/Destiny2/performance/logs',
  '/Destiny2/performance/pane',
  '/LOL/performance',
  '/LOL/performance/HistoryView',
  '/LOL/performance/OverView',
  '/Overwatch/performance',
  '/Overwatch/performance/heroList',
  '/Overwatch/performance/pane',
  '/PUBG/performance',
  '/PUBG/performance/HistoryView',
  '/PUBG/performance/OverView',
  '/RainbowSix/performance',
  '/RainbowSix/performance/CadreView',
  '/RainbowSix/performance/OverView',
  '/RainbowSix/performance/SearchUser',
]
export default {
  data() {
    return {
      src: '',
    }
  },
  computed: {
    // test() {
    //   return 0;
    // }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      this.geturl()
    }
  },
  methods: {
    geturl() {
      let game = this.$route.params.community // 社区对应的游戏
      // TODO 假设游戏是DOTA2
      game = 'DOTA2'
      let href = links.find((a) => a.indexOf(`/${game}/`) === 0)
      if (href === undefined) return
      href = href.substr(1)
      this.src = `${process.env.Recharge_URL}${href}`
    },
  },
}
</script>
