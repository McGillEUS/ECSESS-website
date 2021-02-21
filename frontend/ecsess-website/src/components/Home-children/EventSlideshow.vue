<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Events</h2>
        </div>
        <Slideshow type="featured" :items="events"/>
    </div>
</template>

<script>
import Slideshow from "../General-children/Slideshow";

export default {
    name: "EventSlideshow",
    components: { Slideshow },
    data() {
        return {events: []}
    },
    methods: {
    
    },
    mounted() {
        this.events = [
            {name: "ECSESS Banquet", semester: "Fall & Winter", id: 0, image: "semiconductors.jpg"},
            {name: "Academic Forum", semester: "idk", id: 1, image: "funds-featured.jpg"},
            {name: "ECSEscapade", semester: "idk", id: 2, image: "semiconductors.jpg"},
            {name: "Blues Pub", semester: "Every Friday", id: 3, image: "semiconductors.jpg"},
            {name: "Coffee House", semester: "Sometimes", id: 4, image: "semiconductors.jpg"}
        ]
    }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

</style>