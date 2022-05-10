<script>
import axios from "axios";
export default {
  data: function () {
    return {
      posts: [],
      newPostParams: {},
    };
  },
  created: function () {
  //  this.newPost();
  },
  methods: {
  
    newPost: function () {
      axios
        .post("/posts", this.newPostParams)
        .then((response) => {
          console.log("post create", response);
          this.posts.push(response.data);
          this.newPostParams = {};
        })
        .catch((error) => {
          console.log("post create error", error.response);
        });
    },
 
  },
};
</script>

<template>
  <div class="home">
    <h1>New Post</h1>
    <!-- <img class="current_thumb" v-bind:src="user.profile_picture" alt="profile"> -->
    <div>
      Title:
     <p> <input type="text" v-model="newPostParams.title" /> </p>
      Description:
      <p><input type="text" v-model="newPostParams.description" /> </p>
      Photo:
      <p><input type="text" v-model="newPostParams.photo" /> </p>
      Resort:
     <p> <input type="text" v-model="newPostParams.resort" /> </p>
     Runs:
     <p> <input type="text" v-model="newPostParams.runs_taken" /> </p>
    
      <button class="btn btn-outline-primary" v-on:click="newPost()" href="/posts"></button>
    </div>
 
    
  </div>
</template>
<style>
.btn{
  color: red;
}
.btn:hover {
  color: white;
}
</style>