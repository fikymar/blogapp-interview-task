import { defineStore } from "pinia";

export const useBlogsStore = defineStore("blogsStore", {
  state: () => ({
    blogPosts: [
      {
        img: "https://source.unsplash.com/random/468x468/?flower",
        title: "Blogpost 1",
        id: 1,
        author: "John Smith",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci consequuntur tenetur nesciunt quam aliquid. Aliquam nobis dolores voluptatum possimus?",
      },
      {
        img: "https://source.unsplash.com/random/468x468/?joy",
        title: "Blogpost 2",
        id: 2,
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci consequuntur tenetur nesciunt quam aliquid. Aliquam nobis dolores voluptatum possimus?",
        date: new Date(),
      },
      {
        title: "Blogpost 3",
        id: 3,
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci consequuntur tenetur nesciunt quam aliquid. Aliquam nobis dolores voluptatum possimus?",
        date: new Date(),
      },
    ],
  }),
  getters: {
    getSinglePostById: (state) => {
      return (id) => state.blogPosts.find((post) => post.id.toString() === id);
    },
    deleteSinglePost: (state) => {
      return (id) =>
        state.blogPosts.filter((post) => post.id.toString() !== id);
    },
  },
  actions: {
    addNewPost(post) {
      this.blogPosts.push(post);
    },
  },
});
