require('./bootstrap');

//import vue
import vue from 'vue';
window.Vue = vue;

//Principal component
import App from './components/App';

//axios
import VueAxios from 'vue-axios';
import axios from 'axios';

//axios-middleware
import { Service } from 'axios-middleware';

const service = new Service(axios);

service.register({
    onResponseError(error){
        if(error.response.status == 422
        && error.response.statusText == "Unprocessable Content"){
            let data = JSON.parse(error.response.data)
            data = Array.from(data.errors.title)
            data.forEach(err =>{
                alert('danger', err)
            })
        }
    }
});

//vue-router
import VueRouter from "vue-router";
import { routes } from './routes';
import Vue from 'vue';
Vue.use(VueRouter);
Vue.use(VueAxios,axios);

const router = new VueRouter({
   mode: 'history',
   routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

const alert = (theme, message)=>{

    let title = ""

    switch(theme){
        case "danger":
           title = "Error"
        break
        default:
            title = "Warning"
        break
    }

    document.querySelector('body').innerHTML +=
        `
            <div class="alert alert-${theme} alert-dismissible fade show" role="alert">
              <strong>${title}</strong> ${message}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `
}
