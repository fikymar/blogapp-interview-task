<template>
  <div class="h-full pt-10">
    <Icons :id="blog.id" />
    <router-link :to="{ name: 'BlogPostDetail', params: { id: blog.id } }">
      <article
        class="relative h-full lg:min-w-md flex flex-col gap-3 rounded-t-md capitalize overflow-hidden group"
      >
        <div class="w-full h-48 overflow-hidden rounded-md">
          <img
            v-if="blog.img"
            :src="blog.img"
            alt="blog.title"
            class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-500"
          />
        </div>
        <h2
          class="font-bold text-xl text-left line-clamp-2 group-hover:text-lime-700 transition"
        >
          {{ blog.title }}
        </h2>
        <p
          class="line-clamp-3 text-left font-light text-zinc-500 group-hover:text-zinc-900 transition"
        >
          {{ blog.body }}
        </p>
        <div class="flex justify-between text-sm justify-self-end mt-auto">
          <p :v-if="blog.author" class="uppercase">
            {{ blog.author && blog.author }}
          </p>
          <p :v-if="blog.date">
            {{ blog.date && date }}
          </p>
        </div>
      </article>
    </router-link>
  </div>
</template>

<script>
import Icons from "./Icons.vue";
import { dateString } from "@/helpers/helpers";

export default {
  props: ["blog"],
  components: { Icons },
  setup(props) {
    const date = dateString(props.blog.date);

    return { date };
  },
};
</script>

<style></style>
