<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        newSessionParams: {},
        errors: [],
      };
    },
    methods: {
      submit: function () {
        axios
          .post("/sessions", this.newSessionParams)
          .then((response) => {
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
            localStorage.setItem("jwt", response.data.jwt);
            this.$router.push("/posts/");
          })
          .catch((error) => {
            console.log(error.response);
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          });
      },
    },
  };
</script>

<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div class="login-container">
        <div class="login-item">
          <label>Email:</label>
          <input type="email" v-model="newSessionParams.email" />
        </div>
        <br>
        <div class="login-item">
          <label>Password:</label>
          <input type="password" v-model="newSessionParams.password" />
        </div>
      </div>
      <br>
      <br>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
<style>
  .login {
    height: 100%;
    width: 100%;
    text-align: center;
  }
  .login-container {
    width: 300px;
    align-self: center;
    justify-content: center;
    margin: auto;
  }
  .login-item {
    justify-content: center;
    float:right;
    

  }
  
</style>
