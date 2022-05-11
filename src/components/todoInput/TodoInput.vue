<script setup lang='ts'>
import { ref } from 'vue';

const task = ref('');
const onFormSubmit = function (): void {
  if (!task.value) {
    return;
  }
  submitEmits('add', task.value);
  task.value = '';
}
const submitEmits = defineEmits<{ (e: 'add', task: string): void }>()
</script>

<template>
  <form @submit.prevent="onFormSubmit">
    <label class="task">
      <span>输入任务</span>
      <input v-model.trim="task" type="text" placeholder="请输入任务">
    </label>
    <button type="submit" class="submit">添加新任务</button>
  </form>
</template>

<style lang='scss' scoped>
form {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 50px;
  gap: 10px;
  min-width: 500px;

  .task {
    justify-self: stretch;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0;

    span {
      text-align: center;
      line-height: 30px;
      background-color: grey;
      padding: 10px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }

    input {
      border: 1px solid #ccc;
      border-left: none;
      padding: 5px;
      font-size: 30px;
    }

    input:focus {
      outline: 1px solid blue;
    }
  }

  .submit {
    background-color: blue;
    border-radius: 15px;
    color: aliceblue;
  }
}
</style>
