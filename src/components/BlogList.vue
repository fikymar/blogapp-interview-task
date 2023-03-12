<template>
  <main>
    <div
      class="grid py-8 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mb-5 md:mb-10"
    >
      <div class="place-self-center mr-auto lg:col-span-7">
        <h1
          class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl"
        >
          Blog for developers
        </h1>
        <p
          class="mb-6 max-w-2xl font-light text-zinc-500 lg:mb-8 md:text-lg lg:text-xl"
        >
          Lorem ipsum dolor repudiandae fugiat nobis officia nostrum dolor ullam
          nemo iure esse similique doloribus reiciendis repellat, voluptate
          sunt. Quisquam!
        </p>
        <router-link :to="{ name: 'AllBlogList' }">
          <button
            class="bg-lime-600 border-2 border-lime-600 hover:text-zinc-600 hover:bg-lime-500 hover:border-zinc-600 text-white rounded-md px-4 py-2 self-center uppercase mr-4 transition"
            type="submit"
          >
            All posts
          </button></router-link
        >
        <router-link :to="{ name: 'newpost' }">
          <button
            class="bg-white hover:bg-lime-500 border-2 border-zinc-600 text-zinc-800 rounded-md px-4 py-2 self-center uppercase transition"
            type="submit"
          >
            Create post
          </button></router-link
        >
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="@/assets/svg/coder.svg" alt="" />
      </div>
    </div>
    <h1
      class="textShadow text-2xl md:text-3xl font-bold uppercase md:text-center mb-0 md:mb-10 tracking-wide text-zinc-600"
    >
      Fresh new posts
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-5 items-stretch mb-20"
    >
      <div v-for="blog in blogPosts.slice(0, 3)" :key="blog.id">
        <BlogPreview :blog="blog" />
      </div>
    </div>
  </main>
</template>

<script>
import { useBlogsStore } from "@/store/BlogPostStore";
import BlogPreview from "./BlogPreview.vue";
import { storeToRefs } from "pinia";

export default {
  name: "BlogList",
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
