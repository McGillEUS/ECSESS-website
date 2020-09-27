<template>
    <div id="bottom-wrapper" class="bottom-wrapper">
        <div id="bottom-text" class="bottom-text">
            <p>@All Rights Reserved - Electrical, Computer & Software Engineering Students' Society</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Bottom",
    components: {}
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

    .bottom-wrapper {
        height: 2%;
        background-color: rgb(243, 243, 211);
        text-align: center;
        padding-top: 1%;
        padding-bottom: 1%;
    }

    .bottom-text {
        font-family: 'Montserrat';
        font-size: 80%;
    }
</style>