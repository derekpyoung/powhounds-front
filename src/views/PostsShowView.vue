<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        post: {},
        message: "posts Home Page",
      };
    },
    created: function () {
      this.showPost();
    },
    methods: {
      showPost: function () {

        axios.get(`http://localhost:3000/posts/${this.$route.params.id}`).then(response => {
          console.log(response.data)
          this.post = response.data
        }

        )
      }

    },
  };
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <img v-bind:src="post.photo" alt="">

    <h2>title: {{post.title}}</h2>
    <h2>description: <p> {{post.description}} </p></h2>
    <h2>resort: {{post.resort}}</h2>
    <h2>runs taken: {{post.runs_taken}} </h2>

    <h2>weather: {{post.weather}}</h2>
    <a href="/">back</a>

  
  </div>
</template>

<style></style>
