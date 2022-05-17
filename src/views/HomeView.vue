<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        posts: [],
        message: "Feed",
        users: [],
        user: {},
      };
    },
    created: function () {
      this.indexPosts();
      
    },
    
    methods: {
      indexPosts: function () {
        axios.get("http://localhost:3000/posts.json").then(response => {
          // console.log(response.data);
          this.posts = response.data
          
          console.log(this.posts);
        })
      }, 
    },
  };
</script>

  <template>
    <div class="posts">
      <a href="/posts/new" type="button" class="btn btn-outline-primary new-post">Create Post</a>
      <br>
      <br>
      
        <div v-for="post in posts.slice().reverse()" v-bind:key="post.user_id">
          
   
          
          <br>
         
          <a v-bind:href="`/userposts/${post.user_id}`">  <img class="profile-picture-img" v-bind:src="post.user" alt=""> </a>
       
        <h1 > {{post.title}}</h1>
     
     
      <a v-bind:href="`/posts/${post.id}`"> <img v-bind:src="post.photo" class="post-photo-index" alt=""> </a>
        <br> <h3> {{post.description}} </h3> <br>
          <a class="center btn btn-outline-primary " v-bind:href="`/posts/${post.id}`"  
          role="button">Full Post</a>
          <br>
          <div class="text-area"></div>
          <br>
  
      </div>
    </div>
  </template>

<style>
.text-area {
  border-bottom: 1px dashed #D4D4D4;
  margin-bottom: 5px;
  padding-bottom: 15px;
}
.post-photo-index {
  height: 700px;
  width: 500px;
  object-fit: fill;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;  
}
.new-post{
  margin-top: 20px;
  margin-left: 20px;
  background-color: white;
  float: right;
  margin-right: 50px;
}
 h1{
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align:center;

}
.btn-outline-primary {
  background-color: white;
}

.profile-picture-img {
  left: 0;
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
h1{
  text-shadow: 2px 2px white;
}

</style>