<template>
    <div class="wrap">
        <div class="post">
            <div class="title">
                <h1>{{ page.title }}</h1>
            </div>
            <div class="info">
                <Date :date="page.frontmatter.date" />
                <Category :category="getCategory(page)" />
                <Tags :tags="page.frontmatter.tags" />
            </div>
            <div class="line"></div>
            <div class="content">
                <Content />
            </div>
            <div class="footer">
                <div class="share share-icon" :title="'share this post'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                        <path
                            d="M896 469.333333l-298.666667-298.666667 0 170.666667C298.666667 384 170.666667 597.333333 128 810.666667c106.666667-149.333333 256-217.6 469.333333-217.6L597.333333 768 896 469.333333z"
                            p-id="7022"
                            fill="#1296db"
                        ></path>
                    </svg>
                </div>
                <div class="share">
                    <TwitterShare :title="page.title" :path="page.path" :width="20" :height="20" />
                </div>
                <div class="share">
                    <WeiboShare :title="page.title" :path="page.path" :width="20" :height="20" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Date from "./Date";
import Tags from "./Tags";
import Category from "./Category";
import TwitterShare from "../components/share/TwitterShare";
import WeiboShare from "../components/share/WeiboShare";
import Footer from "../components/Footer";

export default {
    name: "Post",
    components: {
        Date,
        Tags,
        Category,
        TwitterShare,
        WeiboShare,
        Footer,
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
.post {
    padding 24px 40px
    border-bottom 1px solid border-line-color

    .info {
        font-size 14px
        display flex
    }

    .line {
        border-top 1px solid border-line-color
        margin-top 30px
        margin-bottom 30px
    }

    .footer {
        font-size 14px
        text-align right
        position relative
        margin-top 40px

        .share {
            display inline-block
        }

        .share-icon {
            padding 10px
        }
    }

    @media screen and (max-width 710px) {
        padding-top 50px
    }
}
</style>