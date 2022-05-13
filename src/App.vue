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
<!-- old links -->
  <nav>
    <router-link to="/posts">Posts</router-link> |
    <router-link to="/about">About</router-link>| 
    <router-link to="/posts/new">New Post</router-link>|
    <router-link to="/users">Users</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/logout">Logout</router-link> | 
    <router-link to="/signup">SignUp</router-link> |
    
  </nav>
  <!-- old links -->

  <!-- new boot -->
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/posts">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/posts">Posts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/users">Users</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/signup">Sign-up</a>
          <a class="dropdown-item" href="/login">Login</a>
          <a class="dropdown-item" href="/logout">Logout</a>
        </div>
      </li>
    </ul>
  </div>
</nav> -->
  <!-- new boot -->


  <!-- old bootstrap nav -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/posts">Posts</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/users">Users <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a v-if="!isLoggedIn" class="nav-link" href="/signup">Sign Up</a>
      </li>
      <li class="nav-item">
        <a v-if="isLoggedIn" class="nav-link" href="/posts/new">New Post</a>
      </li>
      <li class="nav-item">
        <a v-if="!isLoggedIn" class="nav-link" href="/login">Login</a>
      </li>
      <li class="nav-item">
        <a v-if="isLoggedIn" class="nav-link" href="/logout">Logout</a>
      </li>
    </ul>
  </div>
</nav>
<!-- old bootstrap nav -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /* background: #264C83; */
}
.nav-bar {
  background: black;
  color: red;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
