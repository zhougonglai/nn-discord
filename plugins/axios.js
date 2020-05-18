export default function ({ app: { $axios, redirect } }) {
  $axios.defaults.baseURL = process.env.BASE_URL
  $axios.defaults.timeout = 30000
  $axios.interceptors.request.use((config) => {
    return config
  })
  $axios.interceptors.response.use((response) => {
    if (/^[4|5]/.test(response.status)) {
      return Promise.reject(response.statusText)
    }
    return response.data
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
