<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Sections</h2>
        </div>
        <Slideshow :items="councilItems"/>
    </div>
</template>

<script>
import Slideshow from "../General-children/Slideshow";

export default {
    name: "CouncilIndex",
    components: { Slideshow },
    data () {
        return {
            councilItems: [
            {name: "Council Members", id: 0, image: "council-members.jpg"},
            {name: "ECSESS Public Documents", id: 1, image: "documents.jpg"},
            {name: "Join the Council", id: 2, image: "ECSESS_Lounge.jpg"}
        ]
        }
    }
}
</script>

<style lang="scss">
</style>