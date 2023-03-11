<template>
  <div>
    <Icons :id="blog.id" />
    <router-link :to="{ name: 'BlogPostDetail', params: { id: blog.id } }">
      <article
        class="relative h-full lg:min-w-md flex flex-col flex-auto gap-3 rounded-t-md capitalize overflow-hidden group"
      >
        <div class="w-full h-48 overflow-hidden rounded-md">
          <img
            v-if="blog.img"
            :src="blog.img"
            alt="blog.title"
            class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-800"
          />
        </div>
        <h2 class="font-bold text-xl text-left">
          {{ blog.title }}
        </h2>
        <p class="line-clamp-3 text-left font-light">{{ blog.body }}</p>
        <div class="flex justify-between text-sm justify-self-end">
          <p :v-if="blog.author" class="uppercase">
            {{ blog.author && blog.author }}
          </p>
          <p :v-if="blog.date">
            {{ blog.date && blog.date.toDateString() }}
          </p>
        </div>
      </article>
    </router-link>
  </div>
</template>

<script>
import Icons from "./Icons.vue";
export default {
  props: ["blog"],
  components: { Icons },
};
</script>

<style></style>
