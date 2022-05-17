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
     
      <p>fresh pow: {{ weather["freshSnowfall"] }}</p>
      <a href="/posts">back</a> <br>
      <button v-on:click="deletePost()">Delete Post</button>

    </div>

  
  </div> -->
  <div class="card-container">
    <div class="card card-border-light row-justify-content-center" style="width: 50rem;">
    <br> 
    <br>
    <div class="profile-picture-container">
      <h1 class="list-group-item">
        <a v-bind:href="`/userposts/${user.id}`" ><img class="thumb-nail" v-bind:src="user.profile_picture" alt="profile"></a>
        {{ user.name.toUpperCase()}} </h1>

    </div>
    <h3>{{post.title.toUpperCase()}}</h3>
      <div class="post-image-container">
        <img class="post-image-class" v-bind:src="post.photo" alt="Card image cap">
      </div>
      <div class="card-body">
        <!-- <h5 class="card-title">{{post.title}}</h5> -->
      
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item"><h6>Description:</h6> {{post.description}}</li>
        <li class="list-group-item"><h6>Resort:</h6> {{post.resort.toUpperCase()}}</li>
        <li class="list-group-item"><h6>Runs Taken:</h6> {{post.runs_taken}}</li>
        <li class="list-group-item"><h6>SnowFall:</h6> {{ post.snow }}</li>
      </ul>
      <div class="card-body">
         
       <a href="/posts" class="btn btn-primary">Back</a> <p></p>
       
        <button v-on:click="deletePost()" class="btn btn-danger" href="/posts">Delete Post</button>
      </div>
    </div>
  </div>

</template>

<style>
.card {
 display: flex;
 justify-content: center;
 border: 0px solid white !important;
 /* background-color: rgba(255, 255, 255, 0.9); */

}
.list-group-item{
  border: 0px solid white !important;
  float: left;

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

.post-image-class{
  height: 700px;
  width: 500px;
  object-fit: scale-down; 
} 

button {
  padding: 2px;
}


.thumb-nail {
  /* width:auto; */
  height: 150px;
  width: 150px;
  border-radius: 50%;
  float: left;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
}

.post-image-container{
  width: 90%;
  justify-content: center;
  align-self: center;
}
</style>


