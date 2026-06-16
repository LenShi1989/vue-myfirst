// 引入createApp用於創建應用
import { createApp } from 'vue'
// 引入App根組件
import App from './App.vue'
// 引入路由器
import router from "./router"

// 創建一個應用
const app = createApp(App)
// 使用路由器
app.use(router)
// 掛載整個應用到app容器中
app.mount('#app')  