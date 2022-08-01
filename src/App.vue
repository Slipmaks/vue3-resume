<template>
  <the-header :show="showContent"></the-header>

  <router-view v-slot="{ Component }" v-if="showContent">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <the-footer :mode="isNight" :show="showContent"></the-footer>
</template>
<script>
import TheFooter from "./components/layouts/TheFooter.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: { TheFooter, TheHeader },
  computed: {
    showContent() {
      return this.$store.state.showContent;
    },
    isNight() {
      return this.$store.state.isNight;
    },
  },
};
</script>

<style>
:root {
  --links-text: #888888;
  --links-active: #4fd89a;
  --links-bg: #34495e;
  --main-color: #ffffff;
  --secondary-color: #eeeeee;
  --text-color: #213547;
  --night-main: ;
  --night-secoundary: ;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--main-color);
  font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans,
    Helvetica Neue, Arial, sans-serif;
  color: var(--text-color);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.icon {
  max-width: 1.25rem;
  margin: auto 0.5rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
ul {
  list-style: none;
}
</style>
