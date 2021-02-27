<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Recent News</h2>
            <h4 class="salmon-h4">(Drag sideways to scroll)</h4>
        </div>
        <carousel>
            <slide v-for="(slide, i) in slides" :key="i" class="carousel-slide">
                <img :src="require('../../assets/'+slide.image)" alt="" class="carousel-img">
                <h3 class="carousel-text">{{slide.name}}</h3>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios';

export default {
    name: "Featured",
    components: { Carousel, Slide },
    data: () => (
        {slides: []}
    ),
    methods: {
    
    },
    created () {
        axios.get("/api/user/home/news").then((news) => {
            this.slides = news.data.news;
        })
    }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

</style>