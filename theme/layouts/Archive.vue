<template>
    <div class="archive">
        <div class="statistics">
            <div class="lable">Statistics:</div>
            <div>Article {{ posts.length - 2 }}</div>
            <div>Categories {{ categories.length }}</div>
            <div>Tags {{ tags.length }}</div>
        </div>
        <div class="labels">
            <div class="title">Categories</div>
            <div class="all">
                <div
                    :class="
                        categories_select.includes(category)
                            ? 'item select'
                            : 'item'
                    "
                    v-for="category in categories"
                    @click="selectCategory(category)"
                    :key="category"
                >
                    {{ category }}
                    <span class="count">
                        {{ category_post_count[category] }}</span
                    >
                </div>
            </div>
        </div>
        <div class="labels">
            <div class="title">Tags</div>
            <div class="all">
                <div
                    :class="tags_select.includes(tag) ? 'item select' : 'item'"
                    v-for="tag in tags"
                    @click="selectTag(tag)"
                    :key="tag"
                >
                    {{ tag
                    }}<span class="count"> {{ tag_post_count[tag] }}</span>
                </div>
            </div>
        </div>
        <div class="posts">
            <transition-group name="show">
                <template
                    v-for="(post, index) in posts"
                    v-if="post.path != '/about/' && post.path != '/'"
                >
                    <div :key="index" v-if="isShow(post)">
                        <router-link :to="post.path" class="router-link">
                            <div class="post">
                                <div class="date">
                                    <Date :date="post.frontmatter.date" />
                                </div>
                                <div class="post-info">
                                    <div class="title">
                                        {{ post.title }}
                                    </div>
                                    <div class="label">
                                        <Category
                                            :category="
                                                post.frontmatter.category
                                            "
                                        />
                                        <Tags :tags="post.frontmatter.tags" />
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </template>
            </transition-group>
        </div>
    </div>
</template>

<script>
import CutOffRule from "../components/CutOffRule";
import Date from "../components/Date";
import Category from "../components/Category";
import Tags from "../components/Tags";

export default {
    name: "Archive",
    components: { CutOffRule, Date, Category, Tags },
    created() {
        this.posts = this.$site.pages;
        this.categories = this.$themeConfig.all_categories;
        this.tags = this.$themeConfig.all_tags;
        this.category_post_count = this.$themeConfig.category_post_count;
        this.tag_post_count = this.$themeConfig.tag_post_count;
    },
    data() {
        return {
            posts: [],
            categoires: [],
            category_post_count: {},
            tags: [],
            tag_post_count: {},
            categories_select: [],
            tags_select: [],
        };
    },
    methods: {
        selectCategory(category) {
            let i = this.categories_select.indexOf(category);
            if (i == -1) this.categories_select.push(category);
            else this.categories_select.splice(i, 1);
        },
        selectTag(tag) {
            let i = this.tags_select.indexOf(tag);
            if (i == -1) this.tags_select.push(tag);
            else this.tags_select.splice(i, 1);
        },
        isShow(post) {
            let cs = this.categories_select.length == 0;
            let ts = this.tags_select.length == 0;
            let category = post.frontmatter.categories;
            let tags = post.frontmatter.tags;
            if (tags == undefined) tags = [];

            if (cs == false) cs = this.categories_select.includes(category);

            let i = 0;
            while (!ts && i < tags.length) {
                ts = this.tags_select.includes(tags[i]);
                i++;
            }
            return cs && ts;
        },
    },
};
</script>

<style lang="stylus" scoped>
.statistics {
    font-size 16px
    display flex
    padding 20px 0
    border-bottom 1px solid border-line-color

    .lable {
        font-weight bold
        font-size 18px
    }

    div {
        width 25%
        text-align center
    }
}

.labels {
    padding 20px 0
    border-bottom 1px solid border-line-color

    .title {
        text-align center
        font-size 20px
        font-weight bold
    }

    .all {
        display flex
        justify-content center
        flex-wrap wrap
        color minor-font-color
        padding 20px 50px
        user-select none
    }

    .item {
        padding 6px 12px
        border-radius 12px
        border 1px solid border-line-color
        margin 5px 10px
        transition all 0.3s
        line-height 27px

        .count {
            width 25px
            height 25px
            font-size 12px
            display inline-block
            line-height 25px
            text-align center
            margin-left 5px
            background #ebeef0
            border-radius 50%
            color minor-font-color !important
        }

        &:hover {
            color color-blue
            border-color color-blue
        }
    }

    .select {
        color white !important
        background color-blue !important
        border-color color-blue !important

        .count {
            background #ffffff
            color color-blue !important
        }

        &:hover {
            background-color #1a91da !important

            .count {
                color #1a91da !important
            }
        }
    }
}

.posts {
    margin-top 20px
    transition all 0.5s

    .router-link {
        text-decoration none
        color default-font-color
    }

    .post {
        padding 12px 24px
        position relative
        transition all 0.5s

        .post-info {
            border 1px solid border-line-color
            padding 20px

            .title {
                font-size 16px
                font-weight bold
                position relative
                left 10px
            }

            .label {
                display flex
                padding-top 20px
            }
        }

        &:hover {
            transform translate3d(-5px, -5px, 5px)
        }
    }
}
</style>