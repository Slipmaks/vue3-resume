<template>
  <section v-if="show">
    <p>created with Vue3, vue-router, vuex4</p>
  </section>
</template>

<script>
export default {
  props: ["show"],
};
</script>
<style scoped></style>
