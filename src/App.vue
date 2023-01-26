<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-dark ">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand text-light" aria-current="page">Libreria</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div  class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/login" class="nav-link link-light" href="#">LogIn</router-link>
            </li>
          </ul>
        </div>
        <button  v-on:click="logout" class="font-bold rounded-md btn btn-outline-light"> LogOut </button>
      </div>
    </nav>
    <router-view/>
  </div>
</template>




<script>
import { show_alert } from './plugins/alerts'
  export default{
    data() {
      return {
        usuario:null,
      }
    },

    computed: {
      auth () {
        return this.$store.getters.auth
      }
    },

    methods: {
      logout() {
        
        this.$store.dispatch("logout")
        .then(() => {
            show_alert('Se cerro sesión', 'info');
              window.setTimeout(function() {
                  window.location.href='/';
              }, 1000);
        })   

      }
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
