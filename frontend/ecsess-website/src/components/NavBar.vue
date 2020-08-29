<template>
    <div id="navbar" class="navbar">
        <header id="header" class="header" role="banner">
            <div id="header-wrap" class="header-wrap">
                <div id="logo-top-left" class="logo-top-left">
                    <img src="../assets/Ecsess-Logo3.png" id="ecsess-logo" class="ecsess-logo"/>
                </div>
                <div id="menubar-top-right" class="menubar-top-right">
                    <div id="menu-displayed" class="menu-displayed">
                        <ul id="menu-list" class="menu-list">
                            <li id="menu-entry" class="menu-entry" v-for="menuOption in menuOptions" :key="menuOption.name" v-on:click="handleNavClick(menuOption.route)">{{menuOption.name}}</li>
                        </ul>
                    </div>
                    <div id="menu-button" class="menu-button">
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    components: {},
    props: {
        menuOptions: Array
    },
    methods: {
        handleNavClick: function (route) {
            this.$emit('handleNavClick', {route: route})
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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

    .navbar {
        z-index: 5;
    }
</style>