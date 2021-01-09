<template>
    <div id="council" class="council">
        <CouncilMainImage id="main-image" class="main-image"/>
        <div id="council-page-after-main-image" class="council-page-after-main-image">
            <Members id="members" class="members"/>
        </div>
    </div>
</template>

<script>
import Members from './Council-children/Members'
import CouncilMainImage from './Council-children/CouncilMainImage'

export default {
    name: "Council",
    components: {Members, CouncilMainImage},

}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');    

    .council-page-after-main-image {
        position: absolute;
        width: 100%;
        z-index: -1;
        top: 100vh;
    }

    .main-image {
        width: 100%;
        height: 100vh;
        padding-top: 50vh;
        padding-bottom: 50vh;
        text-align: center;
        z-index: -2;
        position: fixed;
        background-color: lightyellow;
    }

    .members {
        z-index: 0;
        background-color: lightyellow;
    }

    h1 {
        all: unset;
        width: 100%;
        font-family: "Montserrat", sans-serif;
        font-size: 200%;
        font-weight: 500;
        color: salmon;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        }

</style>