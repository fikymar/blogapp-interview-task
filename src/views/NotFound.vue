<template>
  <main class="h-screen w-full flex flex-col justify-center items-center">
    <h1 class="text-9xl font-extrabold text-black tracking-widest">404</h1>
    <div class="bg-rose-600 px-2 text-sm rounded rotate-12 absolute">
      Page Not Found
    </div>
    <button class="mt-5">
      <a
        class="relative inline-block text-sm font-medium text-rose-600 group active:text-rose-600 focus:outline-none focus:ring"
      >
        <router-link to="/"
          ><button
            class="bg-rose-600 text-white rounded-md px-4 py-2 self-center uppercase"
          >
            Go Home
          </button></router-link
        >
      </a>
    </button>
  </main>
</template>

<script>
import { useHead } from "@vueuse/head";
useHead({
  title: "BFD | 404",
  meta: [
    {
      name: "Blog for developers 404",
      content: "Not exist",
    },
  ],
});

export default {};
</script>
