// typedef enum _CMsgType
// {
//     E_CMD_PACKET_UNKNOWN = 0,
//     E_CMD_PACKET_HEARBEAT = 1,
//     E_CMD_PACKET_HEARBEATACK = 2,
//     E_CMD_PACKET_BIND = 3,
//     E_CMD_PACKET_BINDACK =4,
//     E_CMD_PACKET_OFFLINE = 5,
//     E_CMD_PACKET_OFFLINEACK = 6,
//     E_CMD_PACKET_KICKOFF = 7,
//     E_CMD_PACKET_KICKOFFACK = 8,
//     E_CMD_P2PMSG = 9，    //私聊消息类型
//     E_CMD_GROUPMSG = 10，//群聊消息类型
//     E_CMD_CHATROOMMSG =11，//聊天室消息类型
// E_CMD_MSGACK = 12,   //ACK消息类型
// E_CMD_ENTERCHATROOM=13,//进入聊天室
// E_CMD_ENTERCHATROOMACK=14,//进入聊天室ACK
// E_CMD_EXITCHATROOM=15,//退出聊天室
// E_CMD_EXITCHATROOMACK=16,//退出聊天室ACK

// } CMsgType;
const PktType = {
  unknown: 0,
  heartbeat: 1,
  heartbeatAck: 2,
  bind: 3,
  bindAck: 4,
  offline: 5,
  offlineAck: 6,
  kickoff: 7,
  kickoffAck: 8,
  p2pMsg: 9,
  groupMsg: 10,
  chatRoomMsg: 11,
  msgAck: 12,
  enterChatRoom: 13,
  enterChatRoomAck: 14,
  exitChatRoom: 15,
  exitChatRoomAck: 16,
}
// enum CMsgType {
//     E_CMD_P2PMSG = 1;
//     E_CMD_GROUPMSG = 2;
//     E_CMD_CHATGROUPMSG =3;
//     E_CMD_MSGACK = 4;
// }
// typedef enum _CChatRoomUserActionType
// {
// CHART_ROOM_USER_ACTION_ENTER=1,
// CHART_ROOM_USER_ACTION_EXIT=2,
// CHART_ROOM_USER_ACTION_NOTALK=3,//禁言
// CHART_ROOM_USER_ACTION_BLACK=4,//拉黑
// CHART_ROOM_USER_ACTION_KICKOFF=5,//踢出
// }CChatRoomUserActionType;
const CChatRoomUserActionType = {
  enter: 1, // 进入
  exit: 1, // 退出
  notalk: 3, // 禁言
  black: 4, // 拉黑
  kickoff: 5, // 踢出
}

const MsgType = {
  p2pMsg: 1,
  groupMsg: 2,
  chatGroupMsg: 3,
  MsgAck: 4,
}
module.exports = {
  // 返回消息类型
  PktType,
  // 请求头消息类型
  MsgType,
  /**
  聊天室消息类型
  */
  CChatRoomUserActionType,
}
