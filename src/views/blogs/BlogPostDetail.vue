<template>
  <div>
    <article
      v-if="blog"
      class="flex flex-col items-center gap-5 md:min-w-md max-w-xl mx-auto"
    >
      <Icons :id="blog.id" />
      <h1 class="text-2xl capitalize font-medium break-words">
        {{ blog.title }}
      </h1>
      <p v-if="blog.author || blog.date" class="text-sm">
        Created
        {{ blog.date ? date : "recently" }}
        by
        <span class="font-semibold">
          {{ blog.author ? blog.author : "Unknown author" }}
        </span>
      </p>
      <p v-if="blog.update" class="text-sm italic">
        Last Updated
        <span class="font-medium">
          {{ blog.update ? blog.update.toLocaleString("cs-CS") : null }}</span
        >
      </p>

      <img
        :src="blog.img"
        alt=""
        class="max-w-full max-h-96 object-cover object-top"
      />
      <p class="text-left max-w-full">{{ blog.body }}</p>
    </article>
    <p v-else class="text-center">
      There is no post with id: <span class="font-bold">{{ id }}</span>
    </p>
  </div>
</template>

<script>
import { useBlogsStore } from "@/store/BlogPostStore";
import { storeToRefs } from "pinia";
import Icons from "@/components/Icons.vue";
import { dateString } from "@/helpers/helpers";
import { useHead } from "@vueuse/head";

useHead({
  title: "BFD | ",
  meta: [
    {
      name: "BFD | ",
      content: "",
    },
  ],
});

export default {
  name: "BlogPostDetail",
  props: ["id"],
  components: { Icons },
  setup(props) {
    const blogsStore = useBlogsStore();
    const { getSinglePostById } = storeToRefs(blogsStore);
    const blog = getSinglePostById.value(props.id);
    const date = dateString(blog.date);

    return { blog, blogsStore, date };
  },
};
</script>

<style></style>
