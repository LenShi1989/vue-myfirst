import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  // actions裡面放置的是一個一個的方法, 用於響應組建中的"動作"
  actions: {
    increment(value: number) {
      console.log("increment被調用了", value);
      if (this.sum < 10) {
        // 修改數據 (this是當前的store)
        this.sum += value;
      }
    },
  },
  // 真正儲存數據的地方
  state() {
    return {
      sum: 6,
      school: "uch",
      address: "健行科技大學",
    };
  },
});
