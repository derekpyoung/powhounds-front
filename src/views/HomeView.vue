<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        posts: [],
        message: "posts Page",
      };
    },
    created: function () {
      this.indexPosts();
    },
    methods: {
      indexPosts: function () {
        axios.get("http://localhost:3000/posts").then(response => {
          console.log(response.data);
          this.posts = response.data
        })
      }
    },
  };
</script>

<template>
  <div class="posts">
    <h1>{{ message }}</h1>
    <div v-for="post in posts" v-bind:key="post.id">
      <img v-bind:src="post.photo">
      <h1>{{post.id}}) {{post.title}}- {{post.description}}  <br>
        <a class="center btn btn-outline-primary" v-bind:href="`/posts/${post.id}`" role="button">More Info</a>
      </h1>
    </div>
  </div>
</template>

<style></style>