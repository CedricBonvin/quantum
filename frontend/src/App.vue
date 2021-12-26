<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <top-bar />
    <router-view/>
    <footers />
  </div>
</template>

<script>
import Footers from './components/layout/footer.vue'
import topBar from './components/layout/top-bar.vue'

export default {
	components: { topBar, Footers},
	name : "Accueil",
	methods : {
	},
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
