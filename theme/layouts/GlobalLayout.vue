<template>
    <div class="theme-container">
        <Sidebar
            :screenWidth="screenWidth"
            :layout="layout"
            v-if="layout != 'NoFound'"
        />

        <div class="main">
            <transition name="change" mode="out-in">
                <template v-if="layout != 'Post' && layout != 'NoFound'">
                    <Layout :layout="layout" />
                </template>
                <template v-else-if="layout != 'NoFound'">
                    <Post />
                </template>
                <template v-else>
                    <NoFound />
                </template>
            </transition>
        </div>

        <Toolbar :screenWidth="screenWidth" />
    </div>
</template>

<script>
import Vue from "vue";
import { setGlobalInfo } from "@app/util";

import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Layout from "./Layout";
import NoFound from "./404";
import Post from "../components/Post";

export default {
    name: "GlobalLayout",
    components: {
        Sidebar,
        Toolbar,
        Post,
        Layout,
        NoFound,
        Toolbar,
    },
    created() {
        let route = this.$route.path;
        if (route == "/") this.layout = "Home";
        else if (route == "/archive") this.layout = "Archive";
        else if (route == "/about/" || route == "/about") this.layout = "About";
        else if (this.$page.path) this.layout = "Post";
        else this.layout = "NoFound";
    },
    watch: {
        $route() {
            let route = this.$route.path;
            if (route == "/") this.layout = "Home";
            else if (route == "/archive") this.layout = "Archive";
            else if (route == "/about/" || route == "/about")
                this.layout = "About";
            else if (this.$page.path) this.layout = "Post";
            else this.layout = "NoFound";
        },
    },
    mounted() {
        var that = this;
        window.onresize = () => {
            that.screenWidth = document.body.clientWidth;
        };
    },
    data() {
        return {
            screenWidth: document.body.clientWidth,
            layout: "Home",
        };
    },
    methods: {},
};
</script>

<style lang="stylus">
body {
    margin 0
    color default-font-color
    font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
    overflow-y scroll

    a {
        text-decoration none
    }
}

.theme-container {
    position relative
}

.main {
    width 900px
    min-height 100vh
    position relative

    @media screen and (min-width 1510px) {
        left calc(100% / 2 - 450px)
    }

    @media (min-width 1310px) and (max-width 1510px) {
        left calc(100% / 2 - 550px)
    }

    @media (min-width 1010px) and (max-width 1310px) {
        left 100px
        width calc(100% - 400px)
    }

    @media (min-width 710px) and (max-width 1010px) {
        left 100px
        width calc(100% - 100px)
    }

    @media screen and (max-width 710px) {
        width 100%
        margin-bottom 100px
    }
}


</style>