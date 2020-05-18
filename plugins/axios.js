export default function ({ app: { store, $axios, redirect } }) {
  $axios.defaults.baseURL = process.env.BASE_URL
  $axios.defaults.timeout = 30000
  $axios.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json'
    config.headers.Accept = 'application/json'
    return config
  })
  $axios.interceptors.response.use((response) => {
    // {retCode: "100", retMsg: "操作成功", retData: false}
    const db = response.data
    if (db.retCode === undefined) {
      return Promise.reject(new Error('接口响应错误'))
    }
    const data = {
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
        return Promise.reject(new Error(data.msg))
    }
  })
  // $axios.onError((error) => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
