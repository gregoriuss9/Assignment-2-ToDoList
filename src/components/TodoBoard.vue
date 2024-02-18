<script >
import TodoListItem from './TodoListItem.vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


export default {
    data() {
        return {
            date: '',
        }
    }
    ,
    props: {
        todoList: Array,
    },
    emits: ['add-todo', 'clear-all'],
    methods: {
        addTodo() {
            const input = document.getElementById('add-todo');
            this.$emit('add-todo', input.value, this.date);
            input.value = '';
            console.log(this.date);
            this.date = ' ';

        },
        onChangeStatusTodo(index) {
            this.todoList[index].completed = !this.todoList[index].completed
            console.log(this.todoList);
        },
        removeTodo(index) {
            this.todoList.splice(index, 1)
            console.log(this.todoList);
        },
        clearAll() {
            this.$emit('clear-all');
        }
    },
    components: { TodoListItem, Datepicker }
}
</script>

<template>
    <section class="vh-100">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="card p-3" id="list1" style="border-radius:.75rem;background-color: #eff1f2;">
                    <div class="card-body py-4 px-4 px-md-5">
                        <!-- APP TITLE -->
                        <div class="d-flex flex-row align-items-center justify-content-center ">
                            <input type="checkbox" class="form-check-input me-0" value="" style="scale: 1.7 " />
                            <p class="h1 text-center mt-3 mb-4 ms-3 text-primary">
                                <u>My Todo-s</u>
                            </p>
                        </div>

                        <!-- FORM TODO -->
                        <div class="card-pb-2">
                            <div class="card-body">
                                <form @submit.prevent="addTodo">
                                    <div class="row bg-white p-2">
                                        <div class="col">
                                            <input required type="text"
                                                class="form-control form-control-lg border border-white" id="add-todo"
                                                placeholder="Add new ...">
                                        </div>
                                        <div class="col-auto h-100">
                                            <Datepicker required v-model="date" :date="date" placeholder="Select date"
                                                class="border border-white" style="height: 100%; border: 1px solid white;">
                                            </Datepicker>
                                        </div>
                                        <div class="col-auto">
                                            <button type="submit" class="btn btn-primary" style="height: 100%;">Add</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <hr class="my-4">


                        <!-- LIST TODO -->
                        <div id="list-todo">
                            <TodoListItem v-for="(todo, index) in todoList" :key="index" :todo="todo" :index="index"
                                @delete-todo="removeTodo(index)" @change-status-todo="onChangeStatusTodo(index)"
                                :date="date" />
                        </div>
                    </div>

                    <button class="btn btn-primary" v-if="todoList.length > 0" @click="clearAll">Clear All</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>