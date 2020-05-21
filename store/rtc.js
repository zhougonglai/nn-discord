export const state = () => ({
  status: '',
})

export const mutations = {
  SET_STATUS(state, status) {
    state.status = status
  },
}
