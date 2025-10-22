//封装分类数据业务相关代码
  import { getCategoryAPI } from '@/api/category'
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
export function useCategory(){   
//获取数据
  const categoryData=ref({})
  //如何在组件内部获取路由参数等
  const route=useRoute()
  const getCategory=async(id=route.params.id)=>{
    const res=await getCategoryAPI(id)
    categoryData.value=res.result
  }
  onMounted(()=>getCategory())

  //目标：路由参数变化的时候 可以把分类数据接口重新发送（getCategory）
  onBeforeRouteUpdate((to)=>{
     console.log('路由变化了')
     //存在问题：使用最新的路由参数请求最新的分类数据
     console.log(to)
     getCategory(to.params.id)
  })
  return {
    categoryData
  }
}