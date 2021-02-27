<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>What do you need today?</h2>
        </div>
        <Slideshow :items="resourceTypes" :navStyle="'expand'"/>
    </div>
</template>

<script>
import Slideshow from "../General-children/Slideshow";

export default {
    name: "ResourcesIndex",
    components: { Slideshow },
    data () {
        return {
            resourceTypes: [
            {name: "Available Academic Resources", id: 0, image: "temp.jpg", href: "academic-resources"},
            {name: "Contact VP Academic/Other Academic Staff", id: 1, image: "temp.jpg", href: "contact-academic"},
            {name: "Mental Health Resources", id: 2, image: "temp.jpg", href: "mental-health-resources"},
            {name: "Career Resources", id: 3, image: "temp.jpg", href: "career-resources"},
            {name: "Industry Events and Opportunities", id: 4, image: "temp.jpg", href: "industry-opportunities"}
        ]
        }
    }
}
</script>

<style lang="scss">
</style>