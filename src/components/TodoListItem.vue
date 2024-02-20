<script >
export default {
    data() {
        return {
            dateNow: new Date()
        }
    },
    props: {
        todo: Object,
        index: Number,
        date: Date
    },
    emits: ['delete-todo', 'change-status-todo'],
    methods: {
        deleteTodo() {
            this.$emit('delete-todo', this.todo.id);
        },
        changeStatusTodo() {
            this.$emit('change-status-todo', this.todo.id);
        },
        modifiedDate(date) {
            const day_name = date.toLocaleDateString('en-US', { weekday: 'short' });
            const day = date.getDate();
            const month_list = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const month = month_list[date.getMonth()];
            const year = date.getFullYear();

            return `${day_name}, ${day} ${month} ${year}`
        }
    }

}
</script>

<template>
    <form>
        <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2 p-2">
            <li class="list-group-item d-flex align-items-center ps-0 pe-0 py-1 rouded-0 border-0 bg-transparent ">
                <div class="form-check">
                    <input @click="changeStatusTodo" type="checkbox" class="form-check-input me-0" v-model="todo.completed"
                        style="height: 20px; width: 20px;" />
                </div>
            </li>

            <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent ">
                <strike class="lead fw-normal mb-0" v-if="todo.completed">
                    {{ todo.task }}
                </strike>
                <p class="lead fw-normal mb-0" v-else>
                    {{ todo.task }}
                </p>
            </li>

            <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent ">
                <span class="border rounded-3 text-light bg-success p-3 ms-auto d-flex justify-content-between"
                    style="width: 40%;">
                    <font-awesome-icon icon="fa-regular fa-clock" size="1x" />
                    <p class="fw-bold  mb-0">
                        {{ modifiedDate(todo.date) }}
                    </p>
                </span>
                <span class="border rounded-3 border-info p-3 ms-auto d-flex justify-content-between"
                    style="width: 40%;"><font-awesome-icon icon="fa-regular fa-clock" size="1x" />
                    {{ modifiedDate(dateNow) }}
                </span>
            </li>

            <li class="list-group-item px-3 d-flex align-items-center border-0 bg-transparent ">
                <button @click="deleteTodo" type="button" class="p-2 btn btn-danger h-100 w">Delete</button>
            </li>
        </ul>
    </form>
</template>