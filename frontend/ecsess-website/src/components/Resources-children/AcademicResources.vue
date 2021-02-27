<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Academic Resources</h2>
        </div>
        <div id="academic-resources" v-for="acadResource in acadResources" :key="acadResource.name">
            <EntityPanel :entity="acadResource"/>
        </div>
    </div>
</template>

<script>
import EntityPanel from "../General-children/EntityPanel"

export default {
    name: "AcademicResources",
    components: { EntityPanel },
    data() {
        return {
            acadResources: [
                {name: "Academic Forum", semester: "idk", image: "temp.jpg", blurb: "no blurb found", second_image: "none", id: 0},
            ]
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
</style>