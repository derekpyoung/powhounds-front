<script>
import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "POWHOUNDS!",
      };
    },
    created: function () {},
    methods: {
      getWeather: function () {
        axios.get("http://localhost:3000/users")
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>Welcome to </h1>
    <h1>{{ message }}</h1>
    <p>Share your winter sports stories! </p>
  </div>

</template>

<style>
.home {
  background-image: linear-gradient(#B5D1FF,#FCFCFC);
}

</style>