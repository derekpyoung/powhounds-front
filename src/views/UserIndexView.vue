<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        users: [],
        message: "Users Page",
      };
    },
    created: function () {
      this.indexUsers();
    },
    methods: {
      indexUsers: function () {
        axios.get("http://localhost:3000/users/").then(response => {
          console.log(response.data);
          this.users = response.data
        })
      }
    },
  };
</script>

<template>

  <div class="posts">
    <h1>{{ message }}</h1>
    <div v-for="user in users" v-bind:key="user.id">
      <!-- <img v-bind:src="post.photo"> -->
      <h1>{{user.name}}   </h1><br>
      
      
     
     <a class="center btn btn-outline-primary" v-bind:href="`/userposts/${user.id}`" role="button">{{user.name}}'s Posts</a>
    </div>
  </div>
</template>

<style>

</style>