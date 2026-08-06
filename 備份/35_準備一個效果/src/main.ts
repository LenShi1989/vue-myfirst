// 引入createApp用於創建應用
import { createApp } from "vue";
// 引入App根組件
import App from "./App.vue";

// 創建一個應用
const app = createApp(App);

// 掛載整個應用到app容器中
app.mount("#app");
