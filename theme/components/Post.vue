<template>
    <div class="post">
        <div class="title">
            <h1>{{ page.title }}</h1>
        </div>
        <div class="info">
            <Date :date="page.frontmatter.date" />
            <Category :category="getCategory(page)" />
            <Tags :tags="page.frontmatter.tags" />
        </div>
        <div class="content">
            <Content />
        </div>
    </div>
</template>

<script>
import Date from "./Date";
import Tags from "./Tags";
import Category from "./Category";

export default {
    name: "Post",
    components: {
        Date,
        Tags,
        Category,
    },
    created() {
        this.page = this.$page;
    },
    data() {
        return {
            page: {},
        };
    },
    methods: {
        getCategory: function (post) {
            let categories = post.frontmatter.categories;
            return Array.isArray(categories) ? categories[0] : categories;
        },
    },
};
</script>

<style scoped lang="stylus">
@import '../style/base-color'

.post {
    padding 24px 40px

    .info {
        font-size 14px
        display flex
    }

    .content {
        margin-top 50px
    }
}
</style>