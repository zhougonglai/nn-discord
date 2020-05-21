// export default function (app) {
//   console.log('ws', process.env.ws)
//   const ws = new WebSocket(process.env.ws)
//   ws.onopen = () => {
//     // Web Socket 已连接上，使用 send() 方法发送数据

//     console.log('onopen')
//   }
//   ws.onmessage = (evt) => {
//     const msg = evt.data
//     console.log('数据已接收...', msg)
//   }
//   ws.onerror = ws.onclose = () => {
//     // 关闭 websocket
//     console.log('连接已关闭...')
//   }
// }
