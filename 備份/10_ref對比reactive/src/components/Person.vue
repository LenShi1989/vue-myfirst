<template>
  <div class="person">
    <h2>汽車信息: 一輛車{{ car.brand }}, 價值{{ car.price }}萬</h2>
    <button @click="changeBrand">修改汽車的品牌</button>
    <button @click="changePrice">修改汽車的價格</button>
    <button @click="changeCar">修改汽車</button>
    <hr />
    <h2>當前求和為: {{ sum }}</h2>
    <button @click="changeSum">點我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from "vue";

// 數據
let car = reactive({ brand: "BMW", price: 100 });
let sum = ref(0);

// 方法
function changeBrand() {
  car.brand = "賓士";
}
function changePrice() {
  car.price += 10;
}
function changeCar() {
  // car = {brand: "奧迪",price: 1,}; //這麼寫頁面不更新的
  // car = reactive({brand: "奧迪",price: 1,}); //這麼寫頁面不更新的

  // 下面這個寫法頁面可以更新
  Object.assign(car, { brand: "奧迪", price: 1 });
}
function changeSum() {
  sum.value += 1;
}
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
li {
  font-size: 20px;
}
</style>
