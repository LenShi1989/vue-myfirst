// 創建一個路由器，並暴露出去

// 第一步: 引入createRouter
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
// 引入一個一個可能要呈現組件
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";

// 第二部: 創建路由器
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式(稍後講解)
  routes: [
    //一個一個的路由規則
    {
      name: "zhuye",
      path: "/home",
      component: Home,
    },
    {
      name: "xinwen",
      path: "/news",
      component: News,
      children: [
        {
          name: "xiang",
          path: "detail",
          component: Detail,
        },
      ],
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
  ],
});
// 暴露出去router
export default router;
