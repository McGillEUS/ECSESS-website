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
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: lightyellow;
}

button {
  all: unset;
  background-color: salmon;
  border-radius: 0.5em;
  padding: 2%;
  padding-left: 3%;
  padding-right: 3%;
  color: white;
  font-family: 'Montserrat';
  font-size: 90%;
  font-weight: 500;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.2);
}

.route-transition {
  transition: ease-in-out 0.3s;
}

</style>
