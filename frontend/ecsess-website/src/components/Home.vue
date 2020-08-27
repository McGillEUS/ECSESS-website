<template>
    <div id="home-page" class="home-page">
        <div id="firstscreen" class="firstscreen">
            <NavBar v-bind:menuOptions="menuOptions"/>
        </div>
        <MainImage />
        <AboutUs />
    </div>
</template>

<script>
import AboutUs from './AboutUs'
import NavBar from './NavBar'
import MainImage from './MainImage'

export default {
    name: "Home",
    components: {AboutUs, NavBar, MainImage},
    data() {
        return {menuOptions: this.menuOptions}
    },
    methods: {

    },
    created () {
        this.menuOptions = [
            {name: "Home", route: "/"}, 
            {name: "Council", route: "/council"},
            {name: "Events", route: "/events"},
            {name: "Extracurriculars", route: "/extracurriculars"},
            {name: "Opportunities", route: "/opportunities"},
            {name: "Photos", route: "/photos"},
            {name: "Bursaries", route: "/bursaries"}
        ]
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

    .header-wrap {
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 8em;
        width: 100%;
    }

    .logo-top-left {
        width: 20%;
        justify-content: left;
    }

    .menubar-top-right {
        width: 80%;
        float: right;
        justify-content: right;
    }

    .ecsess-logo {
        height: 4em;
        width: auto;
        margin-left: 20%;
    }

    .menu-list {
        list-style: none;
        text-align: right;
        padding-right: 5%;
    }

    .menu-entry {
        display: inline-block;
        font-family: 'Montserrat', sans-serif;
        font-size: 120%;
        font-weight: 300;
        color: darkgreen;
        padding: 0.8em;
        padding-left: 1em;
        padding-right: 1em;
        transition: 0.3s;
        background-size: 100% 200%;
        background-image: linear-gradient(to bottom, transparent 50%, rgb(205, 241, 188) 50%);
    }

    .menu-entry:hover {
        background-position: 0% 100%;
    }

    .mainimage {
        width: 100%;
        height: 100vh;
        text-align: center;
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


</style>