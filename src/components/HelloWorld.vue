<template>
<div>
 <div class="videos" v-for="item in items" :key="item">
   <div class="video" v-for="n in 4" :key="n">
    <img src="../assets/youtube-thumbnail.jpg" alt="" srcset="">
   <div class="video-text">
     <p>
     Views: 10
   </p> 
   <p>
     Watch Hours: 2
   </p>
   </div>
   </div>
   
  </div>   
  </div>
</template>
  
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }, 
  data() {
    return{
      items:[
        { message: 'Foo' },
      { message: 'Bar' },
    { message: 'Foo' },
      { message: 'Bar' },
      { message: 'Foo' },
      { message: 'Bar' },
      
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.videos img {
width: 200px;
}
.videos {
  padding: 30px;
  display: flex; 
  justify-content: center;
}
.video {
  margin-right: 50px;
}
.video-text p {
  font-size: 12px;
  display:inline-block;
  padding-right: 10px;
}


</style>
