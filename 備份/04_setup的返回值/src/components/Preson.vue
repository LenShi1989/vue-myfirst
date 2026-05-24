<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看聯繫方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
  beforeCreate() {
    console.log("beforeCreate");
  },
  setup() {
    console.log("setup");
    // console.log(this);  //setup函數中的this是undefined, Vue3中已經弱化this了
    // 數據, 原來是寫在data中的, 此時的name、age、tel都不是響應式的數據
    let name = "张三"; //注意此時的name不是響應式的
    let age = 18; //注意此時的age不是響應式的
    let tel = "13888888888"; //注意此時的tel不是響應式的

    // 方法
    function changeName() {
      console.log(1);
      name = "Len"; //注意: 這樣修改name, 頁面是沒有變化的
      console.log(name); //name確實改了, 但name不是響應式的
    }
    function changeAge() {
      console.log(2);
      name = "Len"; //注意: 這樣修改age, 頁面是沒有變化的
      age += 1; //age確實改了, 但age不是響應式的
      console.log(age);
    }
    function showTel() {
      console.log(3);
      alert(tel);
    }
    // 將數據、方法交出去，模板中才可以使用
    return {
      name,
      age,
      changeName,
      changeAge,
      showTel,
    };

    // setup的返回值也可以是一個渲染函數
    // return () => "哈哈";
  },
};
</script>

<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
</style>
