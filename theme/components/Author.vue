<template>
    <div class="author">
        <div class="info">
            <img class="avatar" :src="avatar" alt="avatar" />
            <div class="author-info">
                <div class="name">{{ name }}</div>
                <div class="description">{{ description }}</div>
            </div>
        </div>
        <div class="community">
            <template v-for="community in communities">
                <template
                    v-if="community.url != '' && community.url != undefined"
                >
                    <div>
                        <a
                            class="link"
                            :key="community.id"
                            :href="community.url"
                            target="_blank"
                            :title="community.id"
                        >
                            <img
                                width="16px"
                                :src="$withBase(community.icon)"
                                v-if="community.icon"
                            />
                            <span v-if="community.text">{{
                                community.text
                            }}</span>
                        </a>
                    </div>
                </template>
                <template v-else>
                    <div>
                        <span
                            class="link"
                            :key="community.id"
                            :href="community.url"
                            target="_blank"
                            :title="community.id"
                        >
                            <img
                                width="16px"
                                :src="$withBase(community.icon)"
                                v-if="community.icon"
                            />
                            <span v-if="community.text">{{
                                community.text
                            }}</span>
                        </span>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "Author",
    created() {
        this.name = this.$themeConfig.author.name;
        this.avatar = this.$themeConfig.author.avatar;
        this.description = this.$themeConfig.author.description;
        this.communities = this.$themeConfig.author.communities;
    },
    data() {
        return {
            name: "",
            avatar: "",
            description: "",
            communities: {},
        };
    },
};
</script>

<style scoped lang="stylus">
.info {
    padding 20px
    display flex
    position relative

    .avatar {
        border-radius 50%
        border 1px solid border-line-color

        @media screen and (min-width 700px) {
            width 99px
            height 99px
        }

        @media screen and (max-width 700px) {
            width 79px
            height 79px
        }
    }

    .author-info {
        margin-left 20px

        .name {
            font-size 18px
            font-weight bold
        }

        .description {
            margin-top 10px
        }
    }
}

.community {
    padding 10px 20px 20px
    display flex
    flex-wrap wrap

    .link {
        text-decoration none
        color minor-font-color
        margin 0 10px
    }
}
</style>