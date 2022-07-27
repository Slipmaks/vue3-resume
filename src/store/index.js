import { createStore } from "vuex";
// import storedData from "./data/data.js";

const store = createStore({
  state() {
    return {
      showContent: false,
      isNight: false,
    };
  },
});

export default store;
