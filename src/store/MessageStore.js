import { defineStore } from "pinia";

export const useMessageStore = defineStore("messageStore", {
  state: () => ({
    msg: "",
    color: "",
  }),
  getters: {
    getAlertMessage: (state) => {
      return state;
    },
  },
  actions: {
    replaceAlertMessage(msg, color) {
      this.msg = msg;
      this.color = color;
    },
    clearAlertMessage(msg) {
      this.msg = "";
      return msg;
    },
  },
});
