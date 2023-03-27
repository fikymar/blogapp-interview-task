<template>
  <main>
    <div
      class="grid py-8 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mb-5 md:mb-10"
    >
      <div class="place-self-center mr-auto lg:col-span-7">
        <h1
          class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl bouncing"
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
        <div class="flex flex-col min-[340px]:flex-row gap-5">
          <router-link :to="{ name: 'AllBlogList' }">
            <Button :outline="false">All posts</Button></router-link
          >
          <router-link :to="{ name: 'newpost' }">
            <Button :outline="true">Create new post</Button>
          </router-link>
        </div>
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
      class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-5 items-stretch mb-20"
    >
      <router-link
        :to="{ name: 'AllBlogList' }"
        class="group absolute left-0 top-2 md:top-0 underline font-medium text-right hover:text-lime-600"
      >
        See more articles<span
          class="inline-block translate-x-1 group-hover:translate-x-2 transition-transform"
        >
          ></span
        >
      </router-link>
      <div v-for="blog in blogPosts.slice(0, 3)" :key="blog.id">
        <BlogPreview :blog="blog" />
      </div>
    </div>
  </main>
</template>

<script>
import { useBlogsStore } from "@/store/BlogPostStore";
import BlogPreview from "@/components/BlogPreview.vue";
import { storeToRefs } from "pinia";
import Button from "../components/Button.vue";

export default {
  name: "HomeView",
  props: ["blog"],
  components: { BlogPreview, Button },
  setup() {
    const blogsStore = useBlogsStore();

    const { blogPosts } = storeToRefs(blogsStore);

    return { blogPosts };
  },
};
</script>
