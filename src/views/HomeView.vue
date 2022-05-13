<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        posts: [],
        message: "Posts",
        users: [],
        user: {},
      };
    },
    created: function () {
      this.indexPosts();
    },
    methods: {
      indexPosts: function () {
        axios.get("http://localhost:3000/posts").then(response => {
          // console.log(response.data);
          this.posts = response.data
          console.log(this.posts);
          // console.log(posts);
        
        })
      },
       
       
    },
  };
</script>

<template>
  <div class="posts">
    <h1>{{ message }}</h1>
    <div v-for="post in posts.slice().reverse()" v-bind:key="post.user_id">
     <!-- <img class="thumb-nail" v-bind:src=" user.profile_picture" alt="profile"> -->
     <a v-bind:href="`/posts/${post.id}`"> <img v-bind:src="post.photo" class="post-photo-index" alt=""> </a>
      <h1>{{post.id}}) {{post.title}}- {{post.description}}  <br>
        <a class="center btn btn-outline-primary" v-bind:href="`/posts/${post.id}`" 
        role="button">More Info</a>
       <i class="fa-solid fa-user"></i>
      </h1>
    </div>
  </div>
</template>

<style>
.post-photo-index {
  border-radius: 25%;
  width: 74%;
}
img {
  height: auto;
  width: 75%;
}

</style>