<template>
    <div class="slideshow-display">
        <li class="slideshow" v-for="item in items" :key="item.name">
            <div class="panel-button" :id="'panel-' + item.id">
                <h3>
                    {{item.name}}
                </h3>
            </div>
            <img class="panel-image" v-bind:src="require('../../assets/'+item.image)"/>
        </li>
    </div> 
</template>

<script>
export default {
    name: "Slideshow",
    props: [ 'items' ]
}
</script>

<style lang="scss">
    @import "../styles/style-components/slideshow.scss";
</style>