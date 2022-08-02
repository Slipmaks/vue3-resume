<template>
  <footer v-if="show" class="absolute inset-x-0 bottom-0">
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
