<template>
  <div class="mx-5">
    <Header />

    <slot />
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: ["Layout"],
  components: {
    Header,
  },
};
</script>

<style></style>
