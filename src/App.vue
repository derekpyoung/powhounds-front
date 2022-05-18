<script>
export default {
  data: function() {
    return {
      isLoggedIn: false      
    }
  },
  watch: {
    $route: function() {
      this.isLoggedIn = !!localStorage.jwt;
    }
  }
}

</script>




<template>

    <!-- <router-link to="/posts">Feed</router-link> |
    <router-link to="/posts/new">New Post</router-link> |
    <router-link to="/users">Users</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/logout">Logout</router-link> | 
    <router-link to="/signup">SignUp</router-link> | -->


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/posts">Feed</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/users">Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-if="isLoggedIn" href="/posts/new">New Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-if="!isLoggedIn" href="/signup">Sign-up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-if="!isLoggedIn" href="/login">Login</a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link" v-if="isLoggedIn" href="/logout" >Logout</a>
         
        </li>
      </ul>
    </div>
  </div>
</nav>
 

  <router-view/>

<footer class="footer bg-light text-center text-lg-start">
  <!-- Copyright -->
    <div class="foot text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
      <a class="text-dark" href="https://linkedin.com/in/derekpyoung12">Derek Young</a>
 
     </div>
  <!-- Copyright -->
</footer>
</template>

<style>
 #app {
  font-family: 'Play', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  color: #2c3e50;
  background-image: url("https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2dyb3VuZCUyMHdoaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60");
  min-height: 100vh;
  /* min-height: 100%; */
  /* overflow: auto ;  */
  background-size: auto;
  background-repeat: repeat;   
} 



nav {
  padding: 50px;
}
h1{
  font-family: 'Koulen', cursive;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.footer{
  color: #024C7D;
  position: relative;
  background-color: purple !important;
  align-items: center;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
  
}

img:hover {
  filter: brightness(100%);
}
img{
  filter: brightness(90%);
}

</style>
