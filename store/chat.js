//_.throttle(, 200)
// 高频更新是界面数据使用节流减少更新

const state = () => ({
  msgList: [
    {
      id: 1,
      type: 'TEXT',
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

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations,
}
