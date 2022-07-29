<template>
  <header>
    <div class="bg">
      <section class="header">
        <div class="plank"></div>
        <section class="logo">
          <img src="../../assets/photo.jpg" alt="photo" />
          <h1>Maksym Matsydulskas</h1>
        </section>

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
.header img {
  max-width: 12.5rem;
  border-radius: 50%;
  margin-left: 2rem;
}
.header,
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1;
}
.logo h1 {
  color: var(--text-color);
  font-weight: 800;
  font-size: 2rem;
}
.header {
  justify-content: space-between;
}
.plank {
  background-color: var(--secondary-color);
  height: 8.5rem;
  opacity: 0.8;
  width: 100%;
  position: absolute;
  z-index: 0;
  background: url("../../assets/bg.png") no-repeat center;
  background-size: cover;
  filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.router-links {
  z-index: 1;
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
  background: url("../../assets/bg.png") no-repeat center;
  background-size: cover;
  padding: 2rem 0;
}
</style>
