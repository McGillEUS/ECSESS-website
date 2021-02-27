<template>
    <div id="element-view" class="element-view">
        <div id="main-image" class="mainimage">
            <img class="element-image" :src="require('../../assets/'+element.image)" v-if="element.image != ''"/>
            <h1 class="white-h1">{{element.name}}</h1>
        </div>
        <div id="element-body" class="element-body">
            <h3>
                {{element.blurb}}
            </h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ElementView",
    data () {
        return {
            element: {
                id: "",
                name: "",
                image: "",
                blurb: ""
            }
        }
    },
    beforeCreate () {
        axios.get(`/api/user/events/${this.$route.params.elementId}`).then((response) => {
            console.log(response)
            this.element.id = response.data.events.id;
            this.element.name = response.data.events.name;
            this.element.image = response.data.events.image;
            this.element.blurb = response.data.events.blurb;
        })
    },
    created () {
        window.scrollTo(0,0);
        window.addEventListener("scroll", function () {
            if (window.scrollY <= 200 && document.getElementById("element-body") !== null) {
                console.log(window.scrollY)
                document.getElementById("element-body").style.top = (100 - window.scrollY / 4) + 'vh';
            }
    });
    }
}
</script>

<style lang="scss">
    @import "../styles/style-components/elementView.scss";
</style>