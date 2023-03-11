<template>
  <div class="mx-5 relative">
    <Toast />
    <Header />

    <slot />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Toast from "../Toast.vue";

export default {
  name: ["Layout"],
  components: {
    Header,
    Toast,
  },
};
</script>

<style></style>
