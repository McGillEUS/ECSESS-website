<template>
    <div id="home-page" class="home-page">

        <MainImage id="main-image" class="main-image"/>
        <AboutUs id="about-us" class="about-us"/>
    </div>
</template>

<script>
import AboutUs from './AboutUs'
import MainImage from './MainImage'

export default {
    name: "Home",
    components: {AboutUs, MainImage},
    methods: {
    },
    created () {
        window.addEventListener("scroll", function () {
            console.log(0.01*window.scrollY)
            document.getElementById("main-image").style.opacity = 1 - (0.005*window.scrollY)
        })
        
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    .home-page {
        background-color: lightyellow;
        width: 100%;
        height: 100%;
    }

    .firstscreen {
        position: fixed;
        width: 100%;
        height: 10%;
    }

    .main-image {
        width: 100%;
        height: 100vh;
        text-align: center;
        z-index: -2;
        position: fixed;
        background-color: lightyellow;
    }

    .main-image.parallax {

    }

    h1 {
        all: unset;
        line-height: 100vh;
        width: 100%;
        font-family: 'Montserrat', sans-serif;
        font-size: 200%;
        font-weight: 500;
        color: darkgreen;
        -moz-user-select: none;
        -webkit-user-select: none; 
        user-select: none;   
    }

    .about-us {
        position: absolute;
        width: 100%;
        top: 100vh;
        z-index: -1;
        height: 87%;
        background-color: lightyellow;
    }

    .about-us.move {
        
    }


</style>