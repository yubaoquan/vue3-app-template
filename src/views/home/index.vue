<template>
  <h1 class="title">
    首页 xx
  </h1>
  <div>{{ store.state.count }}</div>
  <button @click="handleAddClick">
    +
  </button>
</template>

<script lang="ts" setup>
import { useStore } from '@/store';

const store = useStore();

console.info(store.state.count);
const handleAddClick = () => store.commit('increment');
</script>

<style lang="less" scoped>
.title {
  color: @titleColor;
}
</style>
