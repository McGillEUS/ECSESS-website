<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Index of Events</h2>
        </div>
        <Slideshow :items="eventTypes"/>
    </div>
</template>

<script>
import Slideshow from "../General-children/Slideshow";

export default {
    name: "EventIndex",
    components: { Slideshow },
    data () {
        return {
            eventTypes: [
            {name: "Social Events", id: 0, image: "temp.jpg", subElements: [{name: "First Year Welcome Party", image: "temp.jpg"}, {name: "Coffee House", image: "temp.jpg"}]},
            {name: "Academic Events", id: 1, image: "temp.jpg", subElements: [{name: "Fi", image: "temp.jpg"}, {name: "Cof", image: "temp.jpg"}, {name: 'ee', image: "temp.jpg"}, {name: 'eee', image: "temp.jpg"}]},
            {name: "Networking Events", id: 2, image: "temp.jpg"},
            {name: "Technical Events", id: 3, image: "temp.jpg"},
            {name: "De-stress Events", id: 4, image: "temp.jpg"}
        ]
        }
    }
}
</script>

<style lang="scss">
</style>