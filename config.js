module.exports = {
    base: "/blog/",
    title: "KORILIN",
    description: "Kori Lin BLOG",
    theme: "vuepress-theme-vuetter",
    head: [
        ["link", { rel: "icon", href: "/logo.png" }],
        ["meta", { name: "twitter:card", content: "summary" }],
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
                    icon: "/static/author/github.png",
                    text: "korilin",
                    url: "https://twitter.com/korilin_dev",
                },
                {
                    id: "Twitter",
                    icon: "/static/author/twitter.png",
                    text: "korilin_dev",
                    url: "https://twitter.com/korilin_dev",
                },
                {
                    id: "Email",
                    icon: "/static/author/email.png",
                    text: "korilin.dev@gmail.com",
                    url: "",
                },
            ],
        },
        homeShowCategories: ["技术理解"],
    },
};
