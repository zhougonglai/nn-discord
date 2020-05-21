const state = () => ({})

const apis = {
  /** ----- 频道 ----- **/
  /**
   * 创建文字频道
   */
  addTextChannel: {
    method: '$post',
    url: '/channel/business/addTextChannel',
  },
  /**
   * 创建语音频道
   */
  addVoiceChannel: {
    method: '$post',
    url: '/channel/business/addVoiceChannel',
  },
  /**
   * 取消订阅频道
   */
  cancelSubChannel: {
    method: '$put',
    url: '/channel/business/cancelSubChannel',
  },
  /**
   * 更换频道组频道关系
   */
  modifyChannelGroupRealation: {
    method: '$put',
    url: '/channel/business/modifyChannelGroupRealation',
  },
  /**
   * 修改语音频道模式
   */
  modifyChannelVoiceSchema: {
    method: '$put',
    url: '/channel/business/modifyChannelVoiceSchema',
  },
  /**
   * 删除频道
   */
  removeChannel: {
    method: '$delete',
    url: '/channel/business/removeChannel',
  },
  /**
   * 订阅频道
   */
  subChannel: {
    method: '$put',
    url: '/channel/business/subChannel',
  },
  /** ----- 频道组 ----- **/
  addGroup: {
    method: '$post',
    url: '/channel/business/addGroup',
  },
  modifyGroup: {
    method: '$put',
    url: '/channel/business/modifyGroup',
  },
  removeGroup: {
    method: '$delete',
    url: '/channel/business/removeGroup',
  },
}

const actions = {
  /**
   * @param {*} params
   * @description 根据频道id查询频道
   */
  async findChannelById(_, params) {
    return await this.$axios.$get(
      `/channel/business/findChannelById/${params.channelId}`,
      params
    )
  },
  /**
   * @param {*} params
   * @description 根据频道id查询频道详情
   */
  async findChannelInfoMapById(_, params) {
    return await this.$axios.$get(
      `/channel/business/findChannelInfoMapById/${params.channelId}/${params.channelTypeId}`,
      params
    )
  },
  /**
   * @param {*} params
   * @description 根据频道id查询订阅用户
   */
  async findLinkChannelUsers(_, params) {
    return await this.$axios.$get(
      `/channel/business/findLinkChannelUsers/${params.channelId}`,
      params
    )
  },
}

for (const api in apis) {
  actions[api] = async function (_, form) {
    return await this.$axios[apis[api].method](apis[api].url, form)
  }
}

export { state, actions }
