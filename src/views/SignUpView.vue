<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.profile_picture = event.target.files[0];
      }
    },
    submit: function() {
      var formData = new FormData();
      formData.append("name", this.newUserParams.name);
      formData.append("email", this.newUserParams.email);
      formData.append("password", this.newUserParams.password);
      formData.append("password_confirmation", this.newUserParams.password_confirmation);
      formData.append("profile_picture", this.profile_picture);
      

      axios.post("/users", formData).then(response => {
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
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <div>
        <label>Photo:</label>
        <input type="file" v-on:change="setFile($event)" name="profile_picture" ref="fileInput" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>