<template>
  <header>
    <div class="bg">
      <section class="logo">
        <img src="../../assets/photo.jpg" alt="photo" />
        <h1>Maksym Matsydulskas</h1>

        <section v-if="show" class="router-links">
          <router-link to="/about" class="router-link">Home</router-link>
          <router-link to="/education" class="router-link"
            >Education</router-link
          >
          <router-link to="/job" class="router-link"
            >Job Expirience</router-link
          >
          <router-link to="/skills" class="router-link">Skills</router-link>
          <router-link to="/portfolio" class="router-link"
            >Portfolio</router-link
          >
        </section>
      </section>
    </div>
  </header>
</template>
<script>
export default {
  props: ["show"],
};
</script>
<style scoped>
header {
  position: relative;
  display: flex;
}
header h1 {
  color: var(--links-bg);
  position: absolute;
  z-index: 1;
  background-color: var(--secondary-color);
  width: 100vw;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  padding-left: 15.25rem;
  opacity: 0.8;
}
.logo img {
  max-width: 12.5rem;
  border-radius: 50%;
  z-index: 2;
  margin-left: 2rem;
}
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.router-links {
  z-index: 2;
  justify-self: flex-end;
  position: absolute;
  right: 0;
  margin-right: 2rem;
}
.router-link {
  text-transform: uppercase;
  font-weight: 700;
  color: var(--links-text);
  margin: 0 0.5rem;
  padding: 1rem 1.5rem;
  border: 1px var(--links-text) solid;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s ease;
}
.router-link:hover {
  color: var(--links-active);
  background-color: var(--links-bg);
}
.router-link-active {
  color: var(--links-active);
  background-color: var(--links-bg);
}
.bg {
  width: 100%;
  background: url("../../assets/bg.png") no-repeat;
  background-size: cover;
  z-index: 1;
  padding: 2rem 0;
}
</style>
