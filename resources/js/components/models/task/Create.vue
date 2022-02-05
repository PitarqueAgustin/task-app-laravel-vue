<template>
    <div class="container mt-4">
        <form @submit.prevent="create">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Create new task</h3>
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
                        <div class="form-group">
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
                    <button type="submit" class="btn btn-success">Create Task</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "create-task",
        data(){
            return{
                task:{
                    title: "",
                    description: "",
                    created_by: 1
                }
            }
        },
        methods:{
            create(){
                this.axios.post('/api/task', this.task)
                    .then(response =>{
                        console.log(response)
                        this.$router.push({name:"task-list"})
                    })
                    .catch(error=>{
                        console.error(error)
                    })
            }
        }
    }
</script>
