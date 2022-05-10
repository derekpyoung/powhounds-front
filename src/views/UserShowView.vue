<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        current_user: {},
        user: {},
        editUserParams: {},


      };
    },
    created: function () {
      this.showUser();
    },
    methods: {
      showUser: function () {
        axios.get("http://localhost:3000/users/" + this.$route.params.id).then(response => {
          this.user = response.data
          console.log(this.current_user);
        })
      },
      updateUser: function (user) {
        console.log(user.id + " this is the users id");
        axios
          .patch("/users/" + user.id, this.editUserParams)
          .then((response) => {
            console.log(response.data);
            this.editUserParams = {};
          })
          .catch((error) => {
            console.log("user update error", error.response);
          });
      },
    },

  };
</script>
<template>
  <div class="home">
    <div>
      <h1>
        <p>{{ user.name }}</p>
      </h1>
      <img class="profile-show" v-bind:src="user.profile_picture" alt="pic">
      <h2>
        <p>{{user.email}}</p>
      </h2>
    </div>
  </div>
  <h3>Edit Profile</h3>
  <div>
    Edit Name:
    <p> <input type="text" v-model="editUserParams.name" /> </p>
    Edit Email:
    <p><input type="text" v-model="editUserParams.email" /> </p>
    Edit Profile Picture:
    <p><input type="text" v-model="editUserParams.profile_picture" /> </p>

    <button class="btn btn-outline-primary" v-on:click="updateUser(user)">

      <a href="/users/">Update Profile</a>
    </button>
  </div>
</template> -->

<style>
  .profile-show {

    width: auto;
    border-radius: 50%;
  }

  a.btn:hover {
    color: white;
  }
</style>