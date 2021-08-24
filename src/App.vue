<template>
  <div id="app">
    <div>
      <ul class="header"> 
        <li class="imgfix">
          <img src="./assets/logo.png" alt="" srcset="">
        </li>
        <li> 
          Home 
        </li>
        <li>

        </li>
      </ul>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.header {
  list-style: none;
  background-color: #2c3e50;
  color: white; 
  display: flex;
  justify-content: left;
  padding-inline-start: 0;
  vertical-align: middle;
}
.header li {
  padding-left: 30px;
  padding-top: 12px;
}
.header img {
  height: 35px; 
}
.header .imgfix{
  padding-top:7px !important;
}

</style>
