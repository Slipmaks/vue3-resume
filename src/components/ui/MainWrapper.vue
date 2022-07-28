<template>
  <section class="wrapper">
    <slot></slot>
  </section>
</template>
<style scoped>
.wrapper {
  margin: 2rem;
  padding: 2rem;
  border: 1px rgb(231, 231, 231) solid;
  overflow: hidden;
  background-color: var(--secondary-color);
  color: var(--text-color);
}
</style>
