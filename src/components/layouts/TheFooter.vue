<template>
  <footer v-if="show">
    <p>created with Vue3, vue-router, vuex4</p>
  </footer>
</template>

<script>
export default {
  props: ["show"],
};
</script>
<style scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 1rem auto;
  text-align: center;
}
</style>
