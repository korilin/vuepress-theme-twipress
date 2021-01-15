<template>
    <div class="layout">
        <div class="title">
            {{ layout }}
        </div>
        <Author />
        <CutOffRule />
        <transition name="change" mode="out-in">
            <template v-if="layout == 'Home'">
                <Home />
            </template>
            <template v-else-if="layout == 'Archive'">
                <Archive />
            </template>
            <template v-else-if="layout == 'About'">
                <About />
            </template>
        </transition>
        <CutOffRule />
        <Footer />
    </div>
</template>

<script>
import Author from "../components/Author";
import CutOffRule from "../components/CutOffRule";
import Footer from "../components/Footer";
import Home from "./Home";
import Archive from "./Archive";
import About from "./About";
export default {
    name: "Layout",
    props: ["layout"],
    components: {
        Author,
        CutOffRule,
        Footer,
        Home,
        Archive,
        About,
    },
};
</script>

<style scoped lang="stylus">
.layout {
    .title {
        border-bottom 1px solid border-line-color
        padding 20px 20px
        font-weight bold
        font-size 18px
    }
}
</style>