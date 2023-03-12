import { defineStore } from "pinia";

export const useBlogsStore = defineStore("blogsStore", {
  state: () => ({
    blogPosts: [
      {
        img: "https://source.unsplash.com/random/576x384/?code",
        title: " 10 Problems When Working With Javascript You Can’t Ignore",
        id: 1,
        author: "John Smith",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci consequuntur tenetur nesciunt quam aliquid. Aliquam nobis dolores voluptatum possimus?",
        date: new Date(),
      },
      {
        img: "https://source.unsplash.com/random/576x384/?css",
        title:
          "CSS Frameworks: Pros and Cons of Using Them for Web Development",
        id: 2,
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate aliquam recusandae quos corporis unde ut atque perspiciatis, dolores aut dignissimos impedit sed illo cum, praesentium esse inventore, at voluptatibus quo? Consequatur reiciendis voluptatum eos ad dolore amet minus delectus id commodi! Sequi magnam laborum repudiandae vel tenetur temporibus vitae exercitationem?",
        date: new Date(),
      },
      {
        img: "https://source.unsplash.com/random/576x384/?webdesign",
        title: "Best Practices for Writing Clean and Maintainable CSS Code",
        id: 3,
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a. Molestiae nam illo accusamus, vel maiores modi dolore quis delectus, porro voluptates qui et unde doloribus incidunt magnam ratione dignissimos optio minus corrupti. Voluptate ducimus nisi temporibus placeat eveniet fugiat obcaecati animi, aspernatur rem optio dicta, eos officia. Et ad nemo culpa corrupti. Illo aperiam eaque eveniet voluptates sit voluptas voluptatum molestiae non officia sapiente perferendis quo, dignissimos magni obcaecati architecto iste numquam minima enim consectetur omnis. Dolorem cumque quos, aliquid nisi sint libero sapiente. Fuga, placeat? Placeat nam soluta doloremque alias, iure consequatur explicabo ea ducimus velit, ratione in.",
        date: new Date(),
      },
    ],
  }),
  getters: {
    getSinglePostById: (state) => {
      return (id) => state.blogPosts.find((post) => post.id.toString() === id);
    },
  },
  actions: {
    addNewPost(post) {
      this.blogPosts.push(post);
    },
    deleteSinglePost(id) {
      this.blogPosts = this.blogPosts.filter((post) => {
        return post.id !== id;
      });
    },
    editCurrentPost(post) {
      return (this.blogPosts = this.blogPosts.map((blog) =>
        blog.id !== post.id ? blog : post
      ));
    },
  },
});
