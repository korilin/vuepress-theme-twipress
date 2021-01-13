<template>
    <div class="author">
        <div class="info">
            <img
                class="avatar"
                :src="avatar"
                alt="avatar"
                width="99px"
                height="99px"
            />
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
                    <a
                        class="link"
                        :key="community.id"
                        :href="community.url"
                        target="_blank"
                        :title="community.id"
                    >
                        <img
                            width="16px"
                            :src="community.icon"
                            v-if="community.icon"
                        />
                        <span v-if="community.text">{{ community.text }}</span>
                    </a>
                </template>
                <template v-else>
                    <span
                        class="link"
                        :key="community.id"
                        :href="community.url"
                        target="_blank"
                        :title="community.id"
                    >
                        <img
                            width="16px"
                            :src="community.icon"
                            v-if="community.icon"
                        />
                        <span v-if="community.text">{{ community.text }}</span>
                    </span>
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
@import '../style/base-color'

.info {
    padding 20px
    display flex
    position relative

    .avatar {
        border-radius 50%
        border 1px solid border-line-color
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

    .link {
        text-decoration none
        color minor-font-color
        margin 0 10px
    }
}
</style>