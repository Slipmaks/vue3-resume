import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import MainWrapper from "./components/ui/MainWrapper.vue";

const app = createApp(App);
app.component("main-wrapper", MainWrapper);
app.use(router);
app.use(store);

app.mount("#app");
