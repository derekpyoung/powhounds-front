<script>
import axios from "axios";
export default {
  data: function () {
    return {
      posts: [],
      newPostParams: {},
    };
  },
  created: function () {},
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.photo = event.target.files[0];
      }
    },
    submit: function() {
      var formData = new FormData();
      formData.append("title", this.newPostParams.title);
      formData.append("description", this.newPostParams.description);
      formData.append("resort", this.newPostParams.resort);
      formData.append("runs_taken", this.newPostParams.runs_taken);
      formData.append("photo", this.photo);
      // debugger; 
  
      axios.post("/posts", formData).then(response => {
        console.log(response);
        this.title = formData.title;
        this.description = formData.description;
        this.resort = formData.resort;
        this.runs_taken = formData.runs_taken,
        this.$refs.fileInput.value = "";
      })
      this.$router.push("/posts")
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>New Post</h1>
    <!-- <img class="current_thumb" v-bind:src="user.profile_picture" alt="profile"> -->
    <div>
      Title:
     <p> <input type="text" v-model="newPostParams.title" /> </p>
      Description:
      <p><input type="text" v-model="newPostParams.description" /> </p>
      Photo:
      <p><input type="file" v-on:change="setFile($event)" name="photo" /> </p>
      Resort:
     <p> <input type="text" v-model="newPostParams.resort" /> </p>
     Runs taken:
     <p> <input type="text" v-model="newPostParams.runs_taken" /> </p>
    
      <button class="btn btn-outline-primary" v-on:click="submit()" href="/posts">Submit</button>
    </div>
 
    
  </div>
</template>
<style>
.btn{
  color: red;
}
.btn:hover {
  color: white;
}
</style>