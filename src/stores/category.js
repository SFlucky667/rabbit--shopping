import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/api/layout'
export const useCategoryStore = defineStore('category', () => {
 //导航列表的数据管理
 const categoryList=ref([])
const getCategory=async() =>{
  const res=await getCategoryAPI()
  console.log(res)
  categoryList.value=res.result
}
return {
    categoryList,
    getCategory
}
})
