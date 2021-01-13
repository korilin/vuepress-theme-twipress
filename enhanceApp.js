import GlobalLayout from "./theme/layouts/GlobalLayout";

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
    let themeRoutes = [
        {
            path: "/",
            component: GlobalLayout,
            meta: { tag: true },
        },
        {
            path: "/about",
            component: GlobalLayout,
            meta: { tag: true },
        },
        {
            path: "/archive",
            component: GlobalLayout,
            meta: { tag: true },
        },
    ];
    router.addRoutes(themeRoutes);

    siteData.pages.sort((a, b) => {
        let da = new Date(a.frontmatter.date);
        let db = new Date(b.frontmatter.date);
        return db.getTime() - da.getTime();
    });

    let all_tags = [];
    let all_categories = [];
    for (let i = 0; i < siteData.pages.length; i++) {
        let tags = siteData.pages[i].frontmatter.tags;
        let categories = siteData.pages[i].frontmatter.categories;
        if (categories == undefined)
            categories = siteData.pages[i].frontmatter.category;

        if (tags != undefined) {
            for (let ti = 0; ti < tags.length; ti++) {
                let tag = tags[ti];
                if (!all_tags.includes(tag)) {
                    all_tags.push(tag);
                }
            }
        }

        if (categories != undefined) {
            if (Array.isArray(categories)) {
                for (let ci = 0; ci < categories.length; ci++) {
                    let category = categories[ci];
                    if (!all_categories.includes(category)) {
                        all_categories.push(category);
                    }
                }
                siteData.pages[i].frontmatter.category = categories[0];
            } else {
                let category = categories;
                if (!all_categories.includes(category)) {
                    all_categories.push(category);
                }
                siteData.pages[i].frontmatter.category = category;
            }
        }
    }
    siteData.themeConfig["all_tags"] = all_tags;
    siteData.themeConfig["all_categories"] = all_categories;
};
