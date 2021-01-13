<template>
    <div id="sidebar">
        <div class="PC-siderbar" v-if="screenWidth >= 1024">
            <div class="title">
                @<template>{{ this.$site.title }}</template>
            </div>
            <BarButton
                :svg="'home'"
                :name="'Home'"
                :activate="this.$route.path == '/'"
                :path="'/'"
            />
            <BarButton
                :svg="'book'"
                :name="'Archive'"
                :activate="this.$route.path == '/archive'"
                :path="'/archive'"
            />
            <BarButton
                :svg="'user'"
                :name="'About'"
                :activate="this.$route.path == '/about'"
                :path="'/about'"
            />
        </div>
    </div>
</template>

<script>
import BarButton from "../components/BarButton";
export default {
    name: "Sidebar",
    props: ["screenWidth"],
    components: {
        BarButton,
    },
    data() {
        return {};
    },
};
</script>

<style scoped lang="stylus">
@import '../style/base-color'

#sidebar {
    position fixed
    font-size 19px
}

.PC-siderbar, .phone-siderbar {
    height 100vh
    border-right 1px solid border-line-color
}

.PC-siderbar {
    width 240px
    padding 30px 20px 10px

    .title {
        font-size 24px
        padding 10px 20px
        margin-bottom 20px
        font-weight bolder
        color color-blue
    }
}
</style>
