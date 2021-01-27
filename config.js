module.exports = {
    base: "/blog/",
    title: "KORILIN",
    description: "Kori Lin BLOG",
    theme: "vuepress-theme-vuetter",
    head: [
        ["link", { rel: "icon", href: "/logo.png" }],
        ["meta", { name: "twitter:card", content: "summary_large_image" }],
        ["meta", { name: "twitter:site", conetent: "KORILIN" }],
        ["meta", { name: "twitter:creator", conetent: "@Kori_Lin" }],
    ],
    themeConfig: {
        startTime: 2018,
        ICP: "粤ICP备19149652号",
        author: {
            name: "Kori Lin",
            avatar: "/avatar.jpg",
            description: "一个热爱开源的开发者",
            communities: [
                {
                    id: "Github",
                    icon: "/author/github.png",
                    text: "korilin",
                    url: "https://github.com/korilin",
                },
                {
                    id: "Twitter",
                    icon: "/author/twitter.png",
                    text: "korilin_dev",
                    url: "https://twitter.com/korilin_dev",
                },
                {
                    id: "Telegram",
                    icon: "/author/telegram.png",
                    text: "tg",
                    url: "https://t.me/korilin",
                },
                {
                    id: "Email",
                    icon: "/author/email.png",
                    text: "korilin.dev@gmail.com",
                },
            ],
        },
        homeShowCategories: ["设计理解", "算法代码", "解决方案"],
    },
};
