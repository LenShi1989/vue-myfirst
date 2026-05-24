<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>地址: {{ address }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看聯繫方式</button>
  </div>
</template>

<!-- <script lang="ts">
export default {
  name: "Person",
};
</script> -->

<script lang="ts" setup name="Person">
import { ref } from "vue";

// 數據, 原來是寫在data中的, 此時的name、age、tel都不是響應式的數據
let name = ref("张三"); //注意此時的name不是響應式的
let age = ref(18); //注意此時的age不是響應式的
let tel = "13888888888"; //注意此時的tel不是響應式的
let address = "捷廣系統整合有限公司"; //注意此時的address不是響應式的

console.log(1, name);
console.log(2, age);
console.log(3, tel);
console.log(4, address);

// 方法
function changeName() {
  name.value = "Len"; //注意: 這樣修改name, 頁面是沒有變化的
  console.log(name.value); //name確實改了, 但name不是響應式的
}
function changeAge() {
  age.value += 1; //注意: 這樣修改age, 頁面是沒有變化的
  console.log(age.value); //age確實改了, 但age不是響應式的
}
function showTel() {
  alert(tel);
}
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
