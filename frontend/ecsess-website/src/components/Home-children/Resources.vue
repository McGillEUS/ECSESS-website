<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Resources for you</h2>
        </div>
        <div id="triple-column-display" class="triple-column-display">
            <li id="resource-panel-1" class="resource-panel">
                <div id="resource-panel-button-1" class="resource-panel-button">

                </div>                    
                <h3 id="featuretext" class="featuretext">
                    ECSESS Initiative Fund
                </h3>
            </li>
            <li id="resource-panel-2" class="resource-panel">
                <div id="resource-panel-button-2" class="resource-panel-button">
                    <h3>
                        Code Jam!
                    </h3>
                </div>
            </li>
            <li id="resource-panel-3" class="resource-panel">
                <div id="resource-panel-button-3" class="resource-panel-button">
                    <h3>
                        ___ design teams and clubs.
                    </h3>
                </div>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "Resources",
    components: {},
    methods: {

    }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

    .triple-column-display {
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

    .resource-panel {
        all: unset;
        width: 33%;
        text-align: center;
        padding: 0;
        color: white;
    }

    .resource-panel-button {
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
        -webkit-filter: brightness(50%);
        -moz-filter: brightness(50%);
        -o-filter: brightness(50%);
        -ms-filter: brightness(50%);
        filter: brightness(50%);
    }

    .resource-panel-button:hover {
        transform: scale(1.1);
    }

    #resource-panel-button-1 {
        background-image: url('../../assets/funds-featured.jpg');
    }

    #resource-panel-button-2 {
        background-image: url('../../assets/semiconductors.jpg');
    }
    
    #resource-panel-button-3 {
        background-image: url('../../assets/semiconductors.jpg');
    }

    h3 {
        font-family: 'Montserrat';
        font-size: 120%;
        font-weight: 600;
    }

    .featuretext {
        position: absolute;
    }

</style>