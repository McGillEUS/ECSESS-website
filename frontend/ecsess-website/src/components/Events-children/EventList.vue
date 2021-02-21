<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>ECSESS Events you NEED to see!</h2>
        </div>
        <div v-for="event in events" :key="event.name">
            <!-- TODO add the text/pic and hover variations after -->
            <EntityPanel :entity="event"/>
        </div>
    </div>
</template>

<script>
import EntityPanel from "../General-children/EntityPanel";

export default {
    name: "EventList",
    components: { EntityPanel },
    data() {
        return {events: []}
    },
    methods: {
    
    },
    mounted() {
        this.events = [
            {name: "ECSESS Banquet", semester: "Fall & Winter", photo: "temp.jpg", blurb: "no blurb found", secondPic: "none", id: 0},
            {name: "Academic Forum", semester: "idk", photo: "semiconductors.jpg", blurb: "no blurb found", secondPic: "none", id: 1},
            {name: "ECSEscapade", semester: "idk", photo: "semiconductors.jpg", blurb: "no blurb found", secondPic: "none", id: 2},
            {name: "Blues Pub", semester: "Every Friday", photo: "temp.jpg", blurb: "no blurb found", secondPic: "none", id: 3},
            {name: "Coffee House", semester: "Sometimes", photo: "temp.jpg", blurb: "no blurb found", secondPic: "none", id: 4}
        ]
    }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

</style>