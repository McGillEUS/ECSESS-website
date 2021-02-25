<template>
    <div id="resources" class="resources">
        <ResourcesMainImage id="main-image"/>
        <div id="resources-page-body" class="page-body">
            <ResourcesIndex/>
            <AcademicResources id="academic-resources" class="academic-resources"/>
        </div>
    </div>
</template>

<script>
import ResourcesMainImage from "./Resources-children/ResourcesMainImage.vue"
import AcademicResources from "./Resources-children/AcademicResources"
import ResourcesIndex from "./Resources-children/ResourcesIndex"

export default {
    name: "Resources",
    components: {ResourcesMainImage, AcademicResources, ResourcesIndex}
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'); 
    @import "./styles/Resources.scss";
</style>