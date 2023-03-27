<template>
  <form
    @submit.prevent="handleSubmit"
    class="w-full sm:max-w-md mx-auto min-h-[90vh]"
  >
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
            name="author"
            type="text"
            class="peer placeholder-transparent h-10 w-full border-b-2 border-zinc-500 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Your name(author)"
            pattern=".*\S+.*"
          />

          <label
            for="author"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >Your name(author)</label
          >
        </div>
        <div class="relative">
          <input
            required
            oninvalid="setCustomValidity('No blank spaces')"
            oninput="setCustomValidity('')"
            autocomplete="off"
            maxlength="80"
            id="title"
            name="title"
            type="text"
            class="peer placeholder-transparent h-10 w-full border-b-2 border-zinc-500 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Title"
            pattern=".*\S+.*"
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
            rows="5"
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

        <Button type="submit" :class="{ 'animate-pulse bg-zinc-500': loading }">
          {{ loading ? "Uploading post..." : "Public Post" }}
        </Button>
      </div>
    </div>
  </form>
</template>

<script>
import { useBlogsStore } from "@/store/BlogPostStore";
import { useMessageStore } from "@/store/MessageStore";
import { ref } from "vue";
import Button from "@/components/Button.vue";

export default {
  components: { Button },

  setup() {
    const blogsStore = useBlogsStore();
    const messageStore = useMessageStore();
    const newPost = ref({});
    const loading = ref(false);

    const handleSubmit = (e) => {
      console.log(e.target.value);
      let { title, body, author, img } = Object.fromEntries(
        new FormData(e.target)
      );
      console.log(title.length, body, author);
      loading.value = true;
      if (title.length < 1) {
        messageStore.replaceAlertMessage(
          `Title is required value`,
          "bg-red-600"
        );
        loading.value = false;
        return;
      } else if (body.length < 1) {
        messageStore.replaceAlertMessage(
          `Text is required value`,
          "bg-rose-600"
        );
        loading.value = false;
        return;
      }

      blogsStore.addNewPost({
        title: title,
        body: body,
        img: img ? img : "https://source.unsplash.com/random/576x384/?tech",
        author: author,
        id: Date.now(),
        date: new Date(),
      });
      console.log(newPost.value.title);

      messageStore.replaceAlertMessage(
        `New post with title "${
          title.length >= 15 ? title.substring(0, 14) + "..." : title
        }" was succesfully upload to store`,
        "bg-lime-600"
      );

      title = "";
      body = "";
      img = "";
      author = "";

      loading.value = false;
    };

    return { newPost, handleSubmit, loading };
  },
};
</script>
