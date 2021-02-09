<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>What do you need today?</h2>
        </div>
        <div id="slideshow-display" class="slideshow-display">
            <li id="resource-panel-1-res-page" class="resource-panel-res-page" v-for="event in events" :key="event">
                <button id="resource-panel-button-1-res-page" class="resource-panel-button-res-page">
                    <h3>
                        {{event.name}}
                    </h3>
                </button>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "ResourcesIndex",
    data () {
        return {
            events: [
            {name: "Available Academic Resources"},
            {name: "Contact VP Academic/Other Academic Staff"},
            {name: "Mental Health Resources"},
            {name: "Career Resources"},
            {name: "Industry Events and Opportunities"}
        ]
        }
    }
}
</script>

<style lang="scss">

    .slideshow-display {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 3em;
        padding-bottom: 3em;
        padding-left: 20em;
        padding-right: 20em;
        overflow: hidden;
    }

    .resource-panel-res-page {
        all: unset;
        width: 33%;
        text-align: center;
        padding: 0;
        color: white;
    }

    .resource-panel-button-res-page {
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

        .resource-panel-button-res-page:hover {
        transform: scale(1.1);
    }
</style>