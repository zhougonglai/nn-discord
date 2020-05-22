function getbaseURL(cmd) {
  const cf = {
    '/userapi/': [],
    '/friendapi/': ['friend', 'friends', 'channel', 'apply'],
  }
  const Controller = cmd.split('/')[0]
  let baseURL = '/userapi/'
  Object.keys(cf).forEach((key) => {
    if (cf[key].includes(Controller)) {
      baseURL = key
    }
  })
  return baseURL
}
export default function ({ app: { store, $axios, redirect, $message } }) {
  $axios.defaults.baseURL = process.env.BASE_URL
  $axios.defaults.timeout = 30000
  $axios.interceptors.request.use((config) => {
    config.baseURL = getbaseURL(config.url)
    config.headers['Content-Type'] = 'application/json'
    config.headers.Accept = 'application/json'
    return config
  })
  $axios.interceptors.response.use(
    (response) => {
      // {retCode: "100", retMsg: "操作成功", retData: false}
      const db = response.data
      const data =
        db.retCode === undefined
          ? {
              msg: '接口响应错误',
              data: db,
              code: '-1',
            }
          : {
              msg: db.retMsg,
              data: db.retData,
              code: db.retCode,
            }
      switch (data.code) {
        case '100':
          // 成功
          return Promise.resolve(data)
        default:
          // response.retMsg
          // response.retData
          // redirect('/sign')//需要登陆
          $message.warning(data.msg)
          return Promise.reject(new Error(data.msg))
      }
    },
    (err) => {
      // 发生网络错误后会走到这里
      switch (err.response.status) {
        case 404:
        case 500:
          $message.error(`服务器开小差了:【${err.response.status}】`)
          break
        default:
          $message.error(err.message)
          break
      }
      return Promise.reject(err)
    }
  )
  // $axios.onError((error, b, c) => {
  //   console.dir('error', error, b, c)
  //   message.error(error.message)
  //   // const code = parseInt(error.response && error.response.status)
  //   // if (code === 400) {
  //   //   redirect('/400')
  //   // }
  // })
}
