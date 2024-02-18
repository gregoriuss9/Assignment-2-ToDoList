<script setup>
import TodoBoard from './components/TodoBoard.vue'
import { reactive } from 'vue';

const todos = reactive({
  todoList: [
  ]
})

const addTodo = (newTodo, date) => {
  todos.todoList.push({
    id: todos.todoList.length + 1,
    task: newTodo,
    completed: false,
    date: date
  });

  console.log(todos);
}

const clearAll = () => {
  todos.todoList = [];

  console.log(todos);
}

</script>

<template>
  <TodoBoard :todoList="todos.todoList" @add-todo="addTodo" @clear-all="clearAll" />
</template>

<style></style>
