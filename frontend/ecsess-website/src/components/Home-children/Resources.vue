<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Resources for you</h2>
        </div>
        <Slideshow :items="resources"/>
    </div>
</template>

<script>
import Slideshow from "../General-children/Slideshow";

export default {
    name: "Resources",
    components: { Slideshow },
    data() {
        return {resources: []}
    },
    methods: {
    
    },
    mounted() {
        this.resources = [
            {name: "Ye", id: 0, image: "semiconductors.jpg"},
            {name: "CodeJam", id: 1, image: "funds-featured.jpg"},
            {name: "Yo", id: 2, image: "semiconductors.jpg"}
        ]
    }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

</style>