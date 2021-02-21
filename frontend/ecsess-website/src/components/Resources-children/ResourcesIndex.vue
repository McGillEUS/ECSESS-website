<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>What do you need today?</h2>
        </div>
        <Slideshow :items="events"/>
    </div>
</template>

<script>
import Slideshow from "../General-children/Slideshow";

export default {
    name: "ResourcesIndex",
    components: { Slideshow },
    data () {
        return {
            events: [
            {name: "Available Academic Resources", id: 0, image: "temp.jpg"},
            {name: "Contact VP Academic/Other Academic Staff", id: 1, image: "temp.jpg"},
            {name: "Mental Health Resources", id: 2, image: "temp.jpg"},
            {name: "Career Resources", id: 3, image: "temp.jpg"},
            {name: "Industry Events and Opportunities", id: 4, image: "temp.jpg"}
        ]
        }
    }
}
</script>

<style lang="scss">
</style>