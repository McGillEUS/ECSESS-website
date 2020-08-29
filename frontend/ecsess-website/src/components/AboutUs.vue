<template>
    <div id="about-us-section">
        <div id="subtitle" class="subtitle">
            <h2>Who we are.</h2>
        </div>
        <div id="section-text" class="section-text">
            <p>Text goes here.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutUs",
    components: {},
    data() {

    },
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
    }

    .subtitle {
        text-align: center;
        padding-top: 4%;
        padding-bottom: 4%;
        background-color: white;
    }

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 160%;
        font-weight: 400;
        color: darkgreen;
    }

    .section-text {
        
    }

</style>