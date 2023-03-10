<template>
  <router-link :to="{ name: 'BlogPostDetail', params: { id: blog.id } }">
    <article
      class="max-w-full md:max-w-md lg:max-w-sm flex flex-col gap-3 bg-sky-300 p-5 rounded-md"
    >
      <h2
        :to="{ name: 'BlogPostDetail', params: { id: blog.id } }"
        class="font-bold uppercase"
      >
        {{ blog.title }}
      </h2>
      <p class="line-clamp-3 text-left">{{ blog.desc }}</p>
      <div class="flex justify-between">
        <p :v-if="blog.author" class="uppercase">
          {{ blog.author && blog.author }}
        </p>
        <p :v-if="blog.date">
          {{ blog.date && blog.date.toLocaleString("cs-CS") }}
        </p>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  props: ["blog"],
};
</script>

<style></style>
