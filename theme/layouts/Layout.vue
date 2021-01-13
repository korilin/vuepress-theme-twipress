<template>
    <div class="layout">
        <div class="title">
            {{ page }}
        </div>
        <Author />
        <CutOffRule />
        <transition name="change" mode="out-in">
            <template v-if="page == 'Home'">
                <Home />
            </template>
            <template v-else-if="page == 'Archive'">
                <Archive />
            </template>
            <template v-else-if="page == 'About'">
                <About />
            </template>
        </transition>
    </div>
</template>

<script>
import Author from "../components/Author";
import CutOffRule from "../components/CutOffRule";
import Home from "./Home";
import Archive from "./Archive";
import About from "./About";
export default {
    name: "Layout",
    props: ["page"],
    components: {
        Author,
        CutOffRule,
        Home,
        Archive,
        About,
    },
};
</script>

<style scoped lang="stylus">
@import '../style/base-color'

.layout {
    .title {
        border-bottom 1px solid border-line-color
        padding 20px
        font-weight bold
        font-size 18px
    }
}
</style>