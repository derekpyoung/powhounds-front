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
        axios.get("http://localhost:3000/userposts/" + this.$route.params.id).then(response => {
          console.log(response.data);
          this.posts = response.data
        
         
        })
      },
    },
   
  };
</script>

<template>
  <div class="posts" v-for="post in posts.slice().reverse()" v-bind:key="post.user_id">
    <h2> {{ post.title}}</h2>
    <img v-bind:src="post.photo" alt="">  
    <p>{{post.description}}</p>
    <p>{{post.resort}}</p>  
    <p>{{post.freshSnowfall}}</p> 
     <a class="center btn btn-outline-primary" v-bind:href="`/posts/${post.id}`" role="button">More Info</a>
     <br>
     <br>

    
  
    
    
  
  </div>
</template>

<style>
.btn {
  border-radius: 50%;
  
}
</style>