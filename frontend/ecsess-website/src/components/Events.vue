<template>
    <div id="events" class="events">
        <EventsMainImage id="main-image" class="main-image"/>
        <div id="events-content" class="events-content">
           <EventList id="eventList" class="eventList"/>
        </div>
    </div>
</template>

<script>
import EventsMainImage from "./Events-children/EventsMainImage.vue"
import EventList from "./Events-children/EventList.vue"

export default {
    name: "Events",
    components: {EventsMainImage, EventList},
    methods: {},
    created() {
        window.addEventListener("scroll", function () {
        console.log(0.005 * window.scrollY);
        document.getElementById("main-image").style.opacity =
            1 - 0.005 * window.scrollY;
    });
  }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'); 

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
</style>