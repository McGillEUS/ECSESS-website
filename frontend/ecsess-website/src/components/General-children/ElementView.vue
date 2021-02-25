<template>
    <div id="element-view" class="element-view">
        <div class="element-cover-photo-wrapper">
            <img class="element-image" v-bind:src="require('../../assets/'+element.image)"/>
        </div>
        <div id="subtitle" class="subtitle">
            <h2>{{element.name}}</h2>
        </div>
        <div class="element-body">
            <h3>
                {{element.blurb}}
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "ElementView",
    props: [ "element" ]
}
</script>

<style lang="scss">
    @import "../styles/style-components/elementView.scss"
</style>