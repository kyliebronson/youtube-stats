<template>
  <div id="app">
    <div>
      <ul class="header">
        <li class="imgfix">
          <img src="./assets/logo.png" alt="" srcset="" />
        </li>
        <li><router-link to="/"> Home </router-link></li>
        <li><router-link to="/channel1"> Nonsense </router-link></li>
        <li><router-link to="/channel2"> Clips </router-link></li>
        <li><router-link to="/channel3"> GAMING </router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
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
  background-color: #e5eaf0;
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
.header li a {
  color: white;
  text-decoration: none;
}
.header li a:hover {
  color: #2afc98;
  text-decoration: underline;
}
.header img {
  height: 35px;
}
.header .imgfix {
  padding-top: 7px !important;
}
</style>
