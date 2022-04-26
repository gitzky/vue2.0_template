import axios from 'axios'
// 创建axios实例

const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 5000, // 请求超时时间
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  transformRequest: [
    function (data) {
      let req = JSON.stringify(data)
      return req
    },
  ],
})

// 请求
request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default request
