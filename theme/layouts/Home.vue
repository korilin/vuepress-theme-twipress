<template>
    <div class="home">
        <transition-group name="show">
            <template
                v-for="(post, index) in pages"
                v-if="isShow(homeShowCategories, post)"
            >
                <HomePost
                    v-if="post.path != '/about/'"
                    :title="post.title"
                    :date="post.frontmatter.date"
                    :tags="post.frontmatter.tags"
                    :category="post.frontmatter.category"
                    :excerpt="post.excerpt"
                    :path="post.path"
                    :key="index"
                />
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
        this.homeShowCategories = this.$themeConfig.homeShowCategories;
    },
    components: {
        HomePost,
        Author,
        CutOffRule,
    },
    data() {
        return {
            pages: [],
            homeShowCategories: [],
        };
    },
    methods: {
        isShow(homeShowCategories, post) {
            let categories = post.frontmatter.categories;
            if (Array.isArray(categories)) {
                for (let i = 0; i < categories.length; i++)
                    if (homeShowCategories.includes(categories[i])) return true;

                return false;
            } else return homeShowCategories.includes(categories);
        },
    },
};
</script>

<style scoped lang="stylus">
.home {
}
</style>