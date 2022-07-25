import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "./components/pages/AboutMe.vue";
import MyEducation from "./components/pages/MyEducation.vue";
import MyJob from "./components/pages/MyJob.vue";
import MySkills from "./components/pages/MySkills.vue";
import MyPortfolio from "./components/pages/MyPortfolioList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/about" },
    { path: "/about", component: AboutMe },
    { path: "/education", component: MyEducation },
    { path: "/job", component: MyJob },
    { path: "/skills", component: MySkills },
    { path: "/portfolio", component: MyPortfolio },
    { path: "/:notFound(.*)", redirect: "/about" },
  ],
});

export default router;
