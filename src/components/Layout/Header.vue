<template>
  <div>
    <nav class="pt-5 flex justify-end gap-5">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'newpost' }">Create new post</router-link>
    </nav>
    <!-- breadcrumbs -->
    <router-link to="">{{ $route }}</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style></style>
