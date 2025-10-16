<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable vue/block-lang -->

<script setup>
  import { RouterView } from 'vue-router';
import LayoutFixed from './components/LayoutFixed.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';

</script>
<template>
    <!-- 二级路由出口 -->
     <LayoutFixed/>
     <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>