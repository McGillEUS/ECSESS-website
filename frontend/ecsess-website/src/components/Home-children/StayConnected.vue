<template>
    <div id="stay-connected" class="stay-connected">
        <div id="subtitle" class="subtitle">
            <h2>Stay Connected With Us</h2>
        </div>
        <div id="section-text" class="section-text">
            <div id="social-media-icons" class="social-media-icons">
                <div id="social-row" class="social-row">
                    <div id="social-column" class="social-column">
                        <div id="social-panel-button-1" class="social-panel-button">
                        </div>
                    </div>
                    <div id="social-column" class="social-column">
                        <div id="social-panel-button-2" class="social-panel-button">
                        </div>
                    </div>
                </div>
                <div id="social-row" class="social-row">
                    <div id="social-column" class="social-column">
                        <div id="social-panel-button-3" class="social-panel-button">
                        </div>
                    </div>
                    <div id="social-column" class="social-column">
                        <div id="social-panel-button-4" class="social-panel-button">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StayConnected",
    component: {}
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

    .social-media-icons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 3em;
        padding-bottom: 3em;
        padding-left: 3em;
        padding-right: 3em;
        overflow: hidden;
    }

    .social-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .social-column {
        margin: 5%;
    }

    .social-panel-button {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: all 0.3s;
        height: 6em;
        width: 6em;
    }

    .social-panel-button:hover {
        transform: scale(1.1);
    }

    #social-panel-button-1 {
        background-image: url('../../assets/facebook.png');
    }

    #social-panel-button-2 {
        background-image: url('../../assets/instagram.png');
    }
    
    #social-panel-button-3 {
        background-image: url('../../assets/linkedin.png');
    }

    #social-panel-button-4 {
        background-image: url('../../assets/email.png');
    }

</style>