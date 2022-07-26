import { createStore } from "vuex";
// import storedData from "./data/data.js";

const store = createStore({
  state() {
    return {
      showContent: false,
    };
  },
});

export default store;
