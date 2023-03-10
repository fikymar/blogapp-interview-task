<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'newpost' }">Create new post</router-link>
    </nav>
    <!-- breadcrumbs -->
    <router-link to="{$router.params}">{{ $route }}</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style></style>
