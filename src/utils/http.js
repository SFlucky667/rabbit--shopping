//axios基础的封装
import axios from 'axios'
import {ElMessage} from 'element-plus'
import { useUserStore } from '@/stores/user'
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
})

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config => {
  //1.从pinia中获取token
  const userStore=useUserStore()
  //2.如果有token 就添加到请求头中
  const token=userStore.userInfo.token
  if(token){
    config.headers.Authorization=`Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(
  res => res.data,
   e => {
    //这里通过拦截器的方式，来发送提示信息
    //这个response是拦截到响应码不是200了就会执行这个
    ElMessage({
      type:"warning",
      message:e.response.data.message,
    });
  return Promise.reject(e);
});


export default httpInstance