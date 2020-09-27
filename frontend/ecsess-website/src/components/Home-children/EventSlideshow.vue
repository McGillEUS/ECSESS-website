<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Events</h2>
        </div>
        <div id="slideshow-display" class="slideshow-display">
            <li id="event-panel-1" class="event-panel" v-for="event in events" :key="event">
                <div id="event-panel-button-1" class="event-panel-button">
                    <h3>
                        {{event.name}}
                    </h3>
                </div>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "EventSlideshow",
    components: {},
    data() {
        return {events: []}
    },
    methods: {
    
    },
    mounted() {
        this.events = [
            {name: "ECSESS Banquet", semester: "Fall & Winter"},
            {name: "Academic Forum", semester: "idk"},
            {name: "ECSEscapade", semester: "idk"},
            {name: "Blues Pub", semester: "Every Friday"},
            {name: "Coffee House", semester: "Sometimes"}
        ]
    }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

    .slideshow-display {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 3em;
        padding-bottom: 3em;
        padding-left: 3em;
        padding-right: 3em;
        overflow: hidden;
    }

    .event-panel {
        all: unset;
        width: 33%;
        text-align: center;
        padding: 0;
        color: white;
    }

    .event-panel-button {
        margin-left: 10%;
        margin-right: 10%;
        padding-top: 20%;
        padding-bottom: 20%;
        padding-left: 10%;
        padding-right: 10%;
        border-radius: 0.5em;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: all 0.3s;

    }

    .event-panel-button:hover {
        transform: scale(1.1);
    }

    #event-panel-button-1 {
        background-image: url('../../assets/semiconductors.jpg');
    }

    #event-panel-button-2 {
        background-image: url('../../assets/semiconductors.jpg');
    }
    
    #event-panel-button-3 {
        background-image: url('../../assets/semiconductors.jpg');
    }

</style>