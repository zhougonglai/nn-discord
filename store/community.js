const state = () => ({
  headerInfo: {
    name: '守望先锋',
    code: '266354',
    member: 123123123,
    attention: 123,
    online: 123123,
    image: require('~/assets/imgs/sign_bg.png'),
  },
  mainNav: [
    {
      title: '守望先锋讨论区',
      icon: 'bx bx-search',
      to: '/channels/FIFA18',
    },
    {
      title: '战绩查询',
      icon: 'bx bx-search',
      to: '/channels/FIFA18/standings',
    },
  ],
  hotNews: [
    {
      title: '【游戏教程】4--5月份交易集中贴（单开一律删除）',
      to: '/channels/FIFA18/news/10000',
    },
    {
      title: '【游戏教程】4--5月份交易集中贴（单开一律删除）',
      to: '/channels/FIFA18/news/10000',
    },
    {
      title: '【游戏教程】4--5月份交易集中贴（单开一律删除）',
      to: '/channels/FIFA18/news/10000',
    },
  ],
  newsList: [
    {
      sourceId: '1112233', //原文id
      frontCover: require('~/assets/imgs/xbox@2x.jpg'), //封面url
      title: 'nn新版本6月1号上线与大家见面',
      thumb: require('~/assets/imgs/user_bg@2x.png'), //缩列图
      content:
        '2020年KPL夏季赛选手阵容确定！5月1日晚上20:30， NN平台EDG粉丝社区直播大厅，线上粉丝见面会...', //内容
      to: '/channels/FIFA18/news/10000',
      likes: 189, //点赞数
      comments: 210, //评论数
      forwards: 319, //转发数
      collects: 21, //收藏数
      forwardType: 1, //发布来源, 默认0：草稿，1：官方  2：转发
      createAt: '2012-05-16 17:30', //时间
      forwardComment:
        '小伙伴蓝儿参加#7天赚钱训练营# 拿到第一名🥇了[赞]，好开心😁，为她骄傲！要不断的学习成长，4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00...', //转发动态
    },
    {
      sourceId: '1112233', //原文id
      frontCover: require('~/assets/imgs/xbox@2x.jpg'), //封面url
      title: 'nn新版本6月1号上线与大家见面',
      thumb: require('~/assets/imgs/user_bg@2x.png'), //缩列图
      content:
        '2020年KPL夏季赛选手阵容确定！5月1日晚上20:30， NN平台EDG粉丝社区直播大厅，线上粉丝见面会...', //内容
      to: '/channels/FIFA18/news/10000',
      likes: 189, //点赞数
      comments: 210, //评论数
      forwards: 319, //转发数
      collects: 21, //收藏数
      forwardType: 1, //发布来源, 默认0：草稿，1：官方  2：转发
      createAt: '2012-05-16 17:30', //时间
      forwardComment:
        '小伙伴蓝儿参加#7天赚钱训练营# 拿到第一名🥇了[赞]，好开心😁，为她骄傲！要不断的学习成长，4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00...', //转发动态
    },
  ],
  channelBanner: require('~/assets/imgs/user_bg@2x.png'),
})

const getters = {}

const actions = {
  searchCommunity({ commit, state }, searchKey) {
    // todo
    console.log('搜索社区', searchKey)
  },
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations,
}
