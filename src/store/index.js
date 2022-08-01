import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
// import storedData from "./data/data.js";

const store = createStore({
  state() {
    return {
      showContent: true,
      isNight: false,
      languages: ["Ukrainian", "English", "Russian"],
    };
  },
  actions,
  getters,
  mutations,
});

export default store;
