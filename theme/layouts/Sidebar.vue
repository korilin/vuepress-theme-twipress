<template>
    <div id="sidebar">
        <div class="PC-siderbar" v-if="screenWidth >= 700">
            <div class="title">
                @<template v-if="screenWidth >= 1500">{{
                    this.$site.title
                }}</template>
            </div>
            <BarButton
                :svg="'home'"
                :name="'Home'"
                :activate="this.$route.path == '/'"
                :path="'/'"
                :screenWidth="screenWidth"
            />
            <BarButton
                :svg="'book'"
                :name="'Archive'"
                :activate="this.$route.path == '/archive'"
                :path="'/archive'"
                :screenWidth="screenWidth"
            />
            <BarButton
                :svg="'user'"
                :name="'About'"
                :activate="this.$route.path == '/about'"
                :path="'/about'"
                :screenWidth="screenWidth"
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
#sidebar {
}

.PC-siderbar, .phone-siderbar {
    position fixed
    font-size 19px
    height 100vh
    border-right 1px solid border-line-color
}

.PC-siderbar {
    width 209px
    padding 30px 20px 10px

    .title {
        font-size 24px
        padding 10px 20px
        margin-bottom 20px
        font-weight bolder
        color color-blue
    }

    @media screen and (min-width 1510px) {
        left calc(100% / 2 - 700px)
    }

    @media (min-width 1310px) and (max-width 1510px) {
        left calc(100% / 2 - 650px)
    }

    @media (min-width 710px) and (max-width 1510px) {
        width 79px
        padding 30px 10px 10px

        .title {
            text-align center
        }
    }
}
</style>
