<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Index of Events</h2>
        </div>
        <Slideshow :items="eventTypes" :navStyle="'route'"/>
    </div>
</template>

<script>
import Slideshow from "../General-children/Slideshow";
import axios from 'axios';

export default {
    name: "EventIndex",
    components: { Slideshow },
    data () {
        return {
            eventTypes: [
        ]
        }
    },
    created () {
        console.log("yee")
        axios.get("/api/user/events/categories/get").then((categories) => {
            const categoriesData = categories.data.categories;
            for (let i = 0; i < categoriesData.length; i++) {
                const category = categoriesData[i];
                console.log(category);

                axios.get(`/api/user/events/bycategory/${category.id}`).then((events) => {
                    const eventSubElements = events.data.events.map(event => {return {name: event.name, id: event.id, image: event.image, blurb: event.blurb} })
                    console.log(eventSubElements);
                    const eventBunch = {name: category.name, id: category.id, image: category.image, subElements: eventSubElements};
                    this.eventTypes.push(eventBunch);
                })
            }
        })
    }
}
</script>

<style lang="scss">
</style>