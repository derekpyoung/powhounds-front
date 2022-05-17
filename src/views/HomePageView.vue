<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "POWHOUNDS!",
        resort: "",
        weather: {},
        resortParams: {},
      };
    },
    created: function () { },
    methods: {
      submit: function () {
        console.log(this.resort);
        axios.get(`http://localhost:3000/threeDay`, this.resort ).then(response => {
          console.log(response.data);
          this.weather = response.data
        })

      }
    },
  };
</script>

<template>
  <div class="page">
    <div class="home">
      <h1>Welcome to </h1>
      <div class="outer">
        <img class="logo" src="../assets/pow.png">
      </div>
      <!-- <h1>{{ message }}</h1> -->
      <p>Share your winter sports stories! </p>
    </div>
    <form v-on:submit.prevent="submit()">
      <div>
        <p><label>Favorite Mountain:</label> </p>
        <input type="text" v-model="resort" />
      </div>
      <!-- <h1 >{{ weather }}</h1> -->
      <div class="submit">
        <button type="submit" class="btn btn-outline-primary" value="Submit">Submit</button>
      </div>
    </form>
    <div class="mountain-weather">

 

    </div>
  </div>
  

</template>

<style>
  .home {
    height: 300px;
  }

  .submit {
    padding: 10px;
    display: center;
    float: center;
  }
  .outer{

  }
  .logo{
    border-radius: 50%;
    border: 2px solid grey;
  }

  
</style>