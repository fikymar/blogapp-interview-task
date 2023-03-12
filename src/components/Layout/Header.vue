<template>
  <nav class="pt-5 flex justify-end gap-5 pb-10">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'newpost' }">Create new post</router-link>
  </nav>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style></style>
