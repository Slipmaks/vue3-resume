<template>
  <header>
    <section class="logo">
      <img src="../../assets/photo.jpg" alt="photo" />
      <h1>Maksym Matsydulskas</h1>
    </section>

    <section v-if="show">
      <router-link to="/about">Home</router-link>
      <router-link to="/education">Education</router-link>
      <router-link to="/job">Job Expirience</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
    </section>
  </header>
</template>
<script>
export default {
  props: ["show"],
};
</script>
<style scoped>
header {
  margin: 2.5rem auto;
  position: relative;
}
header h1 {
  position: absolute;
  z-index: 1;
  background-color: hsl(0, 0%, 96%);
  width: 100vw;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  padding-left: 14.25rem;
}
img {
  max-width: 12.5rem;
  border-radius: 50%;
  z-index: 2;
  margin-left: 1rem;
}
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
