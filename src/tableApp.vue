<script setup lang='ts'>
import { reactive } from 'vue';
import MyTable from './components/myTable/MyTable.vue';
import { IMyTableItem } from './types/myTable';
let goodslist = reactive<IMyTableItem[]>([
  { id: 579, goodsName: 'apple', goodsPrice: 100, inputVisible: false, tags: ['苹果', '新鲜'] },
  { id: 1, goodsName: 'apple', goodsPrice: 100, inputVisible: false, tags: ['苹果', '新鲜'] },
  { id: 2, goodsName: 'apple', goodsPrice: 100, inputVisible: false, tags: ['苹果', '新鲜'] },
  { id: 3, goodsName: 'apple', goodsPrice: 100, inputVisible: false, tags: ['苹果', '新鲜'] },
  { id: 4, goodsName: 'apple', goodsPrice: 100, inputVisible: false, tags: ['苹果asdfasa史蒂夫', '新鲜'] },
  { id: 5, goodsName: 'apple', goodsPrice: 100, inputVisible: false, tags: ['苹果', '新鲜'] },
  { id: 6, goodsName: 'applesad法师恢复', goodsPrice: 100, inputVisible: false, tags: ['苹果', '新鲜'] },
])
const onRemove = (id: number) => {
  console.log(goodslist)
  goodslist = goodslist.filter(item => item.id !== id)
  console.log(goodslist)
}
const vFocus = {
  mounted(el: HTMLInputElement) {
    el.focus()
  }
}
</script>

<template>
  <MyTable v-bind:data="goodslist">
    <template v-slot:header>
      <th>#</th>
      <th>Price</th>
      <th>Price</th>
      <th>Price</th>
      <th>操作</th>
    </template>
    <template v-slot:body="{ row, index }">
      <!--作用域插槽传给父组件的值竟然没有类型声明???????？-->
      <td>{{ index + 1 }}</td>
      <td>{{ row.goodsName }}</td>
      <td>${{ row.goodsPrice }}</td>
      <td class="lable">
        <input v-focus v-on:blur="row.inputVisible = false" v-on:keyup.enter="row.inputVisible = false" type="text"
          v-if="row.inputVisible">
        <button v-else @click="row.inputVisible = true">+Tag</button>
        <span v-for="item in row.tags" :key="item">{{ item }}</span>
      </td>
      <td>
        <button type="button" v-on:click="onRemove(row.id)">删除</button>
      </td>
    </template>
  </MyTable>
</template>

<style lang='scss' scoped>
td,
th {
  height: 50px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 50px;
}

.lable {

  input,
  button,
  span {
    margin: 5px
  }

  input {
    width: 160px;
  }

  button {
    height: 30px;
    border: none;
    background-color: royalblue;
    border-radius: 10px;
  }

  span {
    background-color: yellow;
    padding: 5px;
  }
}

th:nth-child(1),
td:nth-child(1) {
  width: 50px;
}

// th:nth-child(4),
// td:nth-child(4) {
//   width: 180px;
// }

th:last-child,
td:last-child {
  width: 100px;
}
</style>
