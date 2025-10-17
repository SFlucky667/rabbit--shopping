<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/block-lang -->
<script setup>
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeNew.vue'
import homeProduct from './components/HomeProduct.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 测试面板组件 -->
   <!-- <HomePanal title="新鲜好物" subTitle="新鲜出炉的商品">
     <div>我是新鲜好物的插槽内容</div>
</HomePanal>
<HomePanal title="人气推荐" subTitle="人气商品">
    <div>我是人气推荐的插槽内容</div>
  </HomePanal> -->
</template>
