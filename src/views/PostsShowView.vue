<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        post: {},
        message: "posts show Page",
        weather: {},
        user: {},
      };
    },
    created: function () {
      this.showPost();
      
    },
    methods: {
      showPost: function () {

        axios.get(`http://localhost:3000/posts/${this.$route.params.id}`).then(response => {
          console.log(response.data)
          this.post = response.data
          this.resort = this.post.resort 
          this.resort_query = this.resort.replace(/ +/g, "");
          console.log( this.resort_query);
          // console.log(this.resort);
          // this.freshSnowfall();
          this.getUser();
          
        }

        )
      },
   
      getUser: function () {
        axios.get(`http://localhost:3000/users/${this.post.user_id}`).then(response => {
          this.user = response.data
          console.log(this.user);
     
        })
      },
      deletePost: function () {
      console.log("delete post");
      axios.delete(`/posts/${this.post.id}.json`).then(response => {
        console.log(response.data);
        this.$router.push("/posts")

      })

    }
    },
  };
</script>

<template>
  <!-- <div class="home"> -->
    <!-- <h1>{{ message }}</h1>
    <img class="profile-pic" v-bind:src="user.profile_picture" alt="proflie picture"> 

    <h2>title: {{post.title}}</h2>
    <img v-bind:src="post.photo" alt="">  
    <div class="post-container">
      <h1> {{ user.name }}</h1>
      
     <p> {{post.description}} </p>
      <p>resort: {{post.resort}}</p>
      <p>runs taken: {{post.runs_taken}} </p>
      <p>fresh pow: {{ weather["freshSnowfall"] }}</p>
      <a href="/posts">back</a> <br>
      <button v-on:click="deletePost()">Delete Post</button>

    </div>

  
  </div> -->
  <div class="card-container">
    <div class="card card-border-light row-justify-content-center" style="width: 50rem;">
    <br> 
    <br>
     <h1 class="list-group-item"><img class="thumb-nail" v-bind:src="user.profile_picture" alt="profile"> {{ user.name.toUpperCase()}} </h1>
      
      <img class="card-img-top" v-bind:src="post.photo" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{post.title}}</h5>
      
      </div>

      <ul class="list-group list-group-flush">
       
        <li class="list-group-item">Description: {{post.description}}</li>
        <li class="list-group-item">Resort: {{post.resort}}</li>
        <li class="list-group-item">Runs: {{post.runs_taken}}</li>
        <li class="list-group-item">SnowFall: {{ post.snow }}</li>
        
        
    
      </ul>
      <div class="card-body">
       <a href="/posts" class="btn btn-primary">Back</a> <p></p>
      
        <button v-on:click="deletePost()" class="btn btn-danger">Delete Post</button>
      </div>
    </div>
  </div>

</template>

<style>
.card {
 display: flex;
 justify-content: center;
 border: 0px solid white !important;

}
.list-group-item{
  border: 0px solid white !important;
}
.card-container{
  display: flex;
  align-items: center;
  justify-content: center;
}
h1{
  color: grey;
}
h2 {
  color: #3E5C6B;
}
img{
  box-shadow: 2px 2px #7B668C;
  width: 50%;
}
button {
  padding: 2px;
}

.profile-pic {
  border-radius: 50%;
  height: auto;
  width: 10%;
}
.thumb-nail {
  height: auto;
  max-width: 20%;
  border-radius: 50%;
}
</style>


