const Home = ()=> import('./components/pages/Home')

//task
const TaskList = ()=> import('./components/models/task/List')
const TaskCreate = ()=> import('./components/models/task/Create')
const TaskUpdate = ()=> import('./components/models/task/Update')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'task-list',
        path: '/tasks',
        component: TaskList
    },
    {
        name: 'task-create',
        path: '/task/create',
        component: TaskCreate
    },
    {
        name: 'task-update',
        path: '/task/update/:id',
        component: TaskUpdate
    }
]
