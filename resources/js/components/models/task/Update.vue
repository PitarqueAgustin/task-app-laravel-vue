<template>
    <div class="container mt-4">
        <form @submit.prevent="update">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Update task</h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="title" class="form-label">Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            class="form-control"
                            v-model="task.title"
                        >
                    </div>
                    <div class="form-group mt-2">
                        <label for="description" class="form-label">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            class="form-control"
                            rows="6"
                            v-model="task.description"
                        >
                            </textarea>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-end">
                    <button type="submit" class="btn btn-success">Modify Task</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        name: "update-task",
        data(){
            return {
                task: {
                    title: "",
                    description: "",
                    created_by: 1
                }
            }
        },
        mounted() {
            this.getTask()
        },
        methods:{
            getTask(){
                this.axios.get(`/api/task/${this.$route.params.id}`)
                    .then(response =>{
                        const { title, description } = response.data
                        this.task.title = title
                        this.task.description = description
                    })
                    .catch(error =>{
                        task: null
                        console.error(error)
                    })
            },
            update(){
                this.axios.put(`/api/task/${this.$route.params.id}`, this.task)
                    .then(response =>{
                        this.$router.push({name: "task-list"})
                    })
                    .catch(error =>{
                        console.error(error)
                    })
            }
        }
    }
</script>
