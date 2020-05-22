const state = () => ({
  headerInfo: {
    name: '守望先锋',
    code: '266354',
    member: 1231231,
    attention: 123,
    online: 123123,
    image: require('~/assets/imgs/sign_bg.png'),
  },
  mainNav: [
    {
      title: '守望先锋讨论区',
      icon: 'iconfont iconhome',
      to: '/channels/FIFA18',
    },
    {
      title: '战绩查询',
      icon: 'iconfont iconRecord',
      to: '/channels/FIFA18/standings',
    },
  ],
  hotNews: [
    {
      title: '【游戏教程】4--5月份交易集中贴（单开一律删除）',
      to: '/channels/FIFA18/article/10000',
    },
    {
      title: '【游戏教程】4--5月份交易集中贴（单开一律删除）',
      to: '/channels/FIFA18/article/10000',
    },
    {
      title: '【游戏教程】4--5月份交易集中贴（单开一律删除）',
      to: '/channels/FIFA18/article/10000',
    },
  ],
  newsList: [
    {
      sourceId: '1112233', // 原文id
      frontCover: require('~/assets/imgs/xbox@2x.jpg'), // 封面url
      title: 'nn新版本6月1号上线与大家见面',
      thumb: require('~/assets/imgs/user_bg@2x.png'), // 缩列图
      content:
        '2020年KPL夏季赛选手阵容确定！5月1日晚上20:30， NN平台EDG粉丝社区直播大厅，线上粉丝见面会...', // 内容
      to: '/channels/FIFA18/article/10000',
      likes: 189, // 点赞数
      comments: 210, // 评论数
      forwards: 319, // 转发数
      collects: 21, // 收藏数
      forwardType: 1, // 发布来源, 默认0：草稿，1：官方  2：转发
      createAt: '2020-05-16 17:00', // 时间
      forwardComment:
        '11小伙伴蓝儿参加#7天赚钱训练营# 拿到第一名🥇了[赞]，好开心😁，为她骄傲！要不断的学习成长，4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00...', // 转发动态
    },
    {
      sourceId: '11111111', // 原文id
      frontCover: require('~/assets/imgs/xbox@2x.jpg'), // 封面url
      title: 'nn新版本6月1号上线与大家见面',
      thumb: require('~/assets/imgs/user_bg@2x.png'), // 缩列图
      content:
        '2020年KPL夏季赛选手阵容确定！5月1日晚上20:30， NN平台EDG粉丝社区直播大厅，线上粉丝见面会...', // 内容
      to: '/channels/FIFA18/news/10000',
      likes: 189, // 点赞数
      comments: 210, // 评论数
      forwards: 319, // 转发数
      collects: 21, // 收藏数
      forwardType: 2, // 发布来源, 默认0：草稿，1：官方  2：转发
      createAt: '2012-05-16 17:30', // 时间
      forwardComment:
        '22小伙伴蓝儿参加#7天赚钱训练营# 拿到第一名🥇了[赞]，好开心😁，为她骄傲！要不断的学习成长，4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00，守望先锋停服更新，附上更新详情；4月29日晚上23:00-次日6:00...', // 转发动态
    },
  ],
  getNewsStatus: {
    loading: true,
    error: false,
    none: false,
  },
  channelBanner: require('~/assets/imgs/user_bg@2x.png'),
})

const getters = {}

const actions = {
  searchCommunity({ commit, state }, searchKey) {
    // todo
    // console.log('搜索社区', searchKey)
  },
  getNewsList({ commit, state }, params) {
    // todo
    commit('setState', [
      'getNewsStatus',
      {
        loading: true,
        error: true,
        none: true,
      },
    ])
    this.$axios.post('pgc/article/query', {
      communityId: 1,
      page: {
        currentPage: 1,
        pageSize: 20,
      },
    })
    // setTimeout(() => {
    //   commit('resetGetNesStatus')
    // }, 2000)
    // console.log('获取更多', state.getNewsStatus)
  },
  upload({ commit, state }, params) {
    // let config = {
    //   headers: { 'Content-Type': 'multipart/form-data' },
    //   onUploadProgress: (progressEvent) => {
    //     let complete =
    //       (((progressEvent.loaded / progressEvent.total) * 100) | 0) + '%'
    //     this.progress = complete
    //   },
    // } // 添加请求头
    // this.isLoading = true
    // let res = await axios.post('http://10.96.153.89:5000/', formdata, config)
    // this.isLoading = false
    // console.log(res)
    // this.quill.insertEmbed(
    //   length,
    //   'image',
    //   'http://10.96.153.89:5000' + res.data
    // )
    // this.$axios
  },
}

const mutations = {
  resetGetNesStatus(state) {
    for (const item in state.getNewsStatus) {
      state.getNewsStatus[item] = false
    }
  },
  setState(state, item) {
    state[item[0]] = item[1]
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
