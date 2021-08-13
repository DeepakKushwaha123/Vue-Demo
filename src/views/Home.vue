<template>
  <div class="home">
    <AddPost v-on:add-post="addPost" />
    <PostList v-on:del-post="deletePost" v-bind:posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import AddPost from "@/views/AddPost.vue";
import PostList from "@/views/PostList.vue";
export default {
  name: "Home",
  components: {
    AddPost,
    PostList,
  },
  data() {
    return {
      posts: [],
      errors: [],
    };
  },
  methods: {
    addPost(newPost) {
      const { title, body } = newPost;
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title,
          body,
        })
        .then((res) => (this.posts = [...this.posts, res.data]))
        .catch((err) => console.log(err));
    },
    deletePost(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          this.posts = this.posts.filter((post) => post.id !== id);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  // lifecycle methos
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      .then((res) => {
        this.posts = res.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
