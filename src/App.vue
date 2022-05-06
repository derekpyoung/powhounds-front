<template>
  <nav>
    <router-link to="/posts">Posts</router-link> |
    <router-link to="/about">About</router-link>| 
    <router-link to="/posts/new">New Post</router-link>|
    <router-link to="/users">Users</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/logout">Logout</router-link> | 
    <router-link to="/signup">SignUp</router-link> |
    
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
        <a class="nav-link" href="/signup">Sign Up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/posts/new">New Post</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="/logout">Logout</a>
      </li>
    </ul>
  </div>
</nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #264C83;
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
