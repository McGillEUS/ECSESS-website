<template>
  <div id="home-page" class="home-page">
    <MainImage id="main-image" class="main-image" />
    <div id="home-page-after-main-image" class="home-page-after-main-image">
      <AboutUs id="about-us" class="about-us" />
      <Resources id="resources" class="resources" />
      <StayConnected id="stay-connected" class="stay-connected" />
    </div>
  </div>
</template>

<script>
import AboutUs from "./Home-children/AboutUs";
import MainImage from "./Home-children/MainImage";
import StayConnected from "./Home-children/StayConnected";
import Resources from "./Home-children/Resources";

export default {
  name: "Home",
  components: { AboutUs, MainImage, StayConnected, Resources },
  methods: {},
  created() {
    window.addEventListener("scroll", function () {
      console.log(0.005 * window.scrollY);
      document.getElementById("main-image").style.opacity =
        1 - 0.005 * window.scrollY;
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.home-page {
  background-color: lightyellow;
  width: 100%;
  height: 100%;
}

.firstscreen {
  position: fixed;
  width: 100%;
  height: 10%;
}

.main-image {
  width: 100%;
  height: 100vh;
  padding-top: 50vh;
  padding-bottom: 50vh;
  text-align: center;
  z-index: -2;
  position: fixed;
  background-color: lightyellow;
}

h1 {
  all: unset;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 200%;
  font-weight: 500;
  color: salmon;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

h5 {
  all: unset;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  font-weight: 400;
  color: salmon;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

.home-page-after-main-image {
  position: absolute;
  top: 100vh;
}

.about-us {
  width: 100%;
  z-index: 0;
  background-color: lightyellow;
}

.stay-connected {
  width: 100%;
  z-index: 0;
}

.resources {
  width: 100%;
  z-index: 0;
  background-color: lightyellow;
}
</style>
