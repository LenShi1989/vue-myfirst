<template>
  <div class="person">
    <h1>情況五: 監視上述的多個數據</h1>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年齡: {{ person.age }}</h2>
    <h2>汽車: {{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名子</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="changeC1">修改第一台車</button>
    <button @click="changeC2">修改第二台車</button>
    <button @click="changeCar">修改整個車</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from "vue";
// 數據
let person = reactive({
  name: "張三",
  age: 18,
  car: {
    c1: "賓士",
    c2: "寶馬",
  },
});

// 方法

function changeName() {
  person.name += "~ ";
}
function changeAge() {
  person.age += 1;
}
function changeC1() {
  person.car.c1 = "馬自達";
}
function changeC2() {
  person.car.c2 = "MG";
}
function changeCar() {
  person.car = {
    c1: "奧迪",
    c2: "路虎",
  };
}

// 監視, 情況五: 監視上述的多個數據
watch(
  [() => person.name, () => person.car.c1],
  (newValue, oldValue) => {
    console.log("person.car變化了", newValue, oldValue);
  },
  { deep: true },
);
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
