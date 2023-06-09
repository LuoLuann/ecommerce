import { createApp } from 'vue'

import store from '../src/store/store'
import router from './router';

//import './style.css'
import './index.css'
import App from './App.vue'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
