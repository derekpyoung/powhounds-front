<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        posts: [],
        user: {},
        post: {},
        message: "Users Page",
      };
    },
    created: function () {
      // this.getUser();
      this.indexUserPosts();
      this.getUser();
      
      
    },
    methods: {
      indexUserPosts: function () {
        axios.get("http://localhost:3000/userposts/" + this.$route.params.id).then(response => {
          console.log(response.data);
          this.posts = response.data
          console.log(this.posts);
          
        
         
        })
      },
      getUser: function () {
        axios.get(`http://localhost:3000/users/${this.$route.params.id}`).then(response => {
          console.log(response.data);
          this.user = response.data
        })
      }
    },
   
  };
</script>

<template>
<div>
  <img class="profile_picture_posts_index" v-bind:src="user.profile_picture" alt=""> <br> <br>
    <h3>{{user.name.toUpperCase()}} </h3>
  <br> <br> <br>
</div>
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
   <a class="center btn btn-outline-primary" v-bind:href="`/posts/`" role="button">Back to Posts</a>
</template>

<style>
.btn {
  border-radius: 50%;
  
}
.profile_picture_posts_index {
  margin-top: 2%;
  margin-left: 2%;
  height: 150px;
  width: 150px;
  border-radius: 50%;

  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;

}
</style>