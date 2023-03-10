<template>
  <router-link :to="{ name: 'BlogPostDetail', params: { id: blog.id } }">
    <article
      class="relative flex-1 lg:min-w-md flex flex-col gap-3 p-5 rounded-md shadow-md hover:shadow-xl bg-slate-500 bg-opacity-50 text-slate-100 flex-fill"
    >
      <img
        v-if="blog.img"
        :src="blog.img"
        alt="blog.title"
        class="absolute top-0 left-0 right-0 w-full h-full object-cover object-top -z-10 rounded-md"
      />
      <h2 class="font-bold text-xl">
        {{ blog.title }}
      </h2>
      <p class="line-clamp-3 text-left">{{ blog.body }}</p>
      <div class="flex justify-between text-sm">
        <p :v-if="blog.author" class="uppercase">
          {{ blog.author && blog.author }}
        </p>
        <p :v-if="blog.date">
          {{ blog.date && blog.date.toDateString() }}
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
