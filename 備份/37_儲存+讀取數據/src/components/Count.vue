<template>
  <div class="count">
    <h2>當前求和為: {{ countStore.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">減</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref, reactive } from "vue";
import { useCountStore } from "@/store/count";

const countStore = useCountStore();

// 以下兩種方式都可以拿到state中的數據
// console.log("@@@", countStore.sum);
// console.log("@@@2", countStore.$state.sum);

/* 
let obj = reactive({
  a: 1,
  b: 2,
  c: ref(3),
});
let x = ref(9);
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(x.value);
 */

// 數據
let n = ref(1); // 用戶選擇的數字

// 方法
function add() {}
function minus() {}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
