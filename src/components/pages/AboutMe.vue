<template>
  <main-wrapper>
    <h2>About</h2>
    <section>
      <section class="section-inline">
        <h4>Lication:</h4>
        <p>Dnipro, Ukraine</p>
      </section>

      <section class="section-inline">
        <h4>Mail:</h4>
        <a href="mailto:slipmaks@gmail.com" class="underline decoration-2"
          >slipmaks@gmail.com</a
        >
      </section>

      <section class="section-inline">
        <h4>Age:</h4>
        <p>27</p>
      </section>

      <section class="section-inline">
        <h4>Social:</h4>
        <a href="https://telegram.me/+380669723993">
          <img
            src="../../assets/svg/telegram.svg"
            alt="telegram"
            class="icon-default filter-tel"
          />
        </a>
        <a href="viber://contact?number=%+380669723993">
          <img
            src="../../assets/svg/viber.svg"
            alt="viber"
            class="icon-default filter-viber"
          />
        </a>

        <a href="https://github.com/Slipmaks">
          <img
            src="../../assets/svg/github.svg"
            alt="github"
            class="icon-default"
          />
        </a>
      </section>
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
      <ul class="flex gap-2">
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
<style scoped>
.filter-tel {
  filter: invert(53%) sepia(38%) saturate(6770%) hue-rotate(164deg)
    brightness(98%) contrast(101%);
}
.filter-viber {
  filter: invert(14%) sepia(98%) saturate(7447%) hue-rotate(310deg)
    brightness(64%) contrast(101%);
}
.section-inline {
  @apply flex gap-2 items-baseline;
}
</style>
