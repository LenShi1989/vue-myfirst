<template>
  <button @click="add">顯示頁面</button>
  <Person v-if="isShow" />
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { ref, onMounted } from "vue";

let isShow = ref(true);

// 掛載完畢
onMounted(() => {
  console.log("父---掛載完畢");
});

function add() {
  isShow.value = !isShow.value;
}
</script>
