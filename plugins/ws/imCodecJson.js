const {
  PktType,
  // MsgType
} = require('./codecCommon.js')
let SerialNo = 1
const Flag = 0
let MsgSeq = 1

// typedef struct _CBind
// {
// unsigned int userId;
// unsigned int deviceType;
// char token[TOCKEN_MAXLEN];
// char deviceId[DEVICEID_MAXLEN];
// } CBind;
function encodeBind(fromUid, deviceType, deviceId, token) {
  const head = {}
  // head.size = 0;
  head.serialNo = SerialNo++
  head.flag = Flag
  head.msgType = PktType.bind
  const body = {}
  body.ecodeType = 0
  body.msgType = PktType.bind
  body.fromUid = fromUid
  body.toUid = fromUid
  body.timestamp = new Date().getTime()
  body.deviceId = deviceId
  // body.len = 0;
  const msg = {
    userId: fromUid,
    deviceType,
    deviceId,
    token,
  }
  body.data = msg
  return JSON.stringify({
    head,
    body,
  })
}

// logger.info(encodeBind("from1",0,"deviceId","token111"));

// typedef struct _CHearBeat
// {
//     unsigned int userId;
// } CHearBeat;
function encodeHeartBeat(usrid, devId) {
  return encodeUsrIdMsg(usrid, devId, PktType.heartbeat)
}

function encodeOffline(usrid, devId) {
  return encodeUsrIdMsg(usrid, devId, PktType.offline)
}

function encodeKickoff(usrid, devId) {
  return encodeUsrIdMsg(usrid, devId, PktType.kickoff)
}

/**
 message CP2PMsg {
  uint32  direction = 1;          // 消息方向  0发送， 1接收
  uint32  status = 2;             // 状态   0发送中 1未读 2已读 3拒收消息
  MsgContentType  msgContType = 3;        // 消息内容类型  文字/图片/语音等
  uint64  tId = 4;                // 客户端时间戳
  uint32  sequence = 5;                  // 客户端序列
  uint32  prevMsgId = 6;               // 上一条消息id
  uint32  nextMsgId = 7;            // 下一条消息id
  uint64  createTime = 8;         // 客户端发送时间
  string  msgId = 9;         // 消息id     发送的时候为空
  string  content = 10;           // 消息内容
  uint32  clientFileId = 11;     // 上传文件的标识，文件分包用
  uint32  sliceId = 12;             // 包序列
  uint32  sliceEnd = 13;         // 包结束标识
 }
*/
// 私聊消息
function encodeP2pMsg(fromUsrId, fromDevId, toUserId, msg, messageType = 0) {
  const head = {}
  // head.size = 0;
  head.serialNo = SerialNo++
  head.flag = Flag
  head.msgType = PktType.p2pMsg
  const body = {}
  body.ecodeType = 0
  body.msgType = PktType.p2pMsg
  body.fromUid = fromUsrId
  body.toUid = toUserId
  body.timestamp = new Date().getTime()
  body.deviceId = fromDevId
  const msgContent = {
    direction: 0,
    status: 0,
    msgContType: messageType,
    tId: `${MsgSeq}`,
    sequence: MsgSeq,
    prevMsgId: MsgSeq - 1 > 0 ? MsgSeq - 1 : 0,
    nextMsgId: MsgSeq,
    createTime: new Date().getTime(),
    messageId: 0,
    content: msg,
    clientFileId: 0,
    sliceId: 0,
    sliceEnd: 0,
  }
  ++MsgSeq
  body.data = msgContent
  return JSON.stringify({
    head,
    body,
  })
}
//
function encodeUsrIdMsg(fromUid, deviceId, msgType) {
  const head = {}
  // head.size = 0;
  head.serialNo = SerialNo++
  head.flag = Flag
  head.msgType = msgType
  const body = {}
  body.ecodeType = 0
  body.msgType = msgType
  body.fromUid = fromUid
  body.toUid = fromUid
  body.timestamp = new Date().getTime()
  body.deviceId = deviceId
  // body.len = 0;
  const msg = {
    userId: fromUid,
  }
  body.data = msg
  return JSON.stringify({
    head,
    body,
  })
}
function encodeAck(pkt, ackType_) {
  let ackType = pkt.head.msgType + 1
  if (ackType_) {
    ackType = ackType_
  }
  const ack = JSON.parse(JSON.stringify(pkt))
  ack.head.msgType = ackType
  ack.body = {
    ackType,
    timestamp: new Date().getTime(),
  }
  // ack.body.msgType = ackType
  // ack.body.timestamp = new Date().getTime()
  return JSON.stringify(ack)
}

// typedef struct _CBindAck
// {
// unsigned int userId;
// long long timestamp;
// char deviceId[DEVICEID_MAXLEN];
// } CBindAck;
function encodeBindAck(pkt) {
  delete pkt.token
  return encodeAck(pkt)
}

function addTransportHead(msg) {
  const head = {
    serialNo: SerialNo++,
    flag: Flag,
    msgType: msg.msgType,
  }

  return JSON.stringify({
    head,
    body: msg,
  })
}

module.exports = {
  encodeBind,
  encodeBindAck,
  encodeHeartBeat,
  encodeOffline,
  encodeKickoff,
  encodeP2pMsg,
  encodeAck,
  addTransportHead,
}
// export {encodeBind,encodeBindAck,encodeHeartBeat,encodeHeartbeatAck}
