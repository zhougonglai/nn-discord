// _.throttle(, 200)
// 高频更新是界面数据使用节流减少更新

const state = () => ({
  // 是否禁止输入
  disabled: false,
  state: 'INIT', // 状态
  type: 0, // 0不在聊天窗口
  // 消息列表
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

const mutations = {
  update(state, data) {
    Object.assign(state, data)
  },
  SET_state(state, data) {
    state.state = data
  },
  'message-add'(state, { uid, data, type }) {
    // state.msgList.push({
    //   id: Math.random(),
    //   type: 'TEXT',
    //   src: data,
    // })
  },
}
const actions = {
  /**
  进入聊天室
  type:0未进入聊天 1:私聊 2:
  id:4945//相关id 比如
  */
  enter({ state, commit }, { type, id }) {
    commit('update', {
      type,
      id,
    })
  },
  /**
  离开聊天室
  type:0未进入聊天 1:私聊 2:
  id:4945//相关id 比如
  */
  exit({ state, commit }) {
    commit('update', {
      type: 0,
      id: 0,
    })
  },
  // 发送私聊消息
  send({ state, commit }, { data, type }) {
    this.$ws.sendMsg(state.id, data, type)
    // switch (state.type) {
    //   case 0: // 私聊
    //     break
    //   case 1:
    //   default:
    //     break
    // }

    // commit('message-add', data)
  },
  // 'send-img'({ state, commit }, file) {
  //   // commit('message-add', data)
  // },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
