<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable vue/block-lang -->

<script setup>
  import { RouterView } from 'vue-router';
import LayoutFixed from './components/LayoutFixed.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';

//触发获取导航列表的action
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';
const categoryStore=useCategoryStore()
onMounted(()=>categoryStore.getCategory())
</script>
<template>
    <!-- 二级路由出口 -->
     <LayoutFixed/>
     <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>