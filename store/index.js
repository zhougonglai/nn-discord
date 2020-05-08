import Mock from 'mockjs'

const types = (str) => Symbol(`USER_${str}`).toString()

export const state = () => ({
  user: '',
  activeCommunityGroup: [],
  activeFriendsGroup: [],
  communityGroup: [],
  friendsGroup: []
})

export const actions = {
  getUser({ commit }) {
    const { data } = Mock.mock({
      data: {
        id: Math.random()
          .toString(16)
          .slice(-10),
        nickName: '@cname',
        imageUrl: 'https://api.adorable.io/avatars/285' + '/@id()' + '.png',
        memberNo: '@guid',
        email: '@email()',
        gender: '@integer(-1, 1)',
        fans: '@integer(0, 99999999)',
        follow: '@integer(0, 99999999)',
        signature: '@cparagraph'
      },
      status: true
    })
    commit(types('SET'), data)
    return data
  },
  getCommunityGroup({ commit }) {
    const friensGroup = [
      {
        label: '@cname',
        avatar: {
          type: 'img',
          source: 'https://api.adorable.io/avatars/285' + '/@id()' + '.png'
        },
        'status|1': ['HOLD', 'DND', 'AFK', ''],
        'brief|1': [
          '',
          {
            type: 'icon-action',
            payload: '+'
          },
          {
            type: 'bage',
            class: 'error',
            payload: '@integer(1, 999)'
          }
        ]
      }
    ]
    const communityGroup = [
      {
        label: '@cname',
        'avatar|1': [
          {
            source: 'bxs-volume-full',
            type: 'icon'
          },
          {
            source: 'bxs-megaphone',
            type: 'icon'
          }
        ],
        status: '',
        'brief|1': [
          '',
          {
            type: 'action',
            'payload|1': ['管理', '创建']
          },
          {
            type: 'text',
            payload: '文'
          }
        ]
      }
    ]

    const { data } = Mock.mock({
      data: [
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          label: '消息',
          'children|5-10': friensGroup
        },
        {
          id: Math.random()
            .toString(16)
            .slice(-10),
          label: '社区',
          'children|5-10': communityGroup
        }
      ]
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
          source: 'https://api.adorable.io/avatars/285' + '/@id()' + '.png'
        },
        'status|1': ['HOLD', 'DND', 'AFK', ''],
        'brief|1': [
          '',
          {
            type: 'icon-action',
            payload: '+'
          },
          {
            type: 'bage',
            class: 'error',
            payload: '@integer(1, 999)'
          }
        ]
      }
    ]

    const { data } = Mock.mock({
      'data|3-5': [
        {
          id: '@uuid',
          label: '@cword',
          'children|5-10': friensGroup
        }
      ]
    })
    commit(types('FRIENDS_GROUP'), data)
    return data
  }
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
  [types('SET')](state, user) {
    state.user = user
  },
  [types('COMMUNITY_GROUP')](state, group) {
    state.communityGroup = group
    state.activeCommunityGroup = group.map((g) => g.id)
  },
  [types('FRIENDS_GROUP')](state, group) {
    state.friendsGroup = group
    state.activeFriendsGroup = group.map((g) => g.id)
  }
}
