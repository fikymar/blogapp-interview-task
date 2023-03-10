<template>
  <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
    <form @submit.prevent="handleSubmit">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        ></div>
        <div
          class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
        >
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Create new blog post</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div
                class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="author"
                    :name="newPost.author"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
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
                    id="title"
                    :name="newPost.title"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
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
                    id="text"
                    :name="newPost.body"
                    type="text"
                    class="peer placeholder-transparent w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
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
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
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
                  class="bg-blue-500 text-white rounded-md px-2 py-1"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useBlogsStore } from "@/store/BlogPostStore";
import { ref } from "vue";

export default {
  setup() {
    const blogsStore = useBlogsStore();
    const newPost = ref({});

    console.log(newPost.value);

    const handleSubmit = () => {
      console.log(blogsStore.blogPosts);
      blogsStore.addNewPost({
        ...newPost.value,
        title: newPost.value.title,
        body: newPost.value.body,
        img: newPost.value.img
          ? newPost.value.img
          : "https://source.unsplash.com/random/478x478",
        author: newPost.value.author,
        id: Date.now(),
        date: new Date(),
      });
      console.log(blogsStore.blogPosts);
      newPost.value = {
        title: "",
        body: "",
        img: "",
        author: "",
        id: "",
        date: "",
      };
    };

    return { newPost, handleSubmit };
  },
};
</script>