<script setup lang='ts'>
defineProps<{ activeIndex: number }>()
defineEmits<{ (e: 'update:activeIndex', index: number): void }>()
</script>

<template>
  <div class="btn-group">
    <button :class="activeIndex === 0 ? 'actived' : ''" v-on:click="$emit('update:activeIndex', 0)">全部</button>
    <button :class="activeIndex === 1 ? 'actived' : ''" v-on:click="$emit('update:activeIndex', 1)">已完成</button>
    <button :class="activeIndex === 2 ? 'actived' : ''" v-on:click="$emit('update:activeIndex', 2)">未完成</button>
  </div>
</template>

<style lang='scss' scoped>
.btn-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 30px;
  gap: 0px;

  .actived {
    color: aliceblue;
    background-color: blue;
  }
}
</style>
