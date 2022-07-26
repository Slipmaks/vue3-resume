<template>
  <the-header></the-header>

  <router-view v-slot="{ Component }" v-if="showContent">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <the-footer></the-footer>
  <h2>{{ test }}</h2>
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
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: #fafbfb;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
