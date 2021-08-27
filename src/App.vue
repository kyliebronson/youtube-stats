<template>
  <div id="app">
    <div>
      <ul class="header">
        <li class="imgfix">
          <img src="./assets/logo.png" alt="" srcset="" />
        </li>
        <li>
          <router-link to="/"> Home </router-link>
        </li>
        <li><router-link to="/channel1"> JV NONSENSE </router-link></li>
        <li><router-link to="/channel2"> JV CLIPS </router-link></li>
        <li><router-link to="/channel3"> VMS GAMING </router-link></li>
        <li class="mobile-button" @click="showMobileMenu">
          <font-awesome-icon icon="bars" />
        </li>
      </ul>

      <!-- Mobile menu -->
      <div class="mobile-menu" v-if="mobileVisible">
        <ul @click="showMobileMenu">
          <li>
            <router-link to="/"> Home </router-link>
          </li>
          <li><router-link to="/channel1"> JV NONSENSE </router-link></li>
          <li><router-link to="/channel2"> JV CLIPS </router-link></li>
          <li><router-link to="/channel3"> VMS GAMING </router-link></li>
        </ul>
      </div>
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
  data() {
    return {
      mobileVisible: false,
    };
  },
  methods: {
    showMobileMenu() {
      this.mobileVisible = !this.mobileVisible;
    },
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
.mobile-button {
  display: none;
  margin-left: 65%;
}
.mobile-menu {
  display: none;
}
.header li {
  padding-left: 30px;
  padding-top: 12px;
}
.header li a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
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

@media (max-width: 500px) {
  .header li {
    display: none;
  }
  .header .imgfix {
    display: block !important;
  }
  .mobile-button {
    display: block !important;
  }
  .mobile-menu {
    display: block !important;
    background-color: #3a5269;
  }
  .mobile-menu a {
    color: white;
  }
  .mobile-menu li {
    padding: 8px;
  }
}
</style>
