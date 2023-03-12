<template>
  <form @submit.prevent="handleSubmit" class="w-full sm:max-w-md mx-auto">
    <div>
      <h1 class="text-2xl font-semibold text-center">Create new blog post</h1>
    </div>
    <div class="divide-y divide-gray-200">
      <div
        class="flex flex-col py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
      >
        <div class="relative">
          <input
            autocomplete="off"
            maxlength="20"
            id="author"
            :name="newPost.author"
            type="text"
            class="peer placeholder-transparent h-10 w-full border-b-2 border-zinc-500 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Your name(author)"
            v-model="newPost.author"
          />

          <label
            for="author"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >Your name(author)</label
          >
        </div>
        <div class="relative">
          <input
            autocomplete="off"
            maxlength="80"
            id="title"
            :name="newPost.title"
            type="text"
            class="peer placeholder-transparent h-10 w-full border-b-2 border-zinc-500 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Title"
            v-model="newPost.title"
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
            :name="newPost.body"
            type="text"
            class="peer placeholder-transparent w-full border-b-2 border-zinc-500 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Text"
            rows="5"
            v-model="newPost.body"
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
            :name="newPost.img"
            type="text"
            class="peer placeholder-transparent h-10 w-full border-b-2 border-zinc-500 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Image url"
            v-model="newPost.img"
          />
          <label
            for="img"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Image url</label
          >
        </div>

        <button
          class="bg-lime-600 border-2 border-lime-600 hover:bg-lime-500 hover:text-zinc-600 hover:border-zinc-600 text-white rounded-md px-4 py-2 self-center uppercase mr-4 transition"
          type="submit"
          :class="{ 'animate-pulse bg-zinc-500': loading }"
        >
          {{ loading ? "Uploading post..." : "Public Post" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { useBlogsStore } from "@/store/BlogPostStore";
import { useMessageStore } from "@/store/MessageStore";
import { ref } from "vue";

export default {
  setup() {
    const blogsStore = useBlogsStore();
    const messageStore = useMessageStore();
    const newPost = ref({});
    const loading = ref(false);

    const handleSubmit = () => {
      loading.value = true;
      if (!newPost.value.title) {
        messageStore.replaceAlertMessage(
          `Title is required value`,
          "bg-red-600"
        );
        loading.value = false;
        return;
      } else if (!newPost.value.body) {
        messageStore.replaceAlertMessage(
          `Text is required value`,
          "bg-red-600"
        );
        loading.value = false;
        return;
      }

      blogsStore.addNewPost({
        ...newPost.value,
        title: newPost.value.title,
        body: newPost.value.body,
        img: newPost.value.img
          ? newPost.value.img
          : "https://source.unsplash.com/random/576x384/?tech",
        author: newPost.value.author,
        id: Date.now(),
        date: new Date(),
      });

      messageStore.replaceAlertMessage(
        `New post with title "${
          newPost.value.title.length >= 15
            ? newPost.value.title.substring(0, 14) + "..."
            : newPost.value.title
        }" was succesfully upload to store`,
        "bg-lime-600"
      );
      newPost.value = {
        title: "",
        body: "",
        img: "",
        author: "",
        id: "",
        date: "",
      };

      loading.value = false;
    };

    return { newPost, handleSubmit, loading };
  },
};
</script>
