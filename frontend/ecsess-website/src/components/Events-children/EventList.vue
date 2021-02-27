<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Browse ECSESS Events</h2>
        </div>
        <div v-for="event in events" :key="event.name">
            <!-- TODO add the text/pic and hover variations after -->
            <EntityPanel :entity="event"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import EntityPanel from "../General-children/EntityPanel";

export default {
    name: "EventList",
    components: { EntityPanel },
    data() {
        return {events: []}
    },
    methods: {
    
    },
    created () {
        axios.get('/api/user/events').then((events) => {
            this.events = events.data.events;
        })
    }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

</style>