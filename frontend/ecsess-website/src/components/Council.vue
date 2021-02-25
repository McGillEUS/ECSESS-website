<template>
    <div id="council" class="council">
        <CouncilMainImage id="main-image"/>
        <div id="council-page-body" class="page-body">
            <CouncilIndex/>
            <Members id="members" class="members"/>
        </div>
    </div>
</template>

<script>
import Members from './Council-children/Members'
import CouncilMainImage from './Council-children/CouncilMainImage'
import CouncilIndex from './Council-children/CouncilIndex'

export default {
    name: "Council",
    components: {Members, CouncilMainImage, CouncilIndex},

}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');    
    @import "./styles/Council.scss";
</style>