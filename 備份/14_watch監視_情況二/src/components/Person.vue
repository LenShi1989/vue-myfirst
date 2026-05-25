<template>
  <div class="person">
    <h1>情況二: 監視【ref】定義的【對象類型】數據</h1>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年齡:{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="changePerson">修改整個人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from "vue";
// 數據
let person = ref({
  name: "Len",
  age: 37,
});

// 方法
function changeName() {
  person.value.name += "~ ";
}
function changeAge() {
  person.value.age += 1;
}
function changePerson() {
  person.value = {
    name: "李四",
    age: 90,
  };
}

/*
監視, 情況二: 監視【ref】定義的【對象類型】數據, 監視的是對象的地址值, 若想監視對象內部的屬性值變化, 需要手動開啟深度監視
watch的第一個參數是: 被監視的數據
watch的第二個參數是: 監視的回調
watch的第三個參數是: 配置對象(deep、 immediate等等...)
*/

watch(
  person,
  (newValue, oldValue) => {
    console.log("person變化了", newValue, oldValue);
  },
  { deep: true, immediate: true },
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
