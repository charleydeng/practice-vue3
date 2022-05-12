<script setup lang='ts'>
import { IMyTableItem } from '../../types/myTable';

defineProps<{ data: IMyTableItem[] }>()

</script>

<template>
  <table>
    <thead>
      <tr>
        <slot name="header"></slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="item.id">
        <slot name="body" :row="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>

<style lang='scss' scoped>
table {
  border-collapse: collapse;

  thead {
    background-color: green;
    font-size: 28px;
    color: black;
  }

  tbody {
    tr:nth-child(even) {
      background-color: #f5f5f5;
    }
  }
}
</style>
