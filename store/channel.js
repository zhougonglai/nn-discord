import { replace } from 'lodash'

const r = (params, uri, schemas, i = 0) => {
  if (i < schemas.length) {
    const prop = schemas[i]
    return r(params, replace(uri, `{${prop}}`, params[prop]), schemas, i + 1)
  } else {
    return uri
  }
}

const state = () => ({})

const apis = {
  /** ----- 公告留言板 ----- **/
  /**
   * 获取层级内容
   */
  findNextNoticRemark: {
    method: '$get',
    url: 'channel/business/findNextNoticRemark/{serverId}/',
    schemas: ['serverId'],
  },
  /**
   * 查询第一层的留言
   */
  findNoticeRemarkOne: {
    method: '$get',
    url: '/channel/business/findNoticeRemarkOne/{serverId}/{userId}',
    schemas: ['serverId', 'userId'],
  },
  /**
   * 添加公告留言
   */
  findVerifyTypeByChannelId: {
    method: '$post',
    url: '/channel/business/findVerifyTypeByChannelId/{channelId}',
    schemas: ['channelId'],
  },
  /** ----- 社区 ----- **/
  /**
   * 添加个人社区
   */
  addPrivateServer: {
    method: '$post',
    url: 'channel/business/addPrivateServer',
  },
  /**
   * 加入社区
   */
  enterServer: {
    method: '$put',
    url: 'channel/business/enterServer',
  },
  /**
   * 退出社区
   */
  exitServer: {
    method: '$delete',
    url: 'channel/business/exitServer',
  },
  /**
   * 根据社区id查询社区基础信息(名称,类型)
   */
  findServerById: {
    method: '$get',
    url: 'channel/business/findServerById/{serverId}',
    schemas: ['serverId'],
  },
  /**
   * 根据社区名查询社区
   */
  findServerByName: {
    method: '$get',
    url: 'channel/business/findServerByName/{serverName}',
    schemas: ['serverName'],
  },
  /**
   * 根据社区ID查询频道
   */
  findServerChannel: {
    method: '$get',
    url: 'channel/business/findServerChannel/{serverId}',
    schemas: ['serverId'],
  },
  /**
   * 根据社区ID查询频道组
   */
  findServerGroup: {
    method: '$get',
    url: 'channel/business/findServerGroup/{serverId}',
    schemas: ['serverId'],
  },
  /**
   * 根据社区id查询社区详情
   */
  findServerInfoById: {
    method: '$get',
    url: 'channel/business/findServerInfoById/{serverId}',
    schemas: ['serverId'],
  },
  /**
   * 根据userId查询社区详情
   */
  findServerInfoByUserId: {
    method: '$get',
    url: 'channel/business/findServerInfoByUserId/{userId}',
    schemas: ['userId'],
  },
  /**
   * 查询社区成员
   */
  findServerMember: {
    method: '$get',
    url: 'channel/business/findServerMember/{serverId}',
    schemas: ['serverId'],
  },
  /**
   * 根据社区id查询社区公告
   */
  findServerNotice: {
    method: '$get',
    url: 'channel/business/findServerNotice/{serverId}',
    schemas: ['serverId'],
  },
  /**
   * 查询成员加入的社区
   */
  findUserServers: {
    method: '$get',
    url: 'channel/business/findUserServers/{userId}',
    schemas: ['userId'],
  },
  /**
   * 修改社区简介
   */
  modifyServerIntor: {
    method: '$put',
    url: 'channel/business/modifyServerIntor',
  },
  /**
   * 修改社区公告
   */
  modifyServerNotice: {
    method: '$put',
    url: 'channel/business/modifyServerNotice',
  },
  /** ----- 频道 ----- **/
  /**
   * 创建文字频道
   */
  addTextChannel: {
    method: '$post',
    url: 'channel/business/addTextChannel',
  },
  /**
   * 创建语音频道
   */
  addVoiceChannel: {
    method: '$post',
    url: 'channel/business/addVoiceChannel',
  },
  /**
   * 取消订阅频道
   */
  cancelSubChannel: {
    method: '$put',
    url: 'channel/business/cancelSubChannel',
  },
  /**
   * 根据频道id查询频道
   */
  findChannelById: {
    method: '$get',
    url: 'channel/business/findChannelById/{channelId}',
    schemas: ['channelId'],
  },
  /**
   * 根据频道id查询频道详情
   */
  findChannelInfoMapById: {
    method: '$get',
    url: 'channel/business/findChannelInfoMapById/{channelId}/{channelTypeId}',
    schemas: ['channelId', 'channelTypeId'],
  },
  /**
   * 根据频道id查询订阅用户
   */
  findLinkChannelUsers: {
    method: '$get',
    url: 'channel/business/findLinkChannelUsers/{channelId}',
    schemas: ['channelId'],
  },
  /**
   * 更换频道组频道关系
   */
  modifyChannelGroupRealation: {
    method: '$put',
    url: 'channel/business/modifyChannelGroupRealation',
  },
  /**
   * 修改语音频道模式
   */
  modifyChannelVoiceSchema: {
    method: '$put',
    url: 'channel/business/modifyChannelVoiceSchema',
  },
  /**
   * 删除频道
   */
  removeChannel: {
    method: '$delete',
    url: 'channel/business/removeChannel',
  },
  /**
   * 订阅频道
   */
  subChannel: {
    method: '$put',
    url: 'channel/business/subChannel',
  },
  /** ----- 频道组 ----- **/
  addGroup: {
    method: '$post',
    url: 'channel/business/addGroup',
  },
  modifyGroup: {
    method: '$put',
    url: 'channel/business/modifyGroup',
  },
  removeGroup: {
    method: '$delete',
    url: 'channel/business/removeGroup',
  },
}

const actions = {}

/**
 * 配置 API
 */
for (const api in apis) {
  actions[api] = async function (_, params) {
    const prop = apis[api]
    if (prop.schemas) {
      return await this.$axios[prop.method](
        r(params, prop.url, prop.schemas),
        params
      )
    } else {
      return await this.$axios[prop.method](prop.url, params)
    }
  }
}

export { state, actions }
