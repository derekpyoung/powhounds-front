<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        posts: [],
        user: {},
        post: {},
        total_runs: 0,
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
          var total_runs = 0;
          this.posts.forEach(function(post){
            total_runs += post.runs_taken 
          })

          console.log(total_runs);
        })
      },
      getUser: function () {
        axios.get(`http://localhost:3000/users/${this.$route.params.id}`).then(response => {
          console.log(response.data);
          this.user = response.data
        })
      },
    },
   
  };
</script>

<template>
<div>
  <img class="profile_picture_posts_index" v-bind:src="user.profile_picture" alt=""> <br> <br>
    <h3>{{user.name.toUpperCase()}} </h3>
  <br> <br> <br>
</div>
   <p> season totals </p>
    <p>runs taken: {{ total_runs }}</p>
  <div class="posts" v-for="post in posts.slice().reverse()" v-bind:key="post.user_id">
    <h2> {{ post.title}}</h2>

 

    <a v-bind:href="`/posts/${post.id}`"> <img class="image-post-index" v-bind:src="post.photo" alt="">  </a>
    <p>{{post.description}}</p>
    <p>{{post.resort}}</p>  
    <p>{{post.freshSnowfall}}</p> 
     <a class="center btn btn-outline-primary" v-bind:href="`/posts/${post.id}`" role="button">More Info</a>
     <br>
     <br>
  </div>
   <a class="center btn btn-outline-secondary" v-bind:href="`/posts/`" role="button">Feed</a>
   <a class="center btn btn-outline-secondary" v-bind:href="`/users/`" role="button">Users</a>
   <br>
   <br>
   <br>
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.image-post-index{
  height: 800px;
  width: 600px;
  object-fit: scale-down; 
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
} 
a {
  margin: 5px;
}
</style>