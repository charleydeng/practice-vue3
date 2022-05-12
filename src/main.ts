import { createApp } from 'vue'
import axios from 'axios'
import todoApp from './todoApp.vue'
import tableApp from './tableApp.vue'
import './index.css'
// createApp(todoApp).mount('#app')
const app = createApp(tableApp)
app.config.globalProperties.$axios = axios// 将axios挂载到全局，且每个组件通过this.$axios访问
axios.defaults.baseURL = 'http://localhost:3000'// 设置默认请求地址

app.mount('#app')
