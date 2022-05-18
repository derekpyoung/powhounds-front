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
    created: function () {},
    methods: {
      submit: function () {
        console.log(this.resort)
         axios.get(`http://localhost:3000/threeDay?resort=${this.resort}`).then(response => {
           console.log(response.data);
           this.weather = response.data
           console.log(this.weather.summary3Day);
       
       
        })
      },
    }
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
          </div>
        <div class="intro">
          <p>A place where like minded winter sports enthusiasts can share their experiences and stories while also letting their friends know exactly how much fun you have had over the season. </p>
        </div>
    
    <form v-on:submit.prevent="submit()">
      <div>
        <p><label>Local Mountain 3 day summary:</label> </p>
        <input type="text" v-model="resort" />
      </div>
      <!-- <h1 >{{ weather }}</h1> -->
      <div class="submit">
        <button type="submit" class="btn btn-outline-primary" value="Submit">Submit</button>
      </div>
    </form>
    <div class="mountain-weather">
      {{this.weather.summary3Day}}
    </div>
    <br>
    <br>
    <br>
   
    <br>
    <br>
  </div>
  

</template>

<style>
  .home {
    height: 300px;
  }
  .page {
    height: 100%;
  }
  

  .submit {
    padding: 10px;
    display: center;
    float: center;
  }
  .mountain-weather {

  }
  
  .logo{
    border-radius: 50%;
    border: 2px solid grey;
  }
  .intro {
    display: flex;
    padding: 50px;
    align-items: center;
    justify-content: center;
  }

  
</style>