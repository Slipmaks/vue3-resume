import { createStore } from "vuex";
// import storedData from "./data/data.js";

const store = createStore({
  state() {
    return {
      showContent: true,
      isNight: false,
    };
  },
});

export default store;
