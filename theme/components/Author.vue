<template>
    <div class="author">
        <div class="info">
            <img
                class="avatar"
                :src="avatar"
                alt="avatar"
                width="49px"
                height="49px"
            />
            <div class="author-info">
                <div class="name">{{ name }}</div>
                <div class="description">{{ description }}</div>
            </div>
        </div>
        <div class="community">
            <template v-for="community in communities">
                <a
                    class="link"
                    :key="community.id"
                    :href="community.url"
                    target="_blank"
                >
                    <img
                        width="16px"
                        :src="community.icon"
                        v-if="community.icon"
                    />
                    <span v-if="community.text">{{ community.text }}</span>
                </a>
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
            margin-top 5px
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