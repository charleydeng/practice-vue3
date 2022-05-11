
<script setup lang="ts">
/*
todolist
练习到的知识点：
1. props
2. emits
3. computed
4. 在组件上使用v-model
5. 动态绑定样式
*/
import { computed, InputHTMLAttributes, reactive, ref } from 'vue';
import Todolist from './components/todo-list/Todolist.vue';
import { ITodoItem } from './types/todolist';
import TodoInput from './components/todoInput/TodoInput.vue';
import TodoButton from './components/todoButton/TodoButton.vue';
const activeIndex = ref(0)
const todolist = reactive<ITodoItem[]>([
  { id: 1, task: 'Learn Vue', done: false },
  { id: 2, task: 'Learn React', done: false },
  { id: 3, task: 'Learn nothing', done: true },
])
const computedTodolist = computed(() => {
  switch (activeIndex.value) {
    case 0:
      return todolist
    case 1:
      return todolist.filter(item => item.done)
    case 2:
      return todolist.filter(item => !item.done)
    default:
      return todolist
  }
})
const changeDone = function (id: number, target: EventTarget | null): void {
  for (const item of todolist) {
    if (item.id === id) {
      item.done = (target as InputHTMLAttributes).checked as boolean; //这里应该不是用断言去处理的，可能是从传过来的值入手去处理！！！！
      break;
    }
  }
}
const onAddTask = (task: string): void => {
  todolist.push({ id: todolist.length + 1, task, done: false });
}
</script>

<template>
  <div class="container">
    <TodoInput v-on:add="onAddTask"></TodoInput>
    <TodoButton v-model:activeIndex="activeIndex"></TodoButton>
    <Todolist v-bind:todolist="computedTodolist" @changeDone="changeDone"></Todolist>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
</style>
