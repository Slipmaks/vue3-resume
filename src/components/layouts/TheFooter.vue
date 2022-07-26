<template>
  <section v-if="showContent">
    <p>created with Vue3, vue-router, vuex4</p>
  </section>
</template>

<script>
export default {
  computed: {
    showContent() {
      return this.$store.state.showContent;
    },
  },
};
</script>
<style scoped></style>
