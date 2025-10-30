//管理用户数据相关
import { mergeCartAPI } from '@/api/cart'
import { loginAPI } from '@/api/user'
import { useCartStore } from '@/stores/cartStore'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore=defineStore('user',()=>{
 const cartStore=useCartStore()
  //1.定义管理用户数据的state
  const userInfo=ref({})
  //2.定义获取接口数据的action函数
  const getUserInfo=async ({account,password})=>{
    const res=await loginAPI({account,password})
    userInfo.value=res.result
    //合并购物车的操作
  await  mergeCartAPI(cartStore.cartList.map(item=>{
          return {
            skuId:item.skuId,
            selected:item.selected,
            count:item.count
          }
        }))
        cartStore.updateNewList()
}
//退出时清除用户信息
const clearUserInfo=()=>{
  userInfo.value={}
  //执行清除购物车的action
  cartStore.clearCart()
}
  //3.以对象的格式把state和action return
  return{
    userInfo,
    getUserInfo,
     //添加退出登录时清除用户信息的action函数
    clearUserInfo
  }
   
},{
    //开启数据持久化
    persist:true,
})