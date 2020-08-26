<template>
    <div id="home-page">
        <header id="header" class="header" role="banner">
            <div id="header-wrap" class="header-wrap">
                <div id="logo-top-left" class="logo-top-left">
                    <img src="../assets/Ecsess-Logo3.png" id="ecsess-logo" class="ecsess-logo"/>
                </div>
                <div id="menubar-top-right" class="menubar-top-right">
                    <div id="menu-displayed" class="menu-displayed">
                        <ul id="menu-list">
                            <li id="menu-entry" v-for="menuOption in this.menuOptions" :key="menuOption.name">
                                {{menuOption.name}}
                            </li>
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
    name: "Home",
    components: {},
    data() {
        return {menuOptions: this.menuOptions}
    },
    methods: {

    },
    mounted() {
        this.menuOptions = [
            {name: "Home", route: "/"}, 
            {name: "Council", route: "/council"}
        ]
    }
}
</script>

<style lang="scss">

    header {
    }

    .header-wrap {
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 8em;
        width: 100vw;
    }

    .logo-top-left {
        width: 50%;
        justify-content: left;
    }

    .menubar-top-right {
        width: 50%;
        float: right;
        justify-content: right;
    }

    .ecsess-logo {
        height: 4em;
        width: auto;
        margin-left: 10%;
    }
</style>