<template>
  <div>
    <article
      v-if="blog"
      class="flex flex-col items-center gap-5 md:min-w-md max-w-xl mx-auto"
    >
      <Icons :id="blog.id" />
      <h1 class="text-2xl capitalize font-medium">{{ blog.title }}</h1>
      <p v-if="blog.author || blog.date" class="text-sm">
        Created on {{ blog.date ? blog.date.toDateString() : "recently" }} by
        <span class="font-semibold">
          {{ blog.author ? blog.author : "Unknown author" }}
        </span>
      </p>
      <p class="text-left max-w-full">{{ blog.body }}</p>
      <img
        :src="blog.img"
        alt=""
        class="max-w-full max-h-96 object-cover object-top"
      />
    </article>
    <p v-else>There is no post with id: {{ id }}</p>
  </div>
</template>

<script>
import { useBlogsStore } from "@/store/BlogPostStore";
import { storeToRefs } from "pinia";
import Icons from "@/components/Icons.vue";

export default {
  name: "BlogPostDetail",
  props: ["id"],
  components: { Icons },
  setup(props) {
    const blogsStore = useBlogsStore();
    const { getSinglePostById } = storeToRefs(blogsStore);
    const blog = getSinglePostById.value(props.id);

    return { blog, blogsStore };
  },
};
</script>

<style></style>
