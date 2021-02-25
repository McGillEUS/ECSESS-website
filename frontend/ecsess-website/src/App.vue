<template>
  <div id="app">
    <div id="firstscreen" class="firstscreen">
      <NavBar/>
    </div>
    <transition class="route-transition">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {NavBar},
  created() {
    window.addEventListener("scroll", function () {
        if (this.document.getElementById("main-image") !== null) {
            document.getElementById("main-image").style.opacity = 1 - 0.005 * window.scrollY;
        }
    });
  },
}
</script>

<style lang="scss">
@import "./components/styles/style-components/button.scss";

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: lightyellow;
}

.route-transition {
  transition: ease-in-out 0.3s;
}

a {
    text-decoration: none;
}

</style>
