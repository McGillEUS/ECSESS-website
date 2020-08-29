<template>
    <div id="about-us-section">
        <div id="subtitle" class="subtitle">
            <h2>Who we are.</h2>
        </div>
        <div id="section-text" class="section-text">
            <div id="textbox" class="textbox">
                <p>We are the Electrical, Computer and Software Engineering Students' Society at McGill University.</p>
            </div>
            <div id="textimage" class="textbox">
                <img id="council20192020" class="council20192020" src="../../assets/council2019-2020.jpg" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutUs",
    components: {},
    methods: {

    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

    .about-us-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .subtitle {
        text-align: center;
        padding-top: 10%;
        padding-bottom: 4%;
        background-color: white;
    }

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 160%;
        font-weight: 400;
        color: darkgreen;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 100%;
        font-weight: 300;
        color: darkgreen;
    }

    .section-text {
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

    .textbox {
        width: 50%;
        text-align: center;
        padding-left: 1em;
        padding-right: 1em;
    }

    .textimage {
        width: 50%;
        padding-left: 1em;
        padding-right: 1em;
    }

    .council20192020 {
        height: 20em;
    }

</style>