<template>
  <main>
    <h1 class="text-3xl font-bold uppercase text-center mb-10">Blog list</h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto xl:grid-cols-4 gap-5 items-stretch"
    >
      <div v-for="blog in blogsStore.blogPosts" :key="blog.id">
        <BlogPreview :blog="blog" />
      </div>
    </div>
  </main>
</template>

<script>
import { useBlogsStore } from "@/store/BlogPostStore";
import { useMessageStore } from "@/store/MessageStore";
import BlogPreview from "./BlogPreview.vue";
export default {
  name: "BlogList",
  props: ["blog"],
  components: { BlogPreview },
  setup() {
    const blogsStore = useBlogsStore();
    const messageStore = useMessageStore();

    return { blogsStore, messageStore };
  },
};
</script>

<style scoped></style>
