import Mock from 'mockjs'

const types = (str) => Symbol(`USER_${str}`).toString()

export const state = () => ({
  user: '',
  activeCommunityGroup: [],
  activeFriendsGroup: [],
  communityGroup: [],
  friendsGroup: [],
})

export const actions = {
  async sendCode({ commit }, form) {
    const { data } = await this.$axios.$post('/sendSms', form)
    return data
  },
  async register({ commit }, form) {
    const { data } = await this.$axios.$post('/register', form)
    return data
  },
  async loginByPhoneSms({ commit }, form) {
    const res = await this.$axios.$post('/loginByPhoneSms', form)
    console.log(res)
    // commit(types('SET_USER'), data)
    return res
  },
  async loginByPwd({ commit }, form) {
    const user = await this.$axios.$post('/loginByPwd', form)
    commit(types('SET_USER'), user)
    return user
  },
  async getUser({ commit }, form) {
    const { data } = await this.$axios.$post('/getUserByuserid', {
      ...form,
    })
    return data
  },
  getCommunityGroup({ commit }) {
    const friensGroup = [
      {
        id: '@id',
        label: '@cname',
        type: 'chat',
        avatar: {
          type: 'img',
          source: 'https://api.adorable.io/avatars/285' + '/@id()' + '.png',
        },
        'status|1': ['HOLD', 'DND', 'AFK', ''],
        'brief|1': [
          '',
          {
            type: 'icon-action',
            payload: '+',
          },
          {
            type: 'bage',
            class: 'error',
            payload: '@integer(1, 999)',
          },
        ],
      },
    ]
    const communityGroup = [
      {
        id: '@id',
        label: '@cname',
        'type|1': ['messages', 'audio'],
        'avatar|1': [
          {
            source: 'bxs-volume-full',
            type: 'icon',
          },
          {
            source: 'bxs-megaphone',
            type: 'icon',
          },
        ],
        status: '',
      },
    ]

    const { data } = Mock.mock({
      data: [
        {
          id: Math.random().toString(16).slice(-10),
          label: '消息',
          'children|5-10': friensGroup,
        },
        {
          id: Math.random().toString(16).slice(-10),
          label: '社区',
          'children|5-10': communityGroup,
        },
      ],
    })
    commit(types('COMMUNITY_GROUP'), data)
    return data
  },
  getFriendsGroup({ commit }) {
    const friensGroup = [
      {
        label: '@cname',
        avatar: {
          type: 'img',
          source: 'https://api.adorable.io/avatars/285' + '/@id()' + '.png',
        },
        'status|1': ['HOLD', 'DND', 'AFK', ''],
        'brief|1': [
          '',
          {
            type: 'icon-action',
            payload: '+',
          },
          {
            type: 'bage',
            class: 'error',
            payload: '@integer(1, 999)',
          },
        ],
      },
    ]

    const { data } = Mock.mock({
      'data|3-5': [
        {
          id: '@uuid',
          label: '@cword',
          'children|5-10': friensGroup,
        },
      ],
    })
    commit(types('FRIENDS_GROUP'), data)
    return data
  },
}

export const mutations = {
  expandCommunityGroup(state, { id }) {
    if (state.activeCommunityGroup.includes(id)) {
      state.activeCommunityGroup.splice(
        state.activeCommunityGroup.findIndex(($id) => $id === id),
        1
      )
    } else {
      state.activeCommunityGroup.push(id)
    }
  },
  expandFriendsGroup(state, { id }) {
    if (state.activeFriendsGroup.includes(id)) {
      state.activeFriendsGroup.splice(
        state.activeFriendsGroup.findIndex(($id) => $id === id),
        1
      )
    } else {
      state.activeFriendsGroup.push(id)
    }
  },
  [types('SET_USER')](state, user) {
    state.user = user
  },
  [types('COMMUNITY_GROUP')](state, group) {
    state.communityGroup = group
    state.activeCommunityGroup = group.map((g) => g.id)
  },
  [types('FRIENDS_GROUP')](state, group) {
    state.friendsGroup = group
    state.activeFriendsGroup = group.map((g) => g.id)
  },
}

export const getters = {
  // 当前用户的ID
  USER_ID: (s) => {
    const id = s.user && s.user.userId
    return id === undefined ? 0 : id
  },
}
