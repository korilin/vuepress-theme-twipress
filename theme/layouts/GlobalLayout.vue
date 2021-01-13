<template>
    <div class="theme-container">
        <Sidebar :screenWidth="screenWidth" v-if="page != 'NoFound'" />

        <div class="main">
            <transition name="change" mode="out-in">
                <template v-if="page != 'Post' && page != 'NoFound'">
                    <Layout :page="page" />
                </template>
                <template v-else-if="page != 'NoFound'">
                    <Post />
                </template>
                <template v-else>
                    <NoFound />
                </template>
            </transition>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { setGlobalInfo } from "@app/util";

import Sidebar from "./Sidebar";
import Layout from "./Layout";
import NoFound from "./404";
import Post from "../components/Post";

export default {
    name: "GlobalLayout",
    components: {
        Sidebar,
        Post,
        Layout,
        NoFound,
    },
    created() {
        let route = this.$route.path;
        if (route == "/") this.page = "Home";
        else if (route == "/archive") this.page = "Archive";
        else if (route == "/about/" || route == "/about") this.page = "About";
        else if (this.$page.path) this.page = "Post";
        else this.page = "NoFound";
    },
    computed: {
        layout() {
            const layout = this.getLayout();
            setGlobalInfo("layout", layout);
            return Vue.component(layout);
        },
    },
    watch: {
        $route() {
            let route = this.$route.path;
            if (route == "/") this.page = "Home";
            else if (route == "/archive") this.page = "Archive";
            else if (route == "/about/" || route == "/about")
                this.page = "About";
            else if (this.$page.path) this.page = "Post";
            else this.page = "NoFound";
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
            page: "Home",
        };
    },
    methods: {
        getLayout() {
            if (this.$page.path) {
                const layout = this.$page.frontmatter.layout;
                if (
                    layout &&
                    (this.$vuepress.getLayoutAsyncComponent(layout) ||
                        this.$vuepress.getVueComponent(layout))
                ) {
                    return layout;
                }
                return "Layout";
            }
            return "NotFound";
        },
    },
};
</script>

<style lang="stylus">
@import '../style/base-color'
@import '../style/default-content'

body {
    margin 0
    color default-font-color
    font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
}

.theme-container {
    position relative
}

.main {
    margin-left 281px
    width 900px
    border-right 1px solid border-line-color
    min-height 100vh
}

.change-enter-active {
    transition all 0.3s ease
}

.change-leave-active {
    transition all 0.3s ease
}

.change-enter {
    transform translate(-20px)
    opacity 0
}

.change-leave-to {
    transform translateY(20px)
    opacity 0
}
</style>