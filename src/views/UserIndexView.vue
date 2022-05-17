<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        users: [],
        message: "Users",
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
      },
      isLoggedIn: function () {
        if (localStorage.getItem("jwt")){
          return true 
        } else {
          return false 
        }
      },
      reload: function () {
        location.reload()
      }
    },
  };





</script>

<template>

  <div class="posts">
    <h1>{{ message }}</h1>
    <div v-for="user in users.sort()" v-bind:key="user.id">
      <!-- <img v-bind:src="post.photo"> -->
      <h1>   {{user.name.toUpperCase()}}   </h1><br>
       <img class="profile-img" v-bind:src="user.profile_picture" alt="">  <br>
      
      <br>
     
     
        <a class="center btn btn-outline-primary" v-bind:href="`/userposts/${user.id}`" role="button">{{user.name.toUpperCase()}}'s Posts</a>
     
    <div v-if="isLoggedIn()">
     <a class="center btn btn-outline-primary" v-bind:href="`/users/${user.id}`" role="button">Edit Profile</a>
     </div>
     <br>
     <br>
    </div>
  </div>
</template>

<style>
.profile-img {
  width:auto;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
}
.btn-outline-primary {
  background-color: white;
}


</style>