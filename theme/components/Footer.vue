<template>
    <div class="footer">
        <CutOffRule />
        <footer>
            <div>
                © {{ this.$themeConfig.startTime }} - {{ new Date().getFullYear() }}
                <svg
                    viewBox="64 64 896 896"
                    data-icon="flag"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    class=""
                >
                    <path
                        fill="#1296db"
                        d="M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z"
                    ></path>
                </svg>
                @{{ this.$themeConfig.author.name }}
            </div>
            <div>
                Based on the
                <a href="https://vuepress.vuejs.org/" target="_blank"
                    >Vuepress Powered</a
                >
                &
                <a
                    href="https://github.com/korilin/vuepress-theme-twipress"
                    target="_blank"
                    >Twipress Theme</a
                >
            </div>
            <div v-if="this.$themeConfig.ICP != undefine">
                备案号：<a
                    target="_blank"
                    rel="noopener"
                    href="http://beian.miit.gov.cn/"
                >
                    {{ this.$themeConfig.ICP }}
                </a>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped lang="stylus">
.footer {
    margin-bottom 20px
    font-size 14px
    color minor-font-color

    footer {
        margin 30px auto 20px
        text-align center

        a {
            color color-blue
        }

        div {
            margin-top 15px
        }
    }
}
</style>