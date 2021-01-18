<template>
    <div id="toolbar">
        <div class="phone" v-if="screenWidth < 1000">
            <div class="search">
                <SearchBox />
            </div>
        </div>
        <div class="toolbar" v-if="screenWidth >= 1000">
            <div class="search">
                <SearchBox />
            </div>
            <div class="post-sort">
                <div class="title">Post Order</div>
                <div class="op">
                    By Time
                    <svg
                        v-show="sort == 'DESC'"
                        t="1610607067172"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2795"
                        width="20"
                        height="20"
                    >
                        <path
                            d="M495.765247 353.091804 333.414649 190.741205 171.065074 353.091804 304.386522 353.091804l0 420.142919c0 17.947767 14.046924 32.469506 31.978319 32.469506 17.931395 0 31.978319-14.522762 31.978319-32.469506L368.343159 353.091804 495.765247 353.091804z"
                            p-id="2796"
                        ></path>
                        <path
                            d="M720.104665 672.874991 720.104665 221.24494c0-17.947767-14.046924-32.469506-31.978319-32.469506s-31.978319 14.522762-31.978319 32.469506l0 451.630051-127.913275 0 162.349575 162.349575 162.349575-162.349575L720.104665 672.874991z"
                            p-id="2797"
                            data-spm-anchor-id="a313x.7781069.0.i7"
                            class="selected"
                            fill="#1296db"
                        ></path>
                    </svg>
                    <svg
                        v-show="sort == 'ASC'"
                        t="1610612746140"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2973"
                        width="20"
                        height="20"
                    >
                        <path
                            d="M495.765247 353.091804 333.414649 190.741205 171.065074 353.091804 304.386522 353.091804l0 420.142919c0 17.947767 14.046924 32.469506 31.978319 32.469506 17.931395 0 31.978319-14.522762 31.978319-32.469506L368.343159 353.091804 495.765247 353.091804z"
                            p-id="2974"
                            data-spm-anchor-id="a313x.7781069.0.i9"
                            class="selected"
                            fill="#1296db"
                        ></path>
                        <path
                            d="M720.104665 672.874991 720.104665 221.24494c0-17.947767-14.046924-32.469506-31.978319-32.469506s-31.978319 14.522762-31.978319 32.469506l0 451.630051-127.913275 0 162.349575 162.349575 162.349575-162.349575L720.104665 672.874991z"
                            p-id="2975"
                        ></path>
                    </svg>
                    :
                    <span class="content" @click="postSort">{{ sort }}</span>
                </div>
            </div>
            <div class="statistics">
                <div class="title">Article Statistics</div>
                <div class="data">
                    Article: {{ this.$site.pages.length - 2 }}
                </div>
                <div class="data">
                    Categories: {{ this.$themeConfig.all_categories.length }}
                </div>
                <div class="data">
                    Tags: {{ this.$themeConfig.all_tags.length }}
                </div>
                <div class="more">
                    <router-link to="/archive">see more</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBox from "@SearchBox";
export default {
    name: "Toolbar",
    props: ["screenWidth"],
    components: { SearchBox },
    data() {
        return {
            sort: "DESC",
        };
    },
    methods: {
        postSort() {
            this.sort = this.sort == "DESC" ? "ASC" : "DESC";
            this.$site.pages.reverse();
        },
        opToolbar(show) {
            this.show = show;
        },
    },
};
</script>

<style scoped lang="stylus">
.phone {
    position absolute
    top 15px
    width 100%

    .search {
        position relative
        left -20px
        text-align right
    }
}

.toolbar {
    position fixed
    height 100vh
    width 298px
    padding-top 50px
    left calc(100% / 2 + 450px)
    top 0
    border-left 1px solid border-line-color
    border-right 1px solid border-line-color
    background #ffffff

    @media (min-width 1310px) and (max-width 1510px) {
        left calc(100% / 2 + 350px)
    }

    @media (min-width 1010px) and (max-width 1310px) {
        left calc(100% - 300px)
    }

    @media screen and (max-width 1010px) {
        width 0
        display none
    }

    .search {
        text-align center
    }

    .post-sort {
        margin-top 50px

        .title {
            margin-bottom 10px
            font-size 18px
            font-weight bold
            color color-blue
            text-align center
        }

        .op {
            display flex
            justify-content center
            align-items center

            .content {
                margin-left 5px
                color color-blue
                font-weight bold
                font-size 14px
                border 1px solid color-blue
                border-radius 5px
                padding 2px 5px
                transition all 0.3s

                &:hover {
                    color white
                    background color-blue
                }
            }
        }
    }

    .statistics {
        margin-top 50px
        position relative

        .title {
            margin-bottom 20px
            font-size 18px
            font-weight bold
            color color-blue
            text-align center
        }

        .data {
            text-align left
            width 200px
            margin-top 10px
            font-weight bold
            padding-left 80px
        }

        .more {
            text-align left
            width 140px
            margin-top 10px
            padding-left 80px
            color color-blue
            user-select none

            a {
                color color-blue
            }
        }
    }
}
</style>