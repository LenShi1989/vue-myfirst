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

          // 第一種寫法: 將路由收到的所有params參數作為props傳給路由組件
          // props: true,

          // 第二種寫法: 函數寫法, 可以自己決定將什麼作為props給路由組件
          props(route) {
            return route.query;
          },

          // 第三種寫法: 對象寫法, 可以自己決定將什麼作為props給路由組件
          // props: {
          //   a: 100,
          //   b: 200,
          //   c: 300,
          // },
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
