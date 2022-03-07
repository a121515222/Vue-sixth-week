import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import emitter from './emitter'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
// 全域註冊mitt 待測試
app.config.globalProperties.$emitter = emitter
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
