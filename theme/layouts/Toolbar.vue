<template>
    <div id="toolbar">toobar</div>
</template>

<script>
export default {
    name: "Toolbar",
    props: ["screenWidth"],
    data() {
        return {};
    },
};
</script>

<style scoped lang="stylus">
@import '../style/base-color'

#toolbar {
    position fixed
    height 100vh
    left 0px
}
</style>