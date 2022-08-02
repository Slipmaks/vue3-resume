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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.icon-default {
  width: 1.25rem;
}
</style>
