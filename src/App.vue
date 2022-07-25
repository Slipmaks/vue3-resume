<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
  <h2>{{ test }}</h2>
</template>
<script>
import TheFooter from "./components/layouts/TheFooter.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: { TheFooter, TheHeader },
  computed: {
    test() {
      return this.$store.state.storedData.storedData;
    },
  },
};
</script>

<style></style>
