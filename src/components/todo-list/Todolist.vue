<script setup lang='ts'>
import { Events } from 'vue';
import { ITodoItem } from '../../types/todolist';
const props = defineProps<{ todolist: ITodoItem[] }>()
const emits = defineEmits<{ (e: 'changeDone', id: number, target: EventTarget | null): void }>()
</script>

<template>
  <ul>
    <li v-for="item in todolist" :key="item.id" class="todolist">
      <div class="task">
        <label>
          <input type="checkbox" :checked="item.done" @change="$emit('changeDone', item.id, $event.target)">
          <span style="margin-left:5px" :class="item.done ? 'deleteLine' : ''">{{ item.task }}</span>
        </label>
      </div>
      <div class="done" v-show="item.done">完成</div>
      <div class="undone" v-show="!item.done">未完成</div>
    </li>
  </ul>
</template>

<style lang='scss' scoped>
/*---------------------------grid布局*/

.todolist {
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-template-areas: "task isdone";
  column-gap: 5px;
  justify-content: space-between;
  min-width: 500px;
  border: 1px solid #ccc;
  padding: 5px;


  .task {
    grid-area: task;
    align-self: center;
    justify-self: start;

    .deleteLine {
      text-decoration: line-through;
      color: gray;
      font-style: italic;
    }
  }

  .done,
  .undone {
    grid-area: isdone;
    align-self: center;
    justify-self: end;
    padding: 5px;
    border-radius: 50px;
    background-color: green;
  }

  .undone {
    background-color: yellow;
  }
}

.todolist:not(:last-child) {
  border-bottom: none;
}



/*---------------------------flex布局*/
// .todolist {
//   display: flex;
//   // width: 1000px;
//   min-width: 500px;
//   margin: 0 auto;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 5px;

//   .task {
//     flex: 1;
//   }

//   .done,
//   .undone {
//     height: 30px;
//     width: 80px;
//     text-align: center;
//     box-sizing: border-box;
//     font-weight: 300;
//     border-radius: 15px;
//     padding: 5px;
//     margin-left: 5px;
//   }

//   .done {
//     background-color: green;
//   }

//   .undone {
//     background-color: yellow;
//   }
// }
</style>
