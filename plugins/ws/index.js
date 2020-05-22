// //ws
// let ws
// /**
// ws状态
// INIT  初始化
// CONNECTING 连接中
// CONNECTED 连接成功
// KICKOFF 开始
// OFFLINE 离线
// ERROR 错误
// CLOSE 关闭
// */

const codec = require('./imCodecJson')
const {
  PktType,
  // , MsgType
} = require('./codecCommon.js')

export default function ({ app: { store, $axios } }, inject) {
  let client = null
  let state = 'INIT'
  let heartbeatHandle
  const argv = {
    u: '', // from usrid
    d: '', // devid
  }
  function setState(e) {
    state = e
    store.commit('chat/SET_state', state) // 同步状态
  }
  function startConnect() {
    argv.u = store.getters.USER_ID
    argv.d = new Date() - 0 // FIXME 硬件id 使用了时间戳
    if (state === 'CONNECTING') {
      console.log('already connecting ,ignore')
      return
    }
    setState('CONNECTING')
    try {
      client = new WebSocket(process.env.ws)
      client.onopen = function (event) {
        const bind = codec.encodeBind(argv.u, 0, argv.d, 'token1')
        client.send(bind)
      }
      client.onerror = (error) => {
        console.error(`socket error ${error}`)
        setState('ERROR')
        stopClient()
        setTimeout(startConnect, 10000)
      }
      client.onclose = (number, reason) => {
        console.log(`socket close ${number}`)
        setState('CLOSE')
        stopClient()
        setTimeout(startConnect, 10000)
      }
      client.onmessage = ({ data }) => {
        // console.log(`Message from server `, data)
        handleMsg(data)
      }
    } catch (err) {
      console.error(`create ws client error ${err}`)
    }
  }
  function onMsg(pkt) {
    console.log(`onMsg `, pkt)
    const ack = codec.encodeAck(pkt, PktType.msgAck)
    client.send(ack)
  }
  function handleMsg(data) {
    /**
  p2pMsg: 9,
  groupMsg: 10,
  chatRoomMsg: 11,
  msgAck: 12,
  enterChatRoom: 13,//聊天室用户操作
  enterChatRoomAck: 14,//聊天室用户操作ACK
  exitChatRoom: 15,//聊天室设置
  exitChatRoomAck: 16,/聊天室设置ACK
  17 //聊天室用户列表
  18 //聊天室用户列表ACK
    */
    const pkt = JSON.parse(data)
    switch (pkt.head.msgType) {
      case PktType.bindAck:
        setState('CONNECTED')
        startClient()
        break
      case PktType.p2pMsg: // 私聊
      case PktType.groupMsg: // 群聊
      case PktType.chatRoomMsg: // 聊天室
        console.log('收到聊天消息', pkt.head.msgType, pkt)
        onMsg(pkt)
        break
      case PktType.kickoff:
        setState('KICKOFF')
        break
      case PktType.offline:
        setState('OFFLINE')
        break
      case PktType.msgAck: // ACK消息类型
        console.log('ACK消息', pkt)
        break
      case PktType.heartbeatAck:
        break
      default:
        console.warn(`recv unkonw type msg `, pkt.head.msgType)
        break
    }
  }

  function stopClient() {
    clearInterval(heartbeatHandle)
    // clearInterval(msgHandle)
  }
  function startClient() {
    heartbeatHandle = setInterval(() => {
      try {
        const heartbeatMsg = codec.encodeHeartBeat(argv.u)
        console.log('send heartbeat msg')
        // writing data to server
        client.send(heartbeatMsg)
      } catch (execp) {
        console.error('send heartbeat catch exception ' + execp)
        clearInterval(heartbeatHandle)
      }
    }, 10000)
  }
  function sendMsg(uid, data) {
    try {
      const msg = codec.encodeP2pMsg(
        argv.u,
        argv.d,
        uid,
        `msg from ${argv.u} to ${uid}  ${data}`
      )
      console.log('send  msg to  ' + uid + ':' + data)
      client.send(msg)
    } catch (execp) {
      console.error('send msg catch exception ' + execp)
    }
  }
  const obj = {
    ws: client,
    // 设置状态
    setState,
    start: startConnect,
    stop: stopClient,
    sendMsg,
  }
  inject('ws', obj)
  setTimeout(() => {
    // TODO 开始测试
    // obj.start()
  }, 0)
}
