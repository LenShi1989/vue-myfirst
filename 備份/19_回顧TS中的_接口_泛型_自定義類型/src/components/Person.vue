<template>
  <div class="person">???</div>
</template>

<script lang="ts" setup name="Person">
import { type PersonInter, type Persons } from "@/types";

// let person: PersonInter = { id: "asyud7564644564", name: "Len", age: 60 };

let personList: Persons = [
  { id: "asyud7564644564", name: "Len", age: 60 },
  { id: "asyud7564644565", name: "Lena", age: 30 },
  { id: "asyud7564644566", name: "Lenny", age: 20 },
];
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
