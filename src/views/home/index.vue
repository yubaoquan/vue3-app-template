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
import { onMounted } from 'vue';
import { useStore } from '@/store';
import { foo } from '@/api/user';

const store = useStore();

console.info(store.state.count);
const handleAddClick = () => store.commit('increment');

onMounted(async () => {
  const resp = await foo();
  console.info(resp.data);
});
</script>

<style lang="less" scoped>
.title {
  color: @titleColor;
}
</style>
