<template>
  <main-wrapper>
    <h2>About</h2>
    <section>
      <h4>Lication:</h4>
      <p>Dnipro, Ukraine</p>

      <h4>Mail:</h4>
      <a href="mailto:slipmaks@gmail.com"> slipmaks@gmail.com</a>
      <h4>Age:</h4>
      <p>27</p>
      <h4>Social:</h4>
      <a href="">
        <img src="../../assets/svg/telegram.svg" alt="telegram" class="icon" />
      </a>
      <a href="">
        <img src="../../assets/svg/viber.svg" alt="viber" class="icon" />
      </a>

      <a href="">
        <img src="../../assets/svg/github.svg" alt="github" class="icon" />
      </a>
    </section>
    <section>
      <h3>Profile</h3>
      <p>
        Multi-skilled, self-motivated. I want to make fresh and interesting
        products. All-time in process of improving myself.
      </p>
    </section>
    <section>
      <h3>Languages</h3>
      <ul>
        <li v-for="lang in languages" :key="lang">{{ lang }}</li>
      </ul>
    </section>
  </main-wrapper>
</template>
<script>
export default {
  computed: {
    languages() {
      return this.$store.getters.languages;
    },
  },
};
</script>
