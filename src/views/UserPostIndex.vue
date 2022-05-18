<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        posts: [],
        user: {},
        post: {},
        total_runs: 0,
        resorts_ridden: [],
        snow_fall: [],
        total_snow: 0,
        message: "Users Page",
      };
    },
    created: function () {
      // this.getUser();
      this.indexUserPosts();
      this.getUser();
      
      
    },
    methods: {
      indexUserPosts: function () {
        axios.get("http://localhost:3000/userposts/" + this.$route.params.id).then(response => {
          // console.log(response.data);
          this.posts = response.data
          // console.log(this.posts);
          var runs = 0;
          var resorts = [];
          var snowFall = [];
          this.posts.forEach(function(post){
            runs += post.runs_taken 
            resorts.push(post.resort)
          
            snowFall.push(parseInt(post.snow.slice(0,1)));

          })

          this.total_runs = runs 
          this.snow_fall = snowFall
          this.resorts_ridden = resorts 
          var total = 0
          this.snow_fall.forEach(function(snow){
            total = total += snow 
          })
          // console.log(total);
          

          this.total_snow = total
          // console.log(this.snow_fall);
          // console.log(this.resorts_ridden);
          // console.log(this.snow_fall);
        })

      },
      getUser: function () {
        axios.get(`http://localhost:3000/users/${this.$route.params.id}`).then(response => {
          // console.log(response.data);
          this.user = response.data
        })
      },
      open: function () {
        // console.log("inside open funcion");
        document.querySelector('#season-totals').showModal();
      }
    },
   
  };
</script>

<template>
<div>
  <img class="profile_picture_posts_index" v-bind:src="user.profile_picture" alt=""> <br> <br>
    <h3>{{user.name.toUpperCase()}} </h3>
  <br> 
</div>


<!-- <div>
  <dialog id="season-details">
    <form method="dialog">
      <h1>Season Totals</h1>
      <p>Resorts: <input v-model="seasonTotals.resorts"></p>
      <p>Runs Taken: <input v-model="seasonTotals.runs_taken"></p>
      <p>Snowfall Ridden: <input v-model="seasonTotals.Snowfall Ridden"></p>
      <p>chef: <input v-model="seasonTotals.chef"></p>
      <button>Close</button>
    </form>
  </dialog>
</div> -->

 <button class="btn btn-outline-secondary" v-on:click="open()">Season Totals</button>
  <dialog id="season-totals">
    <form method="dialog">
      <h4>Runs Taken </h4>
        <p>  {{ total_runs }}</p>
      <h4>Powder Ridden </h4>
        <p> {{total_snow}}" </p>
      <h4> Resorts </h4>
      <div class="ridden" v-for="resort in resorts_ridden" v-bind:key="resort.resort">
        <p>-{{resort}} </p>
      </div>
        <button class="btn btn-outline-primary">Close</button>
    </form>
  </dialog>
  <br>
  <br>
  <br>

  <div class="posts" v-for="post in posts.slice().reverse()" v-bind:key="post.user_id">
    <h2> {{ post.title.toUpperCase()}}</h2>

 

    <a v-bind:href="`/posts/${post.id}`"> <img class="image-post-index" v-bind:src="post.photo" alt="">  </a>
    <p>{{post.description}}</p>
    <p>{{post.resort}}</p>  
    <p>{{post.freshSnowfall}}</p> 
     <a class="center btn btn-outline-primary" v-bind:href="`/posts/${post.id}`" role="button">More Info</a>
     <br>
     <br>
  </div>
   <a class="center btn btn-outline-secondary" v-bind:href="`/posts/`" role="button">Feed</a>
   <a class="center btn btn-outline-secondary" v-bind:href="`/users/`" role="button">Users</a>
   <br>
   <br>
   <br>
</template>

<style>
.btn {
  border-radius: 50%;
  
}
.profile_picture_posts_index {
  margin-top: 2%;
  margin-left: 2%;
  height: 150px;
  width: 150px;
  border-radius: 50%;

  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.image-post-index{
  height: 800px;
  width: 600px;
  object-fit: scale-down; 
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
} 
a {
  margin: 5px;
}
#season-totals {
  color:#062380;
  border: 2px solid black;
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>