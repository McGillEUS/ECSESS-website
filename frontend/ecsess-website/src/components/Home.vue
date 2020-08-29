<template>
    <div id="home-page" class="home-page">
        <MainImage id="main-image" class="main-image"/>
        <AboutUs id="about-us" class="about-us"/>
        <StayConnected id="stay-connected" class="stay-connected"/>
    </div>
</template>

<script>
import AboutUs from './Home-children/AboutUs'
import MainImage from './Home-children/MainImage'
import StayConnected from './Home-children/StayConnected'

export default {
    name: "Home",
    components: {AboutUs, MainImage, StayConnected},
    methods: {
    },
    created () {
        window.addEventListener("scroll", function () {
            console.log(0.005*window.scrollY)
            document.getElementById("main-image").style.opacity = 1 - (0.005*window.scrollY)
            //document.getElementById("about-us").style.opacity = 4 - (0.005*window.scrollY)
            //document.getElementById("stay-connected").style.opacity = 7 - (0.005*window.scrollY)
            
            if (this.window.scrollY >= document.getElementById("about-us").offsetTop) document.getElementById("about-us").classList.add("fixplace")
             document.getElementById("about-us").classList.remove("fixplace")

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

    .about-us.fixplace {
        position: fixed;
        top: 0;
    }

    .stay-connected {
        top: 200vh;
        position: absolute;
        width: 100%;
        z-index: 0;
        height: 87%;
    }

    .stay-connected.fixplace {
        position: fixed;
        top: 17%;
    }


</style>