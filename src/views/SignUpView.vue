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

      <div class="input-box">
        <div class="input-item">
          <label>Name:</label> 
          <input type="text" v-model="newUserParams.name" /> 
        </div>
        <br>
        
        <div class="input-item">
          <label>Email:</label>
          <input type="password" v-model="newUserParams.email" />
        </div>
          <div class="input-item">
            <label>Password:</label>
            <input type="password" v-model="newUserParams.password" />
          </div>
        <div class="input-item">
          <label>Confirm Password:</label>
          <input type="password" v-model="newUserParams.password_confirmation" />
        </div>
        <div class=" input-file">
          <label>Photo:</label>
          <input type="file" v-on:change="setFile($event)" name="profile_picture" ref="fileInput" />
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <input class="btn sub-btn btn-outline-secondary" type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>
<style>



.signup{
  height: 100%;
  width: 100%;
  text-align: center;
}
.input-box{
  margin: auto;
  padding: 10px;
  max-width: 400px;
  
}

.input-item{
  float: right;
  min-width: 200px;
}
.input-file {
  float: right;
  margin-right: -120px;
  
  
 
}
.sub-btn {
  justify-content: bottom;
  
}

.footer {
  bottom: 0;
  flex: 1 0 auto;
}
</style>