<template>
  <div class="person">
    <ul>
      <li v-for="p in list" :key="p.id">{{ p.name }} -- {{ p.age }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
// import { defineProps, withDefaults } from "vue";
import { type Persons } from "@/types";

// 只接收list
// defineProps(["list"]);

// 接收list+限制類型
// defineProps<{ list: Persons }>();

// 接收list + 限制類型 + 限制必要性 + 指定默認值
withDefaults(defineProps<{ list?: Persons }>(), {
  list: () => [{ id: "asudfysafd01", name: "康師父", age: 18 }],
});

// 接收list，同時將props保存起來
/* let x = defineProps(["list"]);
console.log(x.list); */
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
