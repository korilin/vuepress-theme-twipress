<template>
    <div class="home-posts">
        <div class="title">
            {{ title }}
            <Date :date="date" />
        </div>
        <div class="info">
            <Category :category="category" />
            <Tags :tags="tags" />
        </div>
        <div class="excerpt" v-html="excerpt"></div>
        <div class="footer">
            <router-link :to="$withBase(path)" class="read-more">Read More</router-link>
            <div class="share share-icon" :title="'share this post'">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                    <path
                        d="M896 469.333333l-298.666667-298.666667 0 170.666667C298.666667 384 170.666667 597.333333 128 810.666667c106.666667-149.333333 256-217.6 469.333333-217.6L597.333333 768 896 469.333333z"
                        p-id="7022"
                        fill="#1296db"
                    ></path>
                </svg>
            </div>
            <div class="share">
                <TwitterShare :title="title" :path="path" :width="16" :height="16" />
            </div>
            <div class="share">
                 <WeiboShare :title="title" :path="path" :width="16" :height="16" />
            </div>
        </div>
    </div>
</template>

<script>
import Tags from "../components/Tags";
import Category from "../components/Category";
import Date from "../components/Date";
import TwitterShare from "../components/share/TwitterShare";
import WeiboShare from "../components/share/WeiboShare";

export default {
    name: "HomePost",
    props: ["title", "date", "tags", "category", "excerpt", "path"],
    components: {
        Tags,
        Category,
        Date,
        TwitterShare,
        WeiboShare,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped lang="stylus">
.home-posts {
    border-bottom 1px solid border-line-color
    padding 30px 40px
}

.excerpt {
    font-size 15px
    line-height 1.5
}

.title {
    font-size 16px
    font-weight bold
    color default-font-color
    display flex
    align-items center
}

.info {
    display flex
    padding-top 15px
    font-size 14px
    color minor-font-color
    font-weight bold
}

.footer {
    font-size 14px
    text-align right
    position relative
    margin-top 20px

    .read-more {
        position absolute
        left 0px
        padding 8px 12px
        color minor-font-color
        border 1px solid minor-font-color
        border-radius 20px
        transition all 0.5s
        text-decoration none

        &:hover {
            color white
            background color-blue
            border 1px solid color-blue
        }
    }

    .share {
        display inline-block
    }

    .share-icon {
        padding 10px
    }
}
</style>