<template>
    <div id="sidebar">
        <div class="PC-sidebar" v-if="screenWidth >= 700">
            <div class="title">
                @<span>{{ this.$site.title }}</span>
            </div>
            <BarButton
                :svg="'home'"
                :name="'Home'"
                :activate="layout == 'Home'"
                :path="'/'"
                :screenWidth="screenWidth"
            />
            <BarButton
                :svg="'book'"
                :name="'Archive'"
                :activate="layout == 'Archive'"
                :path="'/archive'"
                :screenWidth="screenWidth"
            />
            <BarButton
                :svg="'user'"
                :name="'About'"
                :activate="layout == 'About'"
                :path="'/about/'"
                :screenWidth="screenWidth"
            />
        </div>
        <div class="Phone-sidebar" v-if="screenWidth < 700">
            <BarButton
                :svg="'home'"
                :name="'Home'"
                :activate="layout == 'Home'"
                :path="'/'"
                :screenWidth="screenWidth"
            />
            <BarButton
                :svg="'book'"
                :name="'Archive'"
                :activate="layout == 'Archive'"
                :path="'/archive'"
                :screenWidth="screenWidth"
            />
            <BarButton
                :svg="'user'"
                :name="'About'"
                :activate="layout == 'About'"
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
    props: ["screenWidth", "layout"],
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

.PC-sidebar {
    position fixed
    font-size 19px
    height 100vh
    border-right 1px solid border-line-color
}

.PC-sidebar {
    width 209px
    padding 30px 20px 10px

    .title {
        font-size 24px
        padding 10px 20px
        margin-bottom 20px
        font-weight bolder
        color color-blue
    }

    span {
        display none
    }

    @media screen and (min-width 1510px) {
        left calc(100% / 2 - 700px)

        span {
            display inline
        }
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

    @media screen and (max-width 710px) {
        display none
    }
}

.Phone-sidebar {
    position fixed
    z-index 100
    bottom 0
    width 100%
    height 30px
    display flex
    justify-content space-around
    align-items center
    padding 10px
    border-top 1px solid border-line-color
    background white

    @media screen and (min-width 710px) {
        display none
    }
}
</style>
