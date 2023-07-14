<template>
  <form
    @submit.prevent="handleSubmit"
    class="w-full sm:max-w-md mx-auto min-h-[90vh]"
  >
    <div>
      <h1 class="text-2xl font-semibold text-center">Edit blog post</h1>
    </div>
    <div class="divide-y divide-gray-200">
      <div
        class="flex flex-col py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
      >
        <div class="relative">
          <input
            readonly
            id="id"
            name="author"
            type="text"
            class="peer placeholder-transparent h-10 w-full border-b-2 border-zinc-500 text-gray-900 focus:outline-none focus:border-rose-600"
            v-model="post.id"
          />

          <label
            for="id"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >Post id</label
          >
        </div>
        <div class="relative">
          <input
            readonly
            id="id"
            name="date"
            type="text"
            class="peer placeholder-transparent h-10 w-full border-b-2 border-zinc-500 text-gray-900 focus:outline-none focus:border-rose-600"
            v-model="post.date"
          />

          <label
            for="date"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >Created on</label
          >
        </div>
        <div class="relative">
          <input
            autocomplete="off"
            maxlength="20"
            id="author"
            name="author"
            type="text"
            class="peer placeholder-transparent h-10 w-full border-b-2 border-zinc-500 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Author"
          />

          <label
            for="author"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >Author</label
          >
        </div>
        <div class="relative">
          <input
            autocomplete="off"
            maxlength="80"
            id="title"
            :name="post.title"
            type="text"
            class="peer placeholder-transparent h-10 w-full border-b-2 border-zinc-500 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Title"
            required
          />
          <label
            for="title"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >Title</label
          >
        </div>
        <div class="relative">
          <textarea
            autocomplete="off"
            maxlength="350"
            id="text"
            name="body"
            type="text"
            class="peer placeholder-transparent w-full border-b-2 border-zinc-500 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Text"
            rows="8"
            required
          />
          <label
            for="text"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Text</label
          >
        </div>
        <div class="relative">
          <input
            autocomplete="off"
            id="img"
            name="img"
            type="text"
            class="peer placeholder-transparent h-10 w-full border-b-2 border-zinc-500 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Image url"
          />
          <label
            for="img"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Image url</label
          >
        </div>
        <Button type="submit"> Update Post </Button>
      </div>
    </div>
  </form>
</template>

<script>
import { useBlogsStore } from "@/store/BlogPostStore";
import { useMessageStore } from "@/store/MessageStore";
import { storeToRefs } from "pinia";
import Button from "@/components/Button.vue";
import { useHead } from "@vueuse/head";
useHead({
  title: "BFD | Edit your post",
  meta: [
    {
      name: "BFD | Edit your post",
      content: "",
    },
  ],
});

export default {
  name: "editBlogPost",
  components: { Button },
  props: ["id"],
  setup(props) {
    const blogsStore = useBlogsStore();
    const messageStore = useMessageStore();
    const { getSinglePostById } = storeToRefs(blogsStore);
    const post = getSinglePostById.value(props.id);
    const date = post.date.toUTCString();

    const handleSubmit = (e) => {
      const { title, body, author, img } = Object.fromEntries(
        new FormData(e.target)
      );
      blogsStore.editCurrentPost({
        ...post,
        title: title,
        body: body,
        author: author,
        img: img,
        update: new Date(),
      });

      messageStore.replaceAlertMessage(
        `Post id "${post.id}" has been changed 
        `,
        "bg-lime-600"
      );
    };

    return { post, handleSubmit, date };
  },
};
</script>
