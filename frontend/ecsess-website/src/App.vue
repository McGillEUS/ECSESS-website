<template>
  <div id="app">
    <div id="firstscreen" class="firstscreen">
      <NavBar/>
    </div>
    <router-view/>
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

</style>
