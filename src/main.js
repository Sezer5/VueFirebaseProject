
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header.vue'
import {onAuthStateChanged} from 'firebase/auth';
import { AUTH } from './firebase/configs';


let app;

onAuthStateChanged(AUTH,()=>{
    if(!app){
        app=createApp(App);
        app.use(router);
        app.component('app-header',Header);
        app.mount('#app');
    };
});



