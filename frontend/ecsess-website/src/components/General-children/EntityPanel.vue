<template>
    <div class="entity-wrapper">
        <div class="entity-screen" v-if="entity.id % 2 == 0">
            <div class="entity-screen-cover-photo-even">
                <div class="img-container">
                    <img :src="require('../../assets/'+entity.photo)" alt="" class="large-img">
                </div>
                <h3 class="imgtext">{{entity.name}}</h3>
            </div>
            <div class="entity-screen-description-even">
                <div>
                    <p>
                        {{entity.blurb}}
                    </p>
                    <br><br>
                    <button>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        <div class="entity-screen" v-if="entity.id % 2 == 1">
            <div class="entity-screen-description-odd">
                <div>
                    <p>
                        {{entity.blurb}}
                    </p>
                    <br><br>
                    <button>
                        Learn More
                    </button>
                </div>
            </div>
            <div class="entity-screen-cover-photo-odd">
                <div class="img-container">
                    <img :src="require('../../assets/'+entity.photo)" alt="" class="large-img">
                </div>
                <h3 class="imgtext">{{entity.name}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EntityPanel",
    props: [ "entity" ],
}
</script>

<style lang="scss">
    @import "../styles/style-components/entityPanel.scss"
</style>