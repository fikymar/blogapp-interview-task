<template>
  <main>
    <h1 class="text-2xl">Blog list</h1>
    <div class="flex flex-wrap gap-5 justify-center">
      <div v-for="blog in blogsStore.blogPosts" :key="blog.id">
        <BlogPreview :blog="blog" />
      </div>
    </div>
  </main>
</template>

<script>
import { useBlogsStore } from "@/store/BlogPostStore";
import BlogPreview from "./BlogPreview.vue";
export default {
  name: "BlogList",
  props: ["blog"],
  components: { BlogPreview },
  setup() {
    const blogsStore = useBlogsStore();

    return { blogsStore };
  },
};
</script>

<style scoped></style>
