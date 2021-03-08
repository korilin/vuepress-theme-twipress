<template>
    <div class="home">
        <transition-group name="show">
            <template v-for="(post, index) in pages">
                <template v-if="isShow(homeNotShowCategories, post)">
                    <HomePost
                        :title="post.title"
                        :date="post.frontmatter.date"
                        :tags="post.frontmatter.tags"
                        :category="post.frontmatter.category"
                        :excerpt="post.excerpt"
                        :path="post.path"
                        :key="index"
                    />
                </template>
            </template>
        </transition-group>
    </div>
</template>

<script>
import HomePost from "../components/HomePost";
import Author from "../components/Author";
import CutOffRule from "../components/CutOffRule";
export default {
    name: "Home",
    created() {
        this.pages = this.$site.pages;
        this.homeNotShowCategories = this.$themeConfig.homeNotShowCategories;
    },
    components: {
        HomePost,
        Author,
        CutOffRule,
    },
    data() {
        return {
            pages: [],
            homeNotShowCategories: [],
        };
    },
    methods: {
        isShow(homeNotShowCategories, post) {
            if (post.path == "/about/" || post.path == "/") return false;
            let categories = post.frontmatter.categories;
            if (Array.isArray(categories)) {
                for (let i = 0; i < categories.length; i++)
                    if (homeNotShowCategories.includes(categories[i]))
                        return false;
                return true;
            } else return !homeNotShowCategories.includes(categories);
        },
    },
};
</script>

<style scoped lang="stylus">
.home {
}
</style>