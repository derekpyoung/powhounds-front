

  <script>
import axios from "axios";
export default {
  data: function () {
    return {
      current_user: {},
      editUserParams: {},
    };
  },
  created: function () {
    this.showUser()
  },
  methods: {
    showUser: function () {
      axios.get("http://localhost:3000/users/" + this.$route.params.id).then(response => {
        this.editUserParams = response.data
        console.log(this.editUserParams);
        console.log(this.$route.params.id)
      })
    },
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.editUserParams.profile_picture = event.target.files[0];
        console.log("working");
        
      }
    },
    submit: function() {
      var formData = new FormData();
      formData.append("name", this.editUserParams.name);
      formData.append("email", this.editUserParams.email);
      formData.append("password", this.editUserParams.password);
      formData.append("password_confirmation", this.editUserParams.password_confirmation);
      formData.append("id", this.editUserParams.id);
      formData.append("profile_picture", this.editUserParams.profile_picture);
      
      console.log("profilePicture: " + formData.profile_picture);
      

      axios.patch(`/users/${this.editUserParams.id}`, formData).then(response => {
        console.log(response);
        this.name = formData.name;
        this.email = formData.email;
        this.password = formData.password;
        this.password_confirmation = formData.password_confirmation;
        this.$refs.fileInput.value = "";

      })
    }  
  }
};

</script>


<template>
  <div class="home">
    <div>
      <h1>
        <p>{{ editUserParams.name }}</p>
      </h1>
      <img class="profile-show" v-bind:src="editUserParams.profile_picture" alt="pic">
      <h2>
        <p>{{editUserParams.email}}</p>
      </h2>
    </div>
  </div>
  <h3>Edit Profile</h3>
  <div>
    Edit Name:
    <p> <input type="string"  v-model="editUserParams.name" /> </p>
    Edit Email:
    <p><input type="string" v-model="editUserParams.email" /> </p>
    Edit Profile Picture:
    <p><input type="file"  v-on:change="setFile($event)"  name="profile_picture" /> </p>

    <button class="btn btn-outline-primary" v-on:click="submit(editUserParams)">

      <a href="/users/">Update Profile</a>
    </button>
  </div>
</template> 

<style>
  .profile-show {

    width: 50%;
    height: auto;
    border-radius: 50%;
  }

  a.btn:hover {
    color: white;
  }
</style>