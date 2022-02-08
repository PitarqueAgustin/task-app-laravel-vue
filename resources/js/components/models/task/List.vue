<template>
    <div class="container-fluid mt-4">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Date Created</th>
                <th scope="col">Date Last Update</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="tasks.length == 0">
                <td colspan="5" class="text-center">
                    The tasks list is empty
                </td>
            </tr>
            <tr v-for="task in tasks" :key="task.id">
                <td>{{ task.title }}</td>
                <td> {{ task.description }} </td>
                <td> {{ task.created_at }} </td>
                <td> {{ task.updated_at }} </td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <router-link
                            :to='{name:"task-update", params:{id: task.id}}'
                            class="btn btn-outline-success"
                        >
                            Edit
                        </router-link>
                        <button
                            type="button"
                            class="btn btn-outline-danger"
                            @click="deleteTask(task.id)"
                        >
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "task-list",
        data() {
            return {
                tasks: []
            }
        },
        mounted() {
            this.showTasks()
        },
        methods: {
            showTasks() {
                this.axios.get('/api/task')
                    .then(response => {
                        console.log("response", response.data)
                        this.tasks = response.data
                    })
                    .catch(error => {
                        this.tasks = []
                        console.error(error)
                    })
            },
            deleteTask(id) {
                if (confirm("Are you sure to delete this task?")) {
                    this.axios.delete(`/api/task/${id}`)
                        .then(response => {
                            console.log(response.data)
                            this.showTasks()
                        })
                        .catch(error => {
                            console.error(error)
                        })
                }
            }
        }
    }
</script>
