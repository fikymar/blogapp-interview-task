<template>
  <main class="min-h-[90vh]">
    <h1
      class="text-3xl font-bold uppercase text-center mb-10 tracking-wide text-zinc-600"
    >
      ALL Blog list
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto xl:grid-cols-4 gap-5 items-stretch"
    >
      <div v-for="blog in blogPosts" :key="blog.id">
        <BlogPreview :blog="blog" />
      </div>
    </div>
  </main>
</template>

<script>
import { useBlogsStore } from "@/store/BlogPostStore";
import BlogPreview from "../../components/BlogPreview.vue";
import { storeToRefs } from "pinia";
import { useHead } from "@vueuse/head";

useHead({
  title: "BFD | All Blogs",
  meta: [
    {
      name: "Blogs",
      content:
        "Lorem ipsum dolor repudiandae fugiat nobis officia nostrum dolor ullam",
    },
  ],
});
export default {
  name: "AllBlogList",
  props: ["blog"],
  components: { BlogPreview },
  setup() {
    const blogsStore = useBlogsStore();

    const { blogPosts } = storeToRefs(blogsStore);

    return { blogPosts };
  },
};
</script>

<style scoped></style>
