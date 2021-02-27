<template>
  <div id="home-page" class="home-page">
    <MainImage id="main-image" />
    <div id="home-page-body" class="page-body">
      <AboutUs id="about-us" class="about-us" />
      <Featured id="featured" class="featured" />
      <LivewireSubmission id="eventslideshow" class="eventslideshow" />
      <StayConnected id="stay-connected" class="stay-connected" />
      <Bottom id="bottom" class="bottom" />
      <!-- wow ricky u looking fine -->
    </div>
  </div>
</template>

<script>
import AboutUs from "./Home-children/AboutUs";
import MainImage from "./Home-children/MainImage";
import StayConnected from "./Home-children/StayConnected";
import Featured from "./Home-children/Featured";
import LivewireSubmission from "./Home-children/LivewireSubmission";
import Bottom from "./General-children/Bottom";

export default {
  name: "Home",
  components: {
    AboutUs,
    MainImage,
    StayConnected,
    Featured,
    LivewireSubmission,
    Bottom,
  },
  methods: {},

};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import "./styles/Home.scss";
</style>
