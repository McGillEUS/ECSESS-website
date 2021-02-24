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
            {name: "Social Events", id: 0, image: "temp.jpg", subElements: [{name: "First Year Welcome Party", image: "temp.jpg"}, {name: "Coffee House", image: "temp.jpg"}, {name: "Pancake Breakfast", image: "temp.jpg"}, {name: "Blues Pub", image: "temp.jpg"}, {name: "Wine & Cheese", image: "temp.jpg"}, {name: "ECSESS Banquet", image: "temp.jpg"}, {name: "Apartment Crawls", image: "temp.jpg"}, {name: "Year Group Events", image: "temp.jpg"}]},
            {name: "Academic Events", id: 1, image: "temp.jpg", subElements: [{name: "Professor Speaker Series", image: "temp.jpg"}, {name: "Academic Forum", image: "temp.jpg"}, {name: 'DPM Social', image: "temp.jpg"}]},
            {name: "Networking Events", id: 2, image: "temp.jpg", subElements: [{name: "ECSESSCapade", image: "temp.jpg"}, {name: "Montreal Company Crawl", image: "temp.jpg"}, {name: 'Speed Networking', image: "temp.jpg"}]},
            {name: "Technical Events", id: 3, image: "temp.jpg", subElements: [{name: "Code.Jam()", image: "temp.jpg"}, {name: "Technical Workshops", image: "temp.jpg"}]},
            {name: "De-stress Events", id: 4, image: "temp.jpg", subElements: [{name: "De-Stress with ECSESS", image: "temp.jpg"}]}
        ]
        }
    }
}
</script>

<style lang="scss">
</style>