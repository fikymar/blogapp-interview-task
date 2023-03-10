<template>
  <div>
    <h1>detail {{ id }}</h1>
    <article v-if="blog" class="flex flex-col items-center gap-5 md:min-w-md">
      <h1 class="">{{ blog.title }}</h1>
      <p v-if="blog.author || blog.date" class="text-sm">
        Created on {{ blog.date ? blog.date.toDateString() : "recently" }} by
        <span class="font-semibold">
          {{ blog.author ? blog.author : "Unknown author" }}
        </span>
      </p>
      <p class="text-left max-w-full md:max-w-md">{{ blog.body }}</p>
      <img
        :src="blog.img"
        alt=""
        class="max-w-md max-h-md object-cover object-top"
      />
    </article>
    <p v-else>There is no post with id: {{ id }}</p>
  </div>
</template>

<script>
import { useBlogsStore } from "@/store/BlogPostStore";
import { storeToRefs } from "pinia";

export default {
  name: "BlogPostDetail",
  props: ["id"],
  setup(props) {
    const blogsStore = useBlogsStore();
    const { getSinglePostById } = storeToRefs(blogsStore);
    const blog = getSinglePostById.value(props.id);

    return { blog, blogsStore };
  },
};
</script>

<style></style>
