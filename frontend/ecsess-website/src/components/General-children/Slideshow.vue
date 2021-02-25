<template>
    <div class="slideshow-display">
        <li class="slideshow" v-for="item in items" :key="item.name">
            <div class="slideshow-main-panel-wrapper" @click="goToItem(item)">
                <div class="panel-button" :id="'panel-' + item.id" >
                    <h3>
                        {{item.name}}
                    </h3>
                </div>
                <img class="panel-image" v-bind:src="require('../../assets/'+item.image)"/>
            </div>
            <div :id="'slideshow-panel-subelement-' + item.name" class="slideshow-panel-subelements" style="opacity:0.0" v-if="item.subElements !== undefined">
                <div class="subElement" v-for="subElement in item.subElements" :key="subElement.name" @click="goToItem(subElement)">
                    <div class="subpanel-button" :id="'panel-' + subElement.name" >
                        <h4>
                            {{subElement.name}}
                        </h4>
                    </div>
                    <div class="subpanel-image-wrapper">
                        <img class="subpanel-image" v-bind:src="require('../../assets/'+subElement.image)"/>
                    </div>
                </div>
            </div>
        </li>
    </div> 
</template>

<script>
export default {
    name: "Slideshow",
    props: [ 'items' ],
    methods: {
        goToItem: function (item) {
            
            
            if (item.subElements === undefined) {
                //go to item if there are no sub-elements
                this.$router.push({ path: `/element/${item.id}` })

            } else {
                //open/close subelements if there are some
                let maxHeight = item.subElements.length*40;
                if (document.getElementById("slideshow-panel-subelement-" + item.name).style.opacity === "0") {
                    document.getElementById("slideshow-panel-subelement-" + item.name).style.display = "flex";

                    let x = parseInt(document.getElementById("slideshow-panel-subelement-" + item.name).offsetHeight);
                    while (x < maxHeight) {
                        document.getElementById("slideshow-panel-subelement-" + item.name).style.height = x + "px";
                        x++;
                    }
                    setTimeout(function(){document.getElementById("slideshow-panel-subelement-" + item.name).style.opacity = "1.0";}, 30);
                } else {
                    document.getElementById("slideshow-panel-subelement-" + item.name).style.opacity = "0";
                    let x = parseInt(document.getElementById("slideshow-panel-subelement-" + item.name).clientHeight);
                    while (x >= 0) {
                        document.getElementById("slideshow-panel-subelement-" + item.name).style.height = x + "px";
                        x--;
                    }
                    setTimeout(function(){document.getElementById("slideshow-panel-subelement-" + item.name).style.display = "none";}, 300);
                }
            }
        }
    }
}
</script>

<style lang="scss">
    @import "../styles/style-components/slideshow.scss";
</style>