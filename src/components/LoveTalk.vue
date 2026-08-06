<template>
  <div class="talk">
    <button @click="getLoveTalk">獲取一句土味情話</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from "vue";
import axios from "axios";
import { nanoid } from "nanoid";

// 數據
let talkList = reactive([
  { id: "ftrfasdf01", title: "今天你有點怪，哪裡怪> 怪好看的!" },
  { id: "ftrfasdf02", title: "草莓、藍莓、蔓越莓，今天想我了沒?" },
  { id: "ftrfasdf03", title: "心理給你留了一塊地，我的死心踏地" },
]);

// 方法
async function getLoveTalk() {
  // 發請求，下面這行的寫法是:連續解構賦值+重命名
  let {
    data: { text: title },
  } = await axios.get(
    "https://api.btstu.cn/yan/api.php?charset=utf-8&encode=json",
  );
  // 把請求回來的字符串，包裝成一個對象
  let obj = { id: nanoid(), title };
  // 放到數組中
  talkList.unshift(obj);
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
