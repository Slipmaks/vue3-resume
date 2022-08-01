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
  text-align: center;
}
</style>
