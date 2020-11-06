import axios from 'axios'; // 引入axios
import store from '@/store'
// import {MessageBox, Message} from 'element-ui'
import { Message} from 'element-ui'
import {getToken} from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000
})

// request 拦截器
service.interceptors.request.use(
  config =>{
    if(store.getters.token){
      config.header['X-Token']=getToken()
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)


// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if(res.code !== 200){
      Message({
        message: 'Error',
        type: 'error',
        duration: 5*1000
      })
 // 登录或者重新登录
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   MessageBox.confirm('你还没有登录', 'Confirm logout',{
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(()=>{
      //     store.dispatch('').then(() => {
      //       location.reload()
      //     })
      //   })
      // }
      // return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  // 拦截错误
  error => {
    console.log('err'+error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
