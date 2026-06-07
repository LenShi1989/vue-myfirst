<template>
  <!-- 務必看懂下面這一行代碼 -->
  <!-- <h2 a="1+1" :b="1 + 1" c="x" :d="x" ref="qwe">測試</h2> -->
  <Person a="哈哈" />
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { reactive } from "vue";
import { type Persons } from "@/types";

let x = 9;

let personList = reactive<Persons>([
  { id: "asudfysafd01", name: "張三", age: 18 },
  { id: "asudfysafd02", name: "李四", age: 20 },
  { id: "asudfysafd03", name: "王五", age: 22, X: 9 },
]);
</script>
