<template>
    <div class="date">
        <div class="svg">
            <svg
                t="1610177893433"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5858"
                width="16"
                height="16"
            >
                <path
                    d="M512 192c179.2 0 320 140.8 320 320s-140.8 320-320 320-320-140.8-320-320S332.8 192 512 192M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128L512 128z"
                    p-id="5859"
                    fill="#707070"
                ></path>
                <path
                    d="M640 672c-6.4 0-19.2 0-25.6-6.4l-128-128C486.4 531.2 480 518.4 480 512L480 288C480 268.8 492.8 256 512 256s32 12.8 32 32l0 211.2 121.6 121.6c12.8 12.8 12.8 32 0 44.8C659.2 672 646.4 672 640 672z"
                    p-id="5860"
                    fill="#707070"
                ></path>
            </svg>
        </div>
        <div class="content">{{ getDate(date) }}</div>
    </div>
</template>

<script>
export default {
    name: "Date",
    props: ["date"],
    methods: {
        getDate: function (date) {
            let d = new Date(date);
            return d.toLocaleDateString();
        },
    },
};
</script>

<style lang="stylus" scoped>
.date {
    .svg {
        height 16px
        display flex
        align-items center
    }

    width 90px
    margin-left 10px
    display flex
    align-items center
    font-size 14px
    color minor-font-color
    margin-left 10px
    font-weight 400
}
</style>