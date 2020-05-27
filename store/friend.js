import { groupby } from '../plugins/pinyin'
// 好友相关
const state = () => ({
  // 好友列表,首字母索引 [ {key:"A":value:[]}]
  list: [
    // {
    //   "dbId": 88,
    //   "userId": 4889,
    //   "friendUid": 4945,
    //   "alias": "周公来",
    //   "extra": null,
    //   "status": 0,
    //   "updateTime": "2020-05-20T05:48:35.000+0000",
    //   "createTime": "2020-05-20T18:48:35.000+0000"
    // }
  ],

  // original_list: [], // 好友列表原始数据
})

const getters = {}

const mutations = {
  setlist(state, data) {
    state.list = groupby(data, (a) => a.alias)
  },
}
const actions = {
  // 更新好友列表
  update_list({ rootGetters, commit }) {
    this.$axios.get(`friends/${rootGetters.USER_ID}`).then((db) => {
      commit('setlist', db.data)
      return db
    })
    // _.throttle(()=>{}, 100)
  },
  // 申请添加好友
  apply({ rootGetters, dispatch }, uid) {
    return this.$axios
      .post(`friend/apply/`, {
        applyUid: rootGetters.USER_ID,
        toUserId: uid,
      })
      .then((db) => {
        dispatch('update_list')
        return db
      })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
