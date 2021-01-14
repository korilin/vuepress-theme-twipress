<template>
    <div id="toolbar" v-if="screenWidth >= 1000">
        <div class="search">
            <SearchBox />
        </div>
        <div class="post-sort">
            <div class="Title">The article sorted</div>
            <div>
                Time: <button @click="postSort(0)">1</button
                ><button @click="postSort(1)">2</button>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBox from "@SearchBox";
export default {
    name: "Toolbar",
    props: ["screenWidth"],
    components: { SearchBox },
    data() {
        return {};
    },
    methods: {
        postSort(sort) {
            this.$themeConfig.post_sort = sort;
        },
    },
};
</script>

<style scoped lang="stylus">
#toolbar {
    position fixed
    height 100vh
    width 299px
    text-align center
    padding-top 50px
    left calc(100% / 2 + 450px)
    top 0
    border-left 1px solid border-line-color

    @media (min-width 1310px) and (max-width 1510px) {
        left calc(100% / 2 + 350px)
    }

    @media (min-width 1010px) and (max-width 1310px) {
        left calc(100% - 300px)
    }
}
</style>