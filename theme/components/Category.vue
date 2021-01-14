<template>
    <div class="category">
        <div class="svg">
            <svg
                t="1610177808699"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4460"
                width="16"
                height="16"
            >
                <path
                    d="M725.290667 725.290667m-213.333334 0a213.333333 213.333333 0 1 0 426.666667 0 213.333333 213.333333 0 1 0-426.666667 0Z"
                    p-id="4461"
                    fill="#707070"
                ></path>
                <path
                    d="M789.205333 234.794667m-149.333333 0a149.333333 149.333333 0 1 0 298.666667 0 149.333333 149.333333 0 1 0-298.666667 0Z"
                    p-id="4462"
                    fill="#707070"
                ></path>
                <path
                    d="M235.861333 788.138667m-149.333333 0a149.333333 149.333333 0 1 0 298.666667 0 149.333333 149.333333 0 1 0-298.666667 0Z"
                    p-id="4463"
                    fill="#707070"
                ></path>
                <path
                    d="M298.709333 298.709333m-213.333333 0a213.333333 213.333333 0 1 0 426.666667 0 213.333333 213.333333 0 1 0-426.666667 0Z"
                    p-id="4464"
                    fill="#707070"
                ></path>
            </svg>
        </div>
        <div class="content">{{ category }}</div>
    </div>
</template>

<script>
export default {
    name: "Category",
    props: ["category"],
    methods: {},
};
</script>

<style scoped lang="stylus">
.category {
    display flex
    align-items center
    width 120px
    margin 0 10px
    font-size 14px
    color minor-font-color
    font-weight bold
}

.svg {
    display flex
    align-items center
    font-weight bold
    margin-right 8px
}
</style>