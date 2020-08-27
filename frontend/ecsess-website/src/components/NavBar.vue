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
                            <li id="menu-entry" class="menu-entry" v-for="menuOption in menuOptions" :key="menuOption.name">{{menuOption.name}}</li>
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

    },
    mounted() {
        
    }
}
</script>

<style lang="scss">
</style>