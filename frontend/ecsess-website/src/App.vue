<template>
  <div id="app">
    <div id="firstscreen" class="firstscreen">
      <NavBar v-bind:menuOptions="menuOptions" id="navbar" class="navbar" @handleNavClick="handleNavClick"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {NavBar},
  data () {
    return {menuOptions: []}
  },
  methods: {
    handleNavClick: function (route) {
      console.log(route.route)
      this.$router.push({path: route.route})
    }
  },
  created() {
    this.menuOptions = [
      {name: "Home", route: "/"}, 
      {name: "Council", route: "/council"},
      {name: "Events", route: "/events"},
      {name: "Extracurriculars", route: "/extracurriculars"},
      {name: "Opportunities", route: "/opportunities"},
      {name: "Photos", route: "/photos"},
      {name: "Bursaries", route: "/bursaries"}
    ]
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  }

</style>
