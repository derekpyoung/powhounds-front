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
     <p> <input type="text" v-model="newPostParams.title" /> </p>
    
      <button v-on:click="newPost()">Create post</button>
    </div>
 
    
  </div>
</template>
<style></style>