//_.throttle(, 200)
// 高频更新是界面数据使用节流减少更新

const state = () => ({
  msgList: [
    {
      id: 1,
      type: 'TEXT',
      src:
        '我想知道你是怎么玩英雄联盟韩服的，我是个菜鸟，可以告诉我最简单的出装吗，让我这个新手玩起来也能像大神一样哈哈哈哈啊哈哈，大神~~ 帮帮忙啦😭😭😭~~~~~~~！！！！！！！！！！',
    },
    {
      id: 2,
      type: 'IMG',
      src: 'http://placekitten.com/1280/800',
    },
    {
      id: 4,
      type: 'AUDIO',
      src: 'https://www.w3school.com.cn/i/horse.mp3',
    },
    {
      id: 3,
      type: 'VIDEO',
      src: 'https://www.w3school.com.cn/i/movie.mp4',
    },
  ],
})

const getters = {}

const actions = {
  ['send-text']({ state, commit }, data) {
    commit('message-add', data)
  },
}

const mutations = {
  ['update'](state) {
    //
  },
  ['message-add'](state, data) {
    state.msgList.push({
      id: Math.random(),
      type: 'TEXT',
      src: data,
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
