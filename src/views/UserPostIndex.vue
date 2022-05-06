<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        posts: [],
        user: {},
        message: "Users Page",
      };
    },
    created: function () {
      // this.getUser();
      this.indexUserPosts();
      
      
      
    },
    methods: {
      indexUserPosts: function () {
        axios.get(`http://localhost:3000/userposts/1.json`).then(response => {
          console.log(response.data);
          this.posts = response.data
         
        })
      },
    

      
    },
  };
</script>

<template>
  <div class="posts" v-for="post in posts" v-bind:key="post.id">
    <h2> {{ post.title}}</h2>
    <img v-bind:src="post.photo" alt="">  
    <p>{{post.description}}</p> <br>
    <p>{{post.resort}}</p>  <br>
    <p>{{post.freshSnowfall}}</p> <br>
     <a class="center btn btn-outline-primary" v-bind:href="`/posts/${post.id}`" role="button">More Info</a>

    
  
    
    
  
  </div>
</template>

<style>

</style>