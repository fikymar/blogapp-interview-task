<template>
  <main>
    <h1>Blog list</h1>
    <div class="flex flex-wrap gap-5">
      <div v-for="blog in blogs" :key="blog.id">
        <BlogPreview :blog="blog" />
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import BlogPreview from "./BlogPreview.vue";
export default {
  name: "BlogList",
  props: ["blog"],
  components: { BlogPreview },
  setup() {
    const blogs = ref([
      {
        title: "Blogpost 1",
        id: 1,
        author: "John Smith",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci consequuntur tenetur nesciunt quam aliquid. Aliquam nobis dolores voluptatum possimus?",
      },
      {
        title: "Blogpost 2",
        id: 2,
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci consequuntur tenetur nesciunt quam aliquid. Aliquam nobis dolores voluptatum possimus?",
        date: new Date(),
      },
      {
        title: "Blogpost 3",
        id: 3,
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci consequuntur tenetur nesciunt quam aliquid. Aliquam nobis dolores voluptatum possimus?",
        date: new Date(),
      },
    ]);

    return { blogs };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
