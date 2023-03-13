<template>
  <div class="mx-5 relative min-h-screen flex flex-col">
    <Toast />
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Toast from "../Toast.vue";
import Footer from "./Footer.vue";

export default {
  name: ["Layout"],
  components: {
    Header,
    Toast,
    Footer,
  },
};
</script>

<style></style>
