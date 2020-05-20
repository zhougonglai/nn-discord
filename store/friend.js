// 好友相关
const state = () => ({
  // 好友列表
  list: [],
  // original_list: [], // 好友列表原始数据
})

const getters = {}

const mutations = {
  setlist(state, data) {
    state.list = data
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
